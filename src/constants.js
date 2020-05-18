/* eslint-disable no-sparse-arrays */
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

export const O = 'white';
export const B = 'black';
export const R = 'red';
export const G = 'green';

// states: [
//   [O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O],
//   [O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O],
//   [O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O],
//   [O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, G],
//   [B, B, B, B, O, O, O, O, O, O, O, O, O, O, O, O, O, B],
//   [B, B, B, B, O, O, O, O, O, O, O, O, O, O, O, O, O, O],
//   [B, B, B, B, O, O, O, O, O, O, O, O, O, O, O, O, O, O],
//   [B, B, B, B, O, O, O, O, O, O, O, O, O, O, O, O, O, O],
//   [B, B, B, B, O, O, O, O, O, O, O, O, O, O, O, O, O, O],
//   [B, B, B, B, O, O, O, O, O, O, O, O, O, O, O, O, O, O],
//   [B, B, B, B, R, R, R, R, R, R, R, R, R, R, R, R, R, R],
// ],

class CliffEnvironment {}
class TunnelEnvironment {}
class WindEnvironment {}
class CasinoEnvironment {}

export const envs = [
  {
    key: 'CLIFF',
    name: 'cliff',
    class: CliffEnvironment,
    states: [
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      ,
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
    ],
  },
  {
    key: 'WIND',
    name: 'wind',
    class: WindEnvironment,
    states: [
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      ,
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
    ],
  },
  {
    key: 'TUNNEL',
    name: 'tunnel',
    class: TunnelEnvironment,
    states: [
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      ,
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
    ],
  },
  {
    key: 'CASINO',
    name: 'casino',
    class: CasinoEnvironment,
    states: [
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      ,
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
    ],
  },
];
