# A Javascript regression framework

This is a javascript regression framework.

## 0. Introduction

Coming soon..

## 1. Usage

### 1.1 Linear regression

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
