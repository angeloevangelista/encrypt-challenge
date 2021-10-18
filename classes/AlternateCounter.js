/**
 * A counter witch alters between ascendent and descendent order
 * given a minimum and maximum value
 */

class AlternateCounter {
  _limits;
  _counter;
  _signal;

  get counter() {
    return this._counter;
  }

  /**
   * @param {number} minValue Minimum value
   * @param {number} maxValue Maximum value
   */
  constructor(minValue, maxValue) {
    this._limits = {
      min: minValue,
      max: maxValue,
    };

    this._signal = 1;
    this._counter = minValue;
  }

  setNextCounter() {
    const isMinimumValue = this._counter === this._limits.min;
    const isMaximumValue = this._counter === this._limits.max;

    if (isMinimumValue) this._signal = 1;
    if (isMaximumValue) this._signal = -1;

    this._counter += 1 * this._signal;
  }
}

export { AlternateCounter };
