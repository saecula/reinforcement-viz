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

export const envs = [
  {
    key: 'CLIFF',
    name: 'cliff',
    metadata: {},
  },
  {
    key: 'WIND',
    name: 'wind',
    metadata: {},
  },
  {
    key: 'TUNNEL',
    name: 'tunnel',
    metadata: {},
  },
  {
    key: 'CASINO',
    name: 'casino',
    metadata: {},
  },
];
