export const elitism = 0.005;
export const generationLimit = 100;
export const mutationProbability = 0.5;
export const mutationAggresivity = 0.5;
export const populationSize = 1000;
export const stopScore = 100;
export const islandOptions = {
    islands: 3,
    migration: 0.1,
    epoch: 10
};

export const evaluatorWeights = {
    commonNotConsecutiveWeekdays: 32.154,
    personalNotAvailableWeekdays: 32.154,
    personalNotAvailableDates: 32.154,
    avoidDoublets: 3.214,
    personalDesiredDutyDates: 0.324
};
