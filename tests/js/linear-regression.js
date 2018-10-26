function startLinearRegressionTest() {

    /* RL.mdp: Calculate Q test 1 */
    new JsSuccessTest(
        RegressionLinear.SUCCESS_CALCULATE,
        new JsTestTestFunction(function () {
            var regression = Regression.linear();

            regression.addRecord(20,  0);
            regression.addRecord(16,  3);
            regression.addRecord(15,  7);
            regression.addRecord(16,  4);
            regression.addRecord(13,  6);
            regression.addRecord(10, 10);

            var result = regression.calculate();
            var score  = regression.calculateScore();

            var x = 20;
            var y = regression.calculateFunction(x);

            return (
                JsTest.equalNumber(result.coef, -0.9821, 3),
                JsTest.equalNumber(result.intercept, 19.7321, 3),
                JsTest.equalNumber(score, 0.9003, 3),
                JsTest.equalNumber(y, 0.0893, 3)
            );
        })
    );
}