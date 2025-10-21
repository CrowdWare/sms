(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './sms.js', './kotlin-kotlin-stdlib.js', './kotlin-kotlin-test-kotlin-test-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./sms.js'), require('./kotlin-kotlin-stdlib.js'), require('./kotlin-kotlin-test-kotlin-test-js-ir.js'));
  else {
    if (typeof sms === 'undefined') {
      throw new Error("Error loading module 'at.crowdware:sms_test'. Its dependency 'sms' was not found. Please, check whether 'sms' is loaded prior to 'at.crowdware:sms_test'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'at.crowdware:sms_test'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'at.crowdware:sms_test'.");
    }
    if (typeof this['kotlin-kotlin-test-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'at.crowdware:sms_test'. Its dependency 'kotlin-kotlin-test-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-kotlin-test-js-ir' is loaded prior to 'at.crowdware:sms_test'.");
    }
    root['at.crowdware:sms_test'] = factory(typeof this['at.crowdware:sms_test'] === 'undefined' ? {} : this['at.crowdware:sms_test'], sms, this['kotlin-kotlin-stdlib'], this['kotlin-kotlin-test-kotlin-test-js-ir']);
  }
}(this, function (_, kotlin_at_crowdware_sms, kotlin_kotlin, kotlin_kotlin_test) {
  'use strict';
  //region block: imports
  var NumberValue = kotlin_at_crowdware_sms.$_$.a;
  var NumberValue_init_$Create$ = kotlin_at_crowdware_sms.$_$.g;
  var THROW_CCE = kotlin_kotlin.$_$.s2;
  var firstOrNull = kotlin_kotlin.$_$.w;
  var toString = kotlin_kotlin.$_$.w2;
  var ScriptEngine = kotlin_at_crowdware_sms.$_$.e;
  var assertEquals = kotlin_kotlin_test.$_$.a;
  var protoOf = kotlin_kotlin.$_$.b2;
  var ParseError = kotlin_at_crowdware_sms.$_$.c;
  var getKClass = kotlin_kotlin.$_$.b;
  var Companion_getInstance = kotlin_kotlin.$_$.r;
  var Unit_getInstance = kotlin_kotlin.$_$.s;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.n;
  var createFailure = kotlin_kotlin.$_$.u2;
  var checkResultIsFailure = kotlin_kotlin_test.$_$.c;
  var RuntimeError = kotlin_at_crowdware_sms.$_$.d;
  var ScriptError = kotlin_at_crowdware_sms.$_$.f;
  var SMS_getInstance = kotlin_at_crowdware_sms.$_$.h;
  var to = kotlin_kotlin.$_$.x2;
  var mapOf = kotlin_kotlin.$_$.b1;
  var assertTrue = kotlin_kotlin_test.$_$.b;
  var Companion_getInstance_0 = kotlin_at_crowdware_sms.$_$.i;
  var LexError = kotlin_at_crowdware_sms.$_$.b;
  var contains = kotlin_kotlin.$_$.e2;
  var classMeta = kotlin_kotlin.$_$.n1;
  var setMetadataFor = kotlin_kotlin.$_$.c2;
  var VOID = kotlin_kotlin.$_$.c;
  var suite = kotlin_kotlin_test.$_$.d;
  var test = kotlin_kotlin_test.$_$.e;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ScriptEngineTest, 'ScriptEngineTest', classMeta, VOID, VOID, ScriptEngineTest);
  //endregion
  function ScriptEngineTest$testNativeFunctions$lambda(args) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (args.get_size_woubt6_k$() >= 2) {
      var tmp_2 = args.get_c1px32_k$(0);
      tmp_1 = tmp_2 instanceof NumberValue;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_3 = args.get_c1px32_k$(1);
      tmp_0 = tmp_3 instanceof NumberValue;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_4 = args.get_c1px32_k$(0);
      var a = (tmp_4 instanceof NumberValue ? tmp_4 : THROW_CCE()).get_value_j01efc_k$();
      var tmp_5 = args.get_c1px32_k$(1);
      var b = (tmp_5 instanceof NumberValue ? tmp_5 : THROW_CCE()).get_value_j01efc_k$();
      tmp = new NumberValue(a * b);
    } else {
      tmp = NumberValue_init_$Create$(0);
    }
    return tmp;
  }
  function ScriptEngineTest$testKotlinFunction$lambda(args) {
    var tmp = firstOrNull(args);
    var tmp0_elvis_lhs = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : null;
    var num = tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs;
    return num * num;
  }
  function ScriptEngineTest$testSMSUtility$lambda(args) {
    return 'Hello ' + toString(firstOrNull(args)) + '!';
  }
  function ScriptEngineTest() {
  }
  protoOf(ScriptEngineTest).testBasicArithmetic_twn1rq_k$ = function () {
    var engine = new ScriptEngine();
    var result = engine.executeAndGetKotlin_7oi3xh_k$('2 + 3 * 4');
    assertEquals(14.0, result);
  };
  protoOf(ScriptEngineTest).testVariables_13rh9x_k$ = function () {
    var engine = new ScriptEngine();
    var result = engine.executeAndGetKotlin_7oi3xh_k$('\n            var x = 10\n            var y = 5\n            x + y\n        ');
    assertEquals(15.0, result);
  };
  protoOf(ScriptEngineTest).testFunctions_jyevtz_k$ = function () {
    var engine = new ScriptEngine();
    var result = engine.executeAndGetKotlin_7oi3xh_k$('\n            fun add(a, b) {\n                return a + b\n            }\n            add(3, 7)\n        ');
    assertEquals(10.0, result);
  };
  protoOf(ScriptEngineTest).testArrays_s7ltp8_k$ = function () {
    var engine = new ScriptEngine();
    var result = engine.executeAndGetKotlin_7oi3xh_k$('\n            var arr = [1, 2, 3]\n            arr.add(4)\n            arr.size\n        ');
    assertEquals(4.0, result);
  };
  protoOf(ScriptEngineTest).testNativeFunctions_q8lim6_k$ = function () {
    var engine = new ScriptEngine();
    engine.registerFunction_6iy5jg_k$('multiply', ScriptEngineTest$testNativeFunctions$lambda);
    var result = engine.executeAndGetKotlin_7oi3xh_k$('multiply(6, 7)');
    assertEquals(42.0, result);
  };
  protoOf(ScriptEngineTest).testKotlinFunction_ia19az_k$ = function () {
    var engine = new ScriptEngine();
    engine.registerKotlinFunction_woywhb_k$('square', ScriptEngineTest$testKotlinFunction$lambda);
    var result = engine.executeAndGetKotlin_7oi3xh_k$('square(5)');
    assertEquals(25.0, result);
  };
  protoOf(ScriptEngineTest).testControlFlow_mhv33d_k$ = function () {
    var engine = new ScriptEngine();
    var result = engine.executeAndGetKotlin_7oi3xh_k$('\n            fun factorial(n) {\n                if (n <= 1) {\n                    return 1\n                } else {\n                    return n * factorial(n - 1)\n                }\n            }\n            factorial(5)\n        ');
    assertEquals(120.0, result);
  };
  protoOf(ScriptEngineTest).testLoops_f9ks8j_k$ = function () {
    var engine = new ScriptEngine();
    var result = engine.executeAndGetKotlin_7oi3xh_k$('\n            var sum = 0\n            for (var i = 1; i <= 10; i = i + 1) {\n                sum = sum + i\n            }\n            sum\n        ');
    assertEquals(55.0, result);
  };
  protoOf(ScriptEngineTest).testForInLoop_slvueo_k$ = function () {
    var engine = new ScriptEngine();
    var result = engine.executeAndGetKotlin_7oi3xh_k$('\n            var numbers = [1, 2, 3, 4, 5]\n            var sum = 0\n            for (num in numbers) {\n                sum = sum + num\n            }\n            sum\n        ');
    assertEquals(15.0, result);
  };
  protoOf(ScriptEngineTest).testSyntaxError_6bfsnx_k$ = function () {
    var engine = new ScriptEngine();
    // Inline function 'kotlin.test.assertFailsWith' call
    // Inline function 'kotlin.test.assertFailsWith' call
    var exceptionClass = getKClass(ParseError);
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      engine.execute_bmqzmt_k$('var x = ');
      tmp = _Result___init__impl__xyqfz8(Unit_getInstance());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$2 = tmp;
    checkResultIsFailure(exceptionClass, null, tmp$ret$2);
  };
  protoOf(ScriptEngineTest).testRuntimeError_6kbu32_k$ = function () {
    var engine = new ScriptEngine();
    // Inline function 'kotlin.test.assertFailsWith' call
    // Inline function 'kotlin.test.assertFailsWith' call
    var exceptionClass = getKClass(RuntimeError);
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      engine.execute_bmqzmt_k$('unknownVariable + 1');
      tmp = _Result___init__impl__xyqfz8(Unit_getInstance());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$2 = tmp;
    checkResultIsFailure(exceptionClass, null, tmp$ret$2);
  };
  protoOf(ScriptEngineTest).testSyntaxValidation_x4y6ji_k$ = function () {
    var engine = new ScriptEngine();
    engine.validateSyntax_8di1yp_k$('var x = 42');
    // Inline function 'kotlin.test.assertFailsWith' call
    // Inline function 'kotlin.test.assertFailsWith' call
    var exceptionClass = getKClass(ScriptError);
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      engine.validateSyntax_8di1yp_k$('var x =');
      tmp = _Result___init__impl__xyqfz8(Unit_getInstance());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$2 = tmp;
    checkResultIsFailure(exceptionClass, null, tmp$ret$2);
  };
  protoOf(ScriptEngineTest).testSMSUtility_vf90l1_k$ = function () {
    var result = SMS_getInstance().execute_bmqzmt_k$('2 + 2');
    assertEquals(4.0, result);
    var tmp = SMS_getInstance();
    var result2 = tmp.execute_ujcjuu_k$('greet("World")', mapOf(to('greet', ScriptEngineTest$testSMSUtility$lambda)));
    assertEquals('Hello World!', result2);
    assertTrue(SMS_getInstance().validate_jsbgik_k$('var x = 10'));
  };
  protoOf(ScriptEngineTest).testStringInterpolation_i46nxr_k$ = function () {
    var engine = new ScriptEngine();
    var result1 = engine.executeAndGetKotlin_7oi3xh_k$('\n            var name = "World"\n            "Hello ${name}!"\n        ');
    assertEquals('Hello World!', result1);
    var result2 = engine.executeAndGetKotlin_7oi3xh_k$('\n            var x = 3\n            var y = 4\n            "The result is ${x + y}"\n        ');
    assertEquals('The result is 7', result2);
    var result3 = engine.executeAndGetKotlin_7oi3xh_k$('\n            var a = 10\n            var b = 5\n            "Sum: ${a + b}, Diff: ${a - b}"\n        ');
    assertEquals('Sum: 15, Diff: 5', result3);
  };
  protoOf(ScriptEngineTest).testStandardLibrary_5f0tc4_k$ = function () {
    var engine = Companion_getInstance_0().withStandardLibrary_n73i54_k$();
    var result = engine.executeAndGetKotlin_7oi3xh_k$('random(10)');
    var tmp;
    if (((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()) >= 0.0) {
      tmp = result < 10.0;
    } else {
      tmp = false;
    }
    assertTrue(tmp);
    var splitResult = engine.executeAndGetKotlin_7oi3xh_k$('\n            var parts = split("a,b,c", ",")\n            parts.size\n        ');
    assertEquals(3.0, splitResult);
  };
  protoOf(ScriptEngineTest).testBlockComments_4dj0rl_k$ = function () {
    var engine = new ScriptEngine();
    var result1 = engine.executeAndGetKotlin_7oi3xh_k$('\n            /* This is a block comment */\n            var x = 5\n            x + 3\n        ');
    assertEquals(8.0, result1);
    var result2 = engine.executeAndGetKotlin_7oi3xh_k$('\n            var a = 10\n            /* \n             * Multi-line comment\n             * with multiple lines\n             */\n            var b = 20\n            a + b\n        ');
    assertEquals(30.0, result2);
    var result3 = engine.executeAndGetKotlin_7oi3xh_k$('\n            var x = 1 /* inline comment */ + 2 // line comment\n            x * 3\n        ');
    assertEquals(9.0, result3);
  };
  protoOf(ScriptEngineTest).testUnterminatedBlockComment_aheets_k$ = function () {
    var engine = new ScriptEngine();
    // Inline function 'kotlin.test.assertFailsWith' call
    // Inline function 'kotlin.test.assertFailsWith' call
    var exceptionClass = getKClass(LexError);
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      engine.execute_bmqzmt_k$('\n                var x = 5\n                /* This comment is not closed\n                var y = 10\n            ');
      tmp = _Result___init__impl__xyqfz8(Unit_getInstance());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$2 = tmp;
    checkResultIsFailure(exceptionClass, null, tmp$ret$2);
  };
  protoOf(ScriptEngineTest).testDoubleRejectError_bvog5y_k$ = function () {
    var engine = new ScriptEngine();
    // Inline function 'kotlin.test.assertFailsWith' call
    // Inline function 'kotlin.test.assertFailsWith' call
    var exceptionClass = getKClass(ParseError);
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      engine.execute_bmqzmt_k$('var name = 1.0');
      tmp = _Result___init__impl__xyqfz8(Unit_getInstance());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$2 = tmp;
    var exception = checkResultIsFailure(exceptionClass, null, tmp$ret$2);
    var tmp0_safe_receiver = exception.message;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : contains(tmp0_safe_receiver, 'Double/float literals are not supported');
    assertTrue(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
    // Inline function 'kotlin.test.assertFailsWith' call
    // Inline function 'kotlin.test.assertFailsWith' call
    var exceptionClass_0 = getKClass(ParseError);
    // Inline function 'kotlin.runCatching' call
    var tmp_1;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      engine.execute_bmqzmt_k$('var x = 3.14');
      tmp_1 = _Result___init__impl__xyqfz8(Unit_getInstance());
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var e_0 = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp_2 = _Result___init__impl__xyqfz8(createFailure(e_0));
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    var tmp$ret$7 = tmp_1;
    checkResultIsFailure(exceptionClass_0, null, tmp$ret$7);
    // Inline function 'kotlin.test.assertFailsWith' call
    // Inline function 'kotlin.test.assertFailsWith' call
    var exceptionClass_1 = getKClass(ParseError);
    // Inline function 'kotlin.runCatching' call
    var tmp_3;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      engine.execute_bmqzmt_k$('var y = 0.5');
      tmp_3 = _Result___init__impl__xyqfz8(Unit_getInstance());
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Error) {
        var e_1 = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_1));
      } else {
        throw $p;
      }
      tmp_3 = tmp_4;
    }
    var tmp$ret$12 = tmp_3;
    checkResultIsFailure(exceptionClass_1, null, tmp$ret$12);
    // Inline function 'kotlin.test.assertFailsWith' call
    // Inline function 'kotlin.test.assertFailsWith' call
    var exceptionClass_2 = getKClass(ParseError);
    // Inline function 'kotlin.runCatching' call
    var tmp_5;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      engine.execute_bmqzmt_k$('var z = 123.456');
      tmp_5 = _Result___init__impl__xyqfz8(Unit_getInstance());
    } catch ($p) {
      var tmp_6;
      if ($p instanceof Error) {
        var e_2 = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp_6 = _Result___init__impl__xyqfz8(createFailure(e_2));
      } else {
        throw $p;
      }
      tmp_5 = tmp_6;
    }
    var tmp$ret$17 = tmp_5;
    checkResultIsFailure(exceptionClass_2, null, tmp$ret$17);
    var intResult = engine.executeAndGetKotlin_7oi3xh_k$('var x = 42; x');
    assertEquals(42.0, intResult);
  };
  function test_fun_izoufj() {
    suite('ScriptEngineTest', false, test_fun$ScriptEngineTest_test_fun_fvk2in);
  }
  function test_fun$ScriptEngineTest_test_fun_fvk2in() {
    test('testBasicArithmetic', false, test_fun$ScriptEngineTest_test_fun$testBasicArithmetic_test_fun_wj67lc);
    test('testVariables', false, test_fun$ScriptEngineTest_test_fun$testVariables_test_fun_5g4q1b);
    test('testFunctions', false, test_fun$ScriptEngineTest_test_fun$testFunctions_test_fun_5r5dgz);
    test('testArrays', false, test_fun$ScriptEngineTest_test_fun$testArrays_test_fun_hc7ge8);
    test('testNativeFunctions', false, test_fun$ScriptEngineTest_test_fun$testNativeFunctions_test_fun_8tmrss);
    test('testKotlinFunction', false, test_fun$ScriptEngineTest_test_fun$testKotlinFunction_test_fun_mjkijl);
    test('testControlFlow', false, test_fun$ScriptEngineTest_test_fun$testControlFlow_test_fun_71ze0z);
    test('testLoops', false, test_fun$ScriptEngineTest_test_fun$testLoops_test_fun_76e3hj);
    test('testForInLoop', false, test_fun$ScriptEngineTest_test_fun$testForInLoop_test_fun_buuhze);
    test('testSyntaxError', false, test_fun$ScriptEngineTest_test_fun$testSyntaxError_test_fun_tghe0t);
    test('testRuntimeError', false, test_fun$ScriptEngineTest_test_fun$testRuntimeError_test_fun_1dtic6);
    test('testSyntaxValidation', false, test_fun$ScriptEngineTest_test_fun$testSyntaxValidation_test_fun_eedt1a);
    test('testSMSUtility', false, test_fun$ScriptEngineTest_test_fun$testSMSUtility_test_fun_z2yl6v);
    test('testStringInterpolation', false, test_fun$ScriptEngineTest_test_fun$testStringInterpolation_test_fun_ij1qy3);
    test('testStandardLibrary', false, test_fun$ScriptEngineTest_test_fun$testStandardLibrary_test_fun_fsh7g6);
    test('testBlockComments', false, test_fun$ScriptEngineTest_test_fun$testBlockComments_test_fun_m7vow7);
    test('testUnterminatedBlockComment', false, test_fun$ScriptEngineTest_test_fun$testUnterminatedBlockComment_test_fun_e6zn2k);
    test('testDoubleRejectError', false, test_fun$ScriptEngineTest_test_fun$testDoubleRejectError_test_fun_ytg11s);
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testBasicArithmetic_test_fun_wj67lc() {
    var tmp = new ScriptEngineTest();
    tmp.testBasicArithmetic_twn1rq_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testVariables_test_fun_5g4q1b() {
    var tmp = new ScriptEngineTest();
    tmp.testVariables_13rh9x_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testFunctions_test_fun_5r5dgz() {
    var tmp = new ScriptEngineTest();
    tmp.testFunctions_jyevtz_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testArrays_test_fun_hc7ge8() {
    var tmp = new ScriptEngineTest();
    tmp.testArrays_s7ltp8_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testNativeFunctions_test_fun_8tmrss() {
    var tmp = new ScriptEngineTest();
    tmp.testNativeFunctions_q8lim6_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testKotlinFunction_test_fun_mjkijl() {
    var tmp = new ScriptEngineTest();
    tmp.testKotlinFunction_ia19az_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testControlFlow_test_fun_71ze0z() {
    var tmp = new ScriptEngineTest();
    tmp.testControlFlow_mhv33d_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testLoops_test_fun_76e3hj() {
    var tmp = new ScriptEngineTest();
    tmp.testLoops_f9ks8j_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testForInLoop_test_fun_buuhze() {
    var tmp = new ScriptEngineTest();
    tmp.testForInLoop_slvueo_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testSyntaxError_test_fun_tghe0t() {
    var tmp = new ScriptEngineTest();
    tmp.testSyntaxError_6bfsnx_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testRuntimeError_test_fun_1dtic6() {
    var tmp = new ScriptEngineTest();
    tmp.testRuntimeError_6kbu32_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testSyntaxValidation_test_fun_eedt1a() {
    var tmp = new ScriptEngineTest();
    tmp.testSyntaxValidation_x4y6ji_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testSMSUtility_test_fun_z2yl6v() {
    var tmp = new ScriptEngineTest();
    tmp.testSMSUtility_vf90l1_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testStringInterpolation_test_fun_ij1qy3() {
    var tmp = new ScriptEngineTest();
    tmp.testStringInterpolation_i46nxr_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testStandardLibrary_test_fun_fsh7g6() {
    var tmp = new ScriptEngineTest();
    tmp.testStandardLibrary_5f0tc4_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testBlockComments_test_fun_m7vow7() {
    var tmp = new ScriptEngineTest();
    tmp.testBlockComments_4dj0rl_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testUnterminatedBlockComment_test_fun_e6zn2k() {
    var tmp = new ScriptEngineTest();
    tmp.testUnterminatedBlockComment_aheets_k$();
    return Unit_getInstance();
  }
  function test_fun$ScriptEngineTest_test_fun$testDoubleRejectError_test_fun_ytg11s() {
    var tmp = new ScriptEngineTest();
    tmp.testDoubleRejectError_bvog5y_k$();
    return Unit_getInstance();
  }
  //region block: tests
  (function () {
    suite('at.crowdware.sms', false, function () {
      test_fun_izoufj();
    });
  }());
  //endregion
  return _;
}));

//# sourceMappingURL=sms-test.js.map
