const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware para parsing JSON
app.use(bodyParser.json());
app.use(cors());

// Conexão ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB Atlas'))
.catch(err => console.error('Erro ao conectar ao MongoDB Atlas:', err));
// Schemas e Models
const userSchema = new mongoose.Schema({
  userId: { type: Number, required: true, unique: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Administrador', 'Utilizador', 'Outro'], required: true },
});

const athleteSchema = new mongoose.Schema({
  athleteId: { type: Number, required: true, unique: true },
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  nationality: { type: String, required: true },
  position: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  teamId: { type: Number, required: true },
  agentId: { type: Number, required: true },
  reports: { type: [Number], default: [] },
  tasks: { type: [Number], default: [] },
});

const teamSchema = new mongoose.Schema({
  teamId: { type: Number, required: true, unique: true },
  teamName: { type: String, required: true, unique: true },
  Escalao: { type: String},
  teamType: { type: String, enum: ['Own', 'Shadow', 'Club'], required: true },
  tasks: { type: [Number], default: [] },
});

const agentSchema = new mongoose.Schema({
  agentId: { type: Number, required: true, unique: true },
  agentName: { type: String, required: true, unique: true },
  contactInfo: { type: String, required: true },
});

const reportSchema = new mongoose.Schema({
  reportId: { type: Number, unique: true },
  athleteId: { type: Number, required: true },
  userId: { type: Number, required: true },
  technical: { type: Number, min: 1, max: 4, required: true },
  speed: { type: Number, min: 1, max: 4, required: true },
  competitiveAttitude: { type: Number, min: 1, max: 4, required: true },
  intelligence: { type: Number, min: 1, max: 4, required: true },
  height: { type: String, enum: ["High", "Medium", "Low"], required: true },
  morphology: { type: String, enum: ["Ectomorph", "Mesomorph", "Endomorph"], required: true },
  finalRating: { type: Number, min: 1, max: 4, required: true },
  freeText: { type: String },
});

// Antes de salvar, definir um reportId automaticamente
reportSchema.pre("save", async function (next) {
  if (!this.reportId) {
    const lastReport = await Report.findOne().sort("-reportId");
    this.reportId = lastReport ? lastReport.reportId + 1 : 1;
  }
  next();
});


const taskSchema = new mongoose.Schema({
  taskId: { type: Number, required: true, unique: true },
  teamId: { type: Number, required: true },
  athleteId: { type: Number, required: true },
  userId: { type: Number, required: true },
  description: { type: String, required: true },
});

// Modelos
const User = mongoose.model('User', userSchema);
const Athlete = mongoose.model('Athlete', athleteSchema);
const Team = mongoose.model('Team', teamSchema);
const Agent = mongoose.model('Agent', agentSchema);
const Report = mongoose.model('Report', reportSchema);
const Task = mongoose.model('Task', taskSchema);

// Rotas básicas
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.post('/users/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Utilizador não encontrado' });
    }

    // Aqui você deve verificar a senha (não implementado neste exemplo)
    // if (user.password !== password) {
    //   return res.status(400).json({ error: 'Senha incorreta' });
    // }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});


// CRUD para utilizadors
app.post('/users', async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    // Verifica se o email já está em uso
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('Email já existe:', email);
      return res.status(400).json({ error: 'Email já está em uso.' });
    }

    // Gera um novo userId baseado no último ID salvo
    const lastUser = await User.findOne().sort('-userId');
    const newUserId = lastUser ? lastUser.userId + 1 : 1;

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criação do utilizador
    const user = new User({
      userId: newUserId,
      fullName,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();
    console.log('utilizador criado com sucesso:', user);
    res.status(201).json({ message: 'utilizador criado com sucesso!', user });
  } catch (error) {
    console.error('Erro ao criar utilizador:', error);
    res.status(500).json({ error: 'Erro ao criar utilizador', details: error.message });
  }
});


app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar utilizador.' });
  }
});

// CRUD para atletas
app.post('/athletes', async (req, res) => {
  console.log('Recebendo dados para criar atleta:', req.body);
  try {
    const athlete = new Athlete(req.body);
    await athlete.save();
    console.log('Atleta criado:', athlete);
    res.status(201).send(athlete);
  } catch (error) {
    console.error('Erro ao criar atleta:', error);
    res.status(400).send(error);
  }
});



app.get('/athletes', async (req, res) => {
  try {
    const athletes = await Athlete.find({});
    console.log('Atletas encontrados:', athletes); 
    res.status(200).json(athletes);
  } catch (error) {
    console.error('Erro ao buscar atletas:', error); 
    res.status(500).json({ error: 'Erro ao buscar atletas.' });
  }
});

app.get('/athletes/:athleteId', async (req, res) => {
  const athleteId = parseInt(req.params.athleteId);
  try {
    const athlete = await Athlete.findOne({ athleteId });
    if (!athlete) {
      return res.status(404).json({ error: 'Jogador não encontrado.' });
    }
    res.status(200).json(athlete);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar detalhes do jogador.' });
  }
});

// CRUD para times
app.post('/teams', async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(201).send(team);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/teams', async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    console.error('Erro ao buscar equipes:', error);
    res.status(500).json({ error: 'Erro ao buscar equipes.' });
  }
});

app.get('/teams/:teamId/athletes', async (req, res) => {
  const teamId = parseInt(req.params.teamId);
  try {
    const athletes = await Athlete.find({ teamId });
    res.status(200).json(athletes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar atletas do time' });
  }
});

app.get('/teams/:teamId', async (req, res) => {
  const teamId = parseInt(req.params.teamId);
  try {
    const team = await Team.findOne({ teamId });
    if (!team) {
      return res.status(404).json({ error: 'Clube não encontrado.' });
    }
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar detalhes do clube.' });
  }
});

// CRUD para agentes
app.post('/agents', async (req, res) => {
  try {
    const agent = new Agent(req.body);
    await agent.save();
    res.status(201).send(agent);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para buscar informações do agente pelo nome do jogador
app.get('/agentInfo', async (req, res) => {
  const { playerName } = req.query;

  if (!playerName) {
    return res.status(400).json({ error: 'Nome do jogador é obrigatório.' });
  }

  try {
    // Buscar jogador pelo nome
    const athlete = await Athlete.findOne({ fullName: playerName });

    if (!athlete) {
      return res.status(404).json({ error: 'Jogador não encontrado.' });
    }

    // Buscar agente pelo agentId associado ao jogador
    const agent = await Agent.findOne({ agentId: athlete.agentId });

    if (!agent) {
      return res.status(404).json({ error: 'Agente não encontrado para o jogador informado.' });
    }

    // Retornar as informações do agente
    res.status(200).json({
      name: agent.agentName,
      phone: agent.contactInfo,
    });
  } catch (error) {
    console.error('Erro ao buscar informações do agente:', error);
    res.status(500).json({ error: 'Erro ao buscar informações do agente.' });
  }
});





// CRUD para relatórios
app.post("/reports", async (req, res) => {
  try {
    const newReport = new Report(req.body);
    await newReport.save();
    res.status(201).json({ message: "Relatório salvo com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar relatório:", error); // Exibir erro real
    res.status(500).json({ error: "Erro ao salvar o relatório", details: error.message });
  }
});


app.get('/reports', async (req, res) => {
  try {
      const reports = await Report.find({});
      res.json(reports);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.get('/reports/:reportId', async (req, res) => {
  const reportId = parseInt(req.params.reportId);
  try {
      const report = await Report.findOne({ reportId });
      if (!report) {
          return res.status(404).json({ error: 'Relatório não encontrado.' });
      }
      res.status(200).json(report);
  } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar relatório.' });
  }
});

// CRUD para tarefas
app.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find(); // Usando o modelo Task do mongoose
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefas.' });
  }
});
// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});