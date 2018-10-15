/**
 * A class to classify data structures (calculate regression).
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 1.0 (2018-10-08)
 */
class RegressionBase {

    /**
     * The constructor of this class.
     * Creates a new environment for regression class.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-08-31)
     */
    constructor() {
        this.name = 'RegressionBase';

        this.reset();
    }

    /**
     * Resets all internal variables.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     */
    reset() {
        this.x_sum   = 0;
        this.y_sum   = 0;
        this.x_2_sum = 0;
        this.xy_sum  = 0;
        this.count   = 0;
    }

    /**
     * Adds a new record.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     * @param x
     * @param y
     */
    addRecord(x, y) {
        this.x_sum   += x;
        this.y_sum   += y;
        this.x_2_sum += Math.pow(x, 2);
        this.xy_sum  += x * y;
        this.count++;
    }

    /**
     * Calculates the regression.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     * @returns {{m: number, n: number}}
     */
    calculate() {
        console.error(String('Do not use this class directory (%s)').replace(/%s/, this.name));
    }
}

/**
 * A class to calculate regressions.
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 1.0 (2018-08-31)
 */
class RegressionLinear extends RegressionBase {

    /**
     * The constructor of this class.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     */
    constructor() {
        super();

        this.name = 'RegressionLinear';
    }

    /**
     * Calculates the regression.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     * @returns {{m: number, n: number}}
     */
    calculate() {
        var x_mean = this.x_sum / this.count;
        var y_mean = this.y_sum / this.count;

        var m = (this.xy_sum - this.count * x_mean * y_mean) / (this.x_2_sum - this.count * Math.pow(x_mean, 2));
        var n = y_mean - m * x_mean;

        return {m: m, n: n};
    }
}

/**
 * A class to calculate polynomial regressions.
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 1.0 (2018-10-15)
 */
class RegressionPolynomial extends RegressionBase {

    /**
     * The constructor of this class.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     */
    constructor() {
        super();

        this.name = 'RegressionPolynomial';
    }

    /**
     * Calculates the regression.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     * @returns {{m: number, n: number}}
     */
    calculate() {
        /* Todo */

        return {};
    }
}

/**
 * A class to classify data structures (Regression factory).
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 1.0 (2018-10-08)
 */
var Regression = {

    /**
     * Linear regression.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     * @returns {RegressionLinear}
     */
    linear: function () {
        return new RegressionLinear();
    }

    /**
     * Polynomial regression.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-15)
     * @returns {RegressionPolynomial}
     */
    polynomial: function () {
        return new RegressionPolynomial();
    }
};
