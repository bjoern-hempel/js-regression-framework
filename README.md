# A Javascript regression framework

This is a javascript regression analysis framework.


## 0. Introduction

Regression analysis is a statistical analysis technique that aims to model relationships between a dependent variable and one or more independent variables.


## 1. Linear regression (2D)

Linear regression, which is a special case of the general concept of regression analysis, is a statistical technique that attempts to explain an observed dependent variable by one or more independent variables.


### 1.1 Preliminary considerations

#### 1.1.1 Calculation of the slope m

<img src="https://latex.ixno.de/?r=300&p=1pt&c=1&f=m%20%3D%20%5Cfrac%7B%5Csum_%7Bi%3D1%7D%5En%28x_i-%5Coverline%7Bx%7D%29%28y_i-%5Coverline%7By%7D%29%7D%7B%5Csum_%7Bi%3D1%7D%5En%28x_i-%5Coverline%7Bx%7D%29%5E2%7D" width="253" alt="m = \frac{\sum_{i=1}^n(x_i-\overline{x})(y_i-\overline{y})}{\sum_{i=1}^n(x_i-\overline{x})^2}">

#### 1.1.2 Calculation of the intercept b

<img src="https://latex.ixno.de/?r=300&p=1pt&c=1&f=b%20%3D%20%5Coverline%7By%7D-m%20%5Ccdot%20%5Coverline%7Bx%7D" width="129" alt="b = \overline{y}-m \cdot \overline{x}">

#### 1.1.3 Calculation of the scope R<sup>2</sup>

<img src="https://latex.ixno.de/?r=300&p=1pt&c=1&f=R%5E2%20%3D%201%20-%20%5Cfrac%7B%5Csum_%7Bi%3D1%7D%5En%28y_i-%5Chat%7By%7D_i%29%5E2%7D%7B%5Csum_%7Bi%3D1%7D%5En%28y_i-%5Coverline%7By%7D%29%5E2%7D" width="239" alt="R^2 = 1 - \frac{\sum_{i=1}^n(y_i-\hat{y}_i)^2}{\sum_{i=1}^n(y_i-\overline{y})^2}">

### 1.2 Usage

Linear regression in 2-dimensional space, which is a special case of the general concept of regression analysis, is a statistical method that attempts to explain an observed dependent variable by one or more independent variables.

```javascript
var regression = Regression.linear();

regression.addRecord(20,  0);
regression.addRecord(16,  3);
regression.addRecord(15,  7);
regression.addRecord(16,  4);
regression.addRecord(13,  6);
regression.addRecord(10, 10);

var mn = regression.calculate();

console.log(String('y(x) = %s * x + %s').replace(/%s/, mn.m).replace(/%s/, mn.n));
```

**It returns:**

```javascript
y(x) = -0.9821428571428571 * x + 19.732142857142854
```


## A. Authors

* Björn Hempel <bjoern@hempel.li> - _Initial work_ - [https://github.com/bjoern-hempel](https://github.com/bjoern-hempel)


## B. Licence

This tutorial is licensed under the MIT License - see the [LICENSE.md](/LICENSE.md) file for details


## C. Closing words

Have fun! :)
