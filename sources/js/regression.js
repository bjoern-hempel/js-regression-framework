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
     * @version 1.0 (2018-10-08)
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

        this.points = [];
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
        this.points.push({x: x, y: y});
    }

    /**
     * Calculates the regression.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     * @returns {{m: number, n: number}}
     */
    calculate() {
        console.error(String('Do not use this class directly (%s)').replace(/%s/, this.name));
    }

    /**
     * Calculate function.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     * @param x
     * @returns {number}
     */
    calculateFunction(x) {
        console.error(String('Do not use this class directly (%s)').replace(/%s/, this.name));
    }

    /**
     * Calculates the Score: R²
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-24)
     * @returns {number}
     */
    calculateScore() {
        console.error(String('Do not use this class directly (%s)').replace(/%s/, this.name));
    }
}

/**
 * A class to calculate linear regressions.
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 1.0 (2018-10-08)
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

        this.x_mean = 0;
        this.y_mean = 0;

        this.m = 0;
        this.b = 0;
    }

    /**
     * Calculates the regression.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     * @returns {{m: number, n: number}}
     */
    calculate() {
        this.x_mean = this.x_sum / this.count;
        this.y_mean = this.y_sum / this.count;

        this.m = (this.xy_sum - this.count * this.x_mean * this.y_mean) / (this.x_2_sum - this.count * Math.pow(this.x_mean, 2));
        this.b = this.y_mean - this.m * this.x_mean;

        return {
            m: this.m,
            b: this.b
        };
    }

    /**
     * Calculate function.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     * @param x
     * @returns {number}
     */
    calculateFunction(x) {
        return this.m * x + this.b;
    }

    /**
     * Calculates the Score: R²
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-24)
     * @returns {number}
     */
    calculateScore() {
        var numerator   = 0;
        var denominator = 0;

        for (var i = 0; i < this.points.length; i++) {
            numerator   += Math.pow(this.points[i].y - this.calculateFunction(this.points[i].x), 2);
            denominator += Math.pow(this.points[i].y - this.y_mean, 2);
        }

        return 1 - numerator / denominator;
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
 * A class to calculate logistic regressions.
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 1.0 (2018-10-15)
 */
class RegressionLogistic extends RegressionBase {

    /**
     * The constructor of this class.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     */
    constructor() {
        super();

        this.name = 'RegressionLogistic';
    }

    /**
     * Calculates the logistic regression.
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
    },

    /**
     * Polynomial regression.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-15)
     * @returns {RegressionPolynomial}
     */
    polynomial: function () {
        return new RegressionPolynomial();
    },

    /**
     * Logistic regression.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-15)
     * @returns {RegressionLogistic}
     */
    logistic: function () {
        return new RegressionLogistic();
    }
};
