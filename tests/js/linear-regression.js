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

            var mb    = regression.calculate();
            var score = regression.calculateScore();
            var y     = regression.calculateFunction(20);

            return (
                JsTest.equalNumber(mb.m, -0.9821, 3),
                JsTest.equalNumber(mb.b, 19.7321, 3),
                JsTest.equalNumber(score, 0.9003, 3),
                JsTest.equalNumber(y, 0.0893, 3)
            );
        })
    );
}