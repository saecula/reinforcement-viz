export const agentsList = [
  {
    id: 1,
    name: 'Monte Carlo',
    fields: ['alpha', 'gamma', 'epsilon'],
  },
  {
    id: 2,
    name: 'SARSA',
    fields: ['alpha', 'gamma', 'epsilon'],
  },
  {
    id: 3,
    name: 'Q learning',
    fields: ['alpha', 'gamma'],
  },
  {
    id: 4,
    name: 'Double Q learning',
    fields: ['gamma', 'epsilon'],
  },
  {
    id: 5,
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

export const envs = [
  {
    id: 1,
    name: 'cliff',
    metadata: {},
  },
  {
    id: 2,
    name: 'wind',
    metadata: {},
  },
  {
    id: 3,
    name: 'tunnel',
    metadata: {},
  },
  {
    id: 4,
    name: 'casino',
    metadata: {},
  },
];
