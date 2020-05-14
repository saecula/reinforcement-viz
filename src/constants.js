export const agentsList = [
  {
    key: 'MONTE_CARLO',
    name: 'Monte Carlo',
    fields: ['alpha', 'gamma', 'epsilon'],
  },
  {
    key: 'SARSA',
    name: 'SARSA',
    fields: ['alpha', 'gamma', 'epsilon'],
  },
  {
    key: 'Q_LEARNING',
    name: 'Q learning',
    fields: ['alpha', 'gamma'],
  },
  {
    key: 'DOUBLE_Q_LEARNING',
    name: 'Double Q learning',
    fields: ['gamma', 'epsilon'],
  },
  {
    key: 'N_SOMETHINGOROTHER',
    name: 'n somethingorother',
    fields: ['alpha'],
  },
];

// needs to be agent-specific
export const defaultValue = {
  epsilon: 0.3,
  alpha: 0.5,
  gamma: 0.8,
};

export const initialScenario = {
  id: 0,
  key: 'MONTE_CARLO',
  name: 'Monte Carlo',
};

const O = 'white';
const B = 'black';
const R = 'red';
const G = 'green';

export const envs = [
  {
    key: 'CLIFF',
    name: 'cliff',
    states: [
      [O, O, O, O, O, B],
      [O, O, O, O, O, B],
      [B, B, O, O, O, B],
      [B, B, O, O, G, B],
      [B, B, R, R, B, B],
      [B, B, R, R, B, B],
    ],
  },
  {
    key: 'WIND',
    name: 'wind',
    states: [
      [R, R, R, R, R, B],
      [O, O, O, O, O, B],
      [O, O, O, O, G, B],
      [B, B, O, O, B, B],
      [O, O, O, O, O, B],
      [B, B, R, R, B, B],
    ],
  },
  {
    key: 'TUNNEL',
    name: 'tunnel',
    states: [
      [O, O, O, O, O],
      [O, O, O, O, O],
      [R, O, O, O, G],
      [B, B, B, B, B],
      [O, O, O, O, O],
    ],
  },
  {
    key: 'CASINO',
    name: 'casino',
    states: [
      [O, O, O, O, R],
      [O, R, O, R, O],
      [O, O, O, O, O],
      [R, O, R, O, O],
      [O, O, O, O, G],
    ],
  },
];
