(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'sms'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'sms'.");
    }
    root.sms = factory(typeof sms === 'undefined' ? {} : sms, this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.b2;
  var VOID = kotlin_kotlin.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.s2;
  var classMeta = kotlin_kotlin.$_$.n1;
  var setMetadataFor = kotlin_kotlin.$_$.c2;
  var println = kotlin_kotlin.$_$.h1;
  var joinToString = kotlin_kotlin.$_$.z;
  var println_0 = kotlin_kotlin.$_$.g1;
  var numberToInt = kotlin_kotlin.$_$.x1;
  var readlnOrNull = kotlin_kotlin.$_$.j1;
  var Default_getInstance = kotlin_kotlin.$_$.q;
  var split = kotlin_kotlin.$_$.k2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var toMutableList = kotlin_kotlin.$_$.d1;
  var objectMeta = kotlin_kotlin.$_$.a2;
  var Exception = kotlin_kotlin.$_$.q2;
  var captureStack = kotlin_kotlin.$_$.k1;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.k;
  var hashCode = kotlin_kotlin.$_$.t1;
  var equals = kotlin_kotlin.$_$.p1;
  var getStringHashCode = kotlin_kotlin.$_$.s1;
  var getNumberHashCode = kotlin_kotlin.$_$.r1;
  var getBooleanHashCode = kotlin_kotlin.$_$.q1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.g;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.j;
  var toString = kotlin_kotlin.$_$.m;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.l;
  var isLetter = kotlin_kotlin.$_$.i2;
  var isDigit = kotlin_kotlin.$_$.g2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var firstOrNull = kotlin_kotlin.$_$.w;
  var charSequenceLength = kotlin_kotlin.$_$.m1;
  var isLetterOrDigit = kotlin_kotlin.$_$.h2;
  var first = kotlin_kotlin.$_$.x;
  var startsWith = kotlin_kotlin.$_$.l2;
  var charSequenceGet = kotlin_kotlin.$_$.l1;
  var lastIndexOf = kotlin_kotlin.$_$.j2;
  var to = kotlin_kotlin.$_$.x2;
  var mapOf = kotlin_kotlin.$_$.c1;
  var THROW_IAE = kotlin_kotlin.$_$.t2;
  var enumEntries = kotlin_kotlin.$_$.f1;
  var Unit_getInstance = kotlin_kotlin.$_$.s;
  var Enum = kotlin_kotlin.$_$.p2;
  var contains = kotlin_kotlin.$_$.f2;
  var toDouble = kotlin_kotlin.$_$.n2;
  var toBoolean = kotlin_kotlin.$_$.m2;
  var interfaceMeta = kotlin_kotlin.$_$.u1;
  var print = kotlin_kotlin.$_$.i1;
  var toSet = kotlin_kotlin.$_$.e1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.v2;
  var numberToLong = kotlin_kotlin.$_$.y1;
  var objectCreate = kotlin_kotlin.$_$.z1;
  var toString_0 = kotlin_kotlin.$_$.d2;
  var Map = kotlin_kotlin.$_$.u;
  var isInterface = kotlin_kotlin.$_$.w1;
  var isArray = kotlin_kotlin.$_$.v1;
  var List = kotlin_kotlin.$_$.t;
  var Long = kotlin_kotlin.$_$.r2;
  var getOrNull = kotlin_kotlin.$_$.y;
  var mapCapacity = kotlin_kotlin.$_$.a1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.f;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Position, 'Position', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ScriptEngine, 'ScriptEngine', classMeta, VOID, VOID, ScriptEngine);
  setMetadataFor(SMS, 'SMS', objectMeta);
  setMetadataFor(ScriptError, 'ScriptError', classMeta, Exception);
  setMetadataFor(ParseError, 'ParseError', classMeta, ScriptError);
  setMetadataFor(RuntimeError, 'RuntimeError', classMeta, ScriptError);
  setMetadataFor(LexError, 'LexError', classMeta, ScriptError);
  setMetadataFor(ASTNode, 'ASTNode', classMeta);
  setMetadataFor(Program, 'Program', classMeta, ASTNode);
  setMetadataFor(Statement, 'Statement', classMeta, ASTNode);
  setMetadataFor(FunctionDeclaration, 'FunctionDeclaration', classMeta, Statement);
  setMetadataFor(DataClassDeclaration, 'DataClassDeclaration', classMeta, Statement);
  setMetadataFor(VarDeclaration, 'VarDeclaration', classMeta, Statement);
  setMetadataFor(Assignment, 'Assignment', classMeta, Statement);
  setMetadataFor(ExpressionStatement, 'ExpressionStatement', classMeta, Statement);
  setMetadataFor(IfStatement, 'IfStatement', classMeta, Statement);
  setMetadataFor(WhileStatement, 'WhileStatement', classMeta, Statement);
  setMetadataFor(ForStatement, 'ForStatement', classMeta, Statement);
  setMetadataFor(ForInStatement, 'ForInStatement', classMeta, Statement);
  setMetadataFor(BreakStatement, 'BreakStatement', classMeta, Statement, VOID, BreakStatement);
  setMetadataFor(ContinueStatement, 'ContinueStatement', classMeta, Statement, VOID, ContinueStatement);
  setMetadataFor(ReturnStatement, 'ReturnStatement', classMeta, Statement);
  setMetadataFor(Expression, 'Expression', classMeta, ASTNode);
  setMetadataFor(Identifier, 'Identifier', classMeta, Expression);
  setMetadataFor(MemberAccess, 'MemberAccess', classMeta, Expression);
  setMetadataFor(ArrayAccess, 'ArrayAccess', classMeta, Expression);
  setMetadataFor(NumberLiteral, 'NumberLiteral', classMeta, Expression);
  setMetadataFor(StringLiteral, 'StringLiteral', classMeta, Expression);
  setMetadataFor(InterpolatedStringLiteral, 'InterpolatedStringLiteral', classMeta, Expression);
  setMetadataFor(BooleanLiteral, 'BooleanLiteral', classMeta, Expression);
  setMetadataFor(NullLiteral, 'NullLiteral', classMeta, Expression, VOID, NullLiteral);
  setMetadataFor(BinaryExpression, 'BinaryExpression', classMeta, Expression);
  setMetadataFor(UnaryExpression, 'UnaryExpression', classMeta, Expression);
  setMetadataFor(PostfixExpression, 'PostfixExpression', classMeta, Expression);
  setMetadataFor(FunctionCall, 'FunctionCall', classMeta, Expression);
  setMetadataFor(MethodCall, 'MethodCall', classMeta, Expression);
  setMetadataFor(ArrayLiteral, 'ArrayLiteral', classMeta, Expression);
  setMetadataFor(StringPart, 'StringPart', classMeta);
  setMetadataFor(Text, 'Text', classMeta, StringPart);
  setMetadataFor(Expression_0, 'Expression', classMeta, StringPart);
  setMetadataFor(Interpreter, 'Interpreter', classMeta, VOID, VOID, Interpreter);
  setMetadataFor(Scope, 'Scope', classMeta, VOID, VOID, Scope);
  setMetadataFor(ContinueException, 'ContinueException', classMeta, Exception, VOID, ContinueException);
  setMetadataFor(BreakException, 'BreakException', classMeta, Exception, VOID, BreakException);
  setMetadataFor(ReturnException, 'ReturnException', classMeta, Exception);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Lexer, 'Lexer', classMeta);
  setMetadataFor(TokenType, 'TokenType', classMeta, Enum);
  setMetadataFor(Token, 'Token', classMeta);
  setMetadataFor(Parser, 'Parser', classMeta);
  setMetadataFor(NativeFunction, 'NativeFunction', interfaceMeta);
  setMetadataFor(sam$at_crowdware_sms_runtime_NativeFunction$0, 'sam$at_crowdware_sms_runtime_NativeFunction$0', classMeta, VOID, [NativeFunction]);
  setMetadataFor(NativeFunctionRegistry, 'NativeFunctionRegistry', classMeta, VOID, VOID, NativeFunctionRegistry);
  setMetadataFor(Value, 'Value', classMeta);
  setMetadataFor(NumberValue, 'NumberValue', classMeta, Value);
  setMetadataFor(ValueUtils, 'ValueUtils', objectMeta);
  setMetadataFor(StringValue, 'StringValue', classMeta, Value);
  setMetadataFor(BooleanValue, 'BooleanValue', classMeta, Value);
  setMetadataFor(NullValue, 'NullValue', objectMeta, Value);
  setMetadataFor(ArrayValue, 'ArrayValue', classMeta, Value, VOID, ArrayValue);
  setMetadataFor(ObjectValue, 'ObjectValue', classMeta, Value);
  //endregion
  function Position(line, column) {
    this.line_1 = line;
    this.column_1 = column;
  }
  protoOf(Position).get_line_wopum5_k$ = function () {
    return this.line_1;
  };
  protoOf(Position).get_column_c05ahr_k$ = function () {
    return this.column_1;
  };
  protoOf(Position).toString = function () {
    return 'line ' + this.line_1 + ', column ' + this.column_1;
  };
  protoOf(Position).component1_7eebsc_k$ = function () {
    return this.line_1;
  };
  protoOf(Position).component2_7eebsb_k$ = function () {
    return this.column_1;
  };
  protoOf(Position).copy_fhtu3_k$ = function (line, column) {
    return new Position(line, column);
  };
  protoOf(Position).copy$default_moggbp_k$ = function (line, column, $super) {
    line = line === VOID ? this.line_1 : line;
    column = column === VOID ? this.column_1 : column;
    return $super === VOID ? this.copy_fhtu3_k$(line, column) : $super.copy_fhtu3_k$.call(this, line, column);
  };
  protoOf(Position).hashCode = function () {
    var result = this.line_1;
    result = imul(result, 31) + this.column_1 | 0;
    return result;
  };
  protoOf(Position).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Position))
      return false;
    var tmp0_other_with_cast = other instanceof Position ? other : THROW_CCE();
    if (!(this.line_1 === tmp0_other_with_cast.line_1))
      return false;
    if (!(this.column_1 === tmp0_other_with_cast.column_1))
      return false;
    return true;
  };
  function ScriptEngine$Companion$withStandardLibrary$lambda(args) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!args.isEmpty_y1axqb_k$()) {
      var message = joinToString(args, ' ', VOID, VOID, VOID, VOID, ScriptEngine$Companion$withStandardLibrary$lambda$lambda);
      println_0(message);
    } else {
      println();
    }
    return NullValue_getInstance();
  }
  function ScriptEngine$Companion$withStandardLibrary$lambda$lambda(it) {
    var tmp;
    if (it instanceof StringValue) {
      tmp = it.get_value_j01efc_k$();
    } else {
      if (it instanceof NumberValue) {
        tmp = it.get_value_j01efc_k$() === numberToInt(it.get_value_j01efc_k$()) ? numberToInt(it.get_value_j01efc_k$()).toString() : it.get_value_j01efc_k$().toString();
      } else {
        if (it instanceof BooleanValue) {
          tmp = it.get_value_j01efc_k$().toString();
        } else {
          if (it instanceof NullValue) {
            tmp = 'null';
          } else {
            tmp = it.toString();
          }
        }
      }
    }
    return tmp;
  }
  function ScriptEngine$Companion$withStandardLibrary$lambda_0(_anonymous_parameter_0__qggqh8) {
    var tmp0_elvis_lhs = readlnOrNull();
    return new StringValue(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
  }
  function ScriptEngine$Companion$withStandardLibrary$lambda_1(args) {
    var tmp;
    switch (args.get_size_woubt6_k$()) {
      case 0:
        tmp = new NumberValue(Default_getInstance().nextDouble_s2xvfg_k$());
        break;
      case 1:
        var tmp_0 = args.get_c1px32_k$(0);
        var tmp1_safe_receiver = tmp_0 instanceof NumberValue ? tmp_0 : null;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toInt_1tsl84_k$();
        var max = tmp2_elvis_lhs == null ? 1 : tmp2_elvis_lhs;
        tmp = NumberValue_init_$Create$(Default_getInstance().nextInt_kn2qxo_k$(max));
        break;
      case 2:
        var tmp_1 = args.get_c1px32_k$(0);
        var tmp3_safe_receiver = tmp_1 instanceof NumberValue ? tmp_1 : null;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toInt_1tsl84_k$();
        var min = tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs;
        var tmp_2 = args.get_c1px32_k$(1);
        var tmp5_safe_receiver = tmp_2 instanceof NumberValue ? tmp_2 : null;
        var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.toInt_1tsl84_k$();
        var max_0 = tmp6_elvis_lhs == null ? 1 : tmp6_elvis_lhs;
        tmp = NumberValue_init_$Create$(Default_getInstance().nextInt_ak696k_k$(min, max_0));
        break;
      default:
        tmp = NumberValue_init_$Create$(0);
        break;
    }
    return tmp;
  }
  function ScriptEngine$Companion$withStandardLibrary$lambda_2(args) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (args.get_size_woubt6_k$() >= 2) {
      var tmp_2 = args.get_c1px32_k$(0);
      tmp_1 = tmp_2 instanceof StringValue;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_3 = args.get_c1px32_k$(1);
      tmp_0 = tmp_3 instanceof StringValue;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_4 = args.get_c1px32_k$(0);
      var string = (tmp_4 instanceof StringValue ? tmp_4 : THROW_CCE()).get_value_j01efc_k$();
      var tmp_5 = args.get_c1px32_k$(1);
      var delimiter = (tmp_5 instanceof StringValue ? tmp_5 : THROW_CCE()).get_value_j01efc_k$();
      var parts = split(string, [delimiter]);
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(parts, 10));
      var tmp0_iterator = parts.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'at.crowdware.sms.Companion.withStandardLibrary.<anonymous>.<anonymous>' call
        var tmp$ret$0 = new StringValue(item);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = new ArrayValue(toMutableList(destination));
    } else {
      tmp = new ArrayValue();
    }
    return tmp;
  }
  function ScriptEngine$Companion$withStandardLibrary$lambda_3(args) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (args.get_size_woubt6_k$() >= 2) {
      var tmp_2 = args.get_c1px32_k$(0);
      tmp_1 = tmp_2 instanceof ArrayValue;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_3 = args.get_c1px32_k$(1);
      tmp_0 = tmp_3 instanceof StringValue;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_4 = args.get_c1px32_k$(0);
      var array = tmp_4 instanceof ArrayValue ? tmp_4 : THROW_CCE();
      var tmp_5 = args.get_c1px32_k$(1);
      var delimiter = (tmp_5 instanceof StringValue ? tmp_5 : THROW_CCE()).get_value_j01efc_k$();
      var tmp_6 = array.get_elements_vxwh8g_k$();
      var joined = joinToString(tmp_6, delimiter, VOID, VOID, VOID, VOID, ScriptEngine$Companion$withStandardLibrary$lambda$lambda_0);
      tmp = new StringValue(joined);
    } else {
      tmp = new StringValue('');
    }
    return tmp;
  }
  function ScriptEngine$Companion$withStandardLibrary$lambda$lambda_0(it) {
    return ValueUtils_getInstance().toString_k2f3al_k$(it);
  }
  function _get_interpreter__7ol7l5($this) {
    return $this.interpreter_1;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).withStandardLibrary_n73i54_k$ = function () {
    var engine = new ScriptEngine();
    engine.registerFunction_6iy5jg_k$('println', ScriptEngine$Companion$withStandardLibrary$lambda);
    engine.registerFunction_6iy5jg_k$('readLine', ScriptEngine$Companion$withStandardLibrary$lambda_0);
    engine.registerFunction_6iy5jg_k$('random', ScriptEngine$Companion$withStandardLibrary$lambda_1);
    engine.registerFunction_6iy5jg_k$('split', ScriptEngine$Companion$withStandardLibrary$lambda_2);
    engine.registerFunction_6iy5jg_k$('join', ScriptEngine$Companion$withStandardLibrary$lambda_3);
    return engine;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ScriptEngine$registerKotlinFunction$lambda($function) {
    return function (args) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(args, 10));
      var tmp0_iterator = args.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'at.crowdware.sms.ScriptEngine.registerKotlinFunction.<anonymous>.<anonymous>' call
        var tmp$ret$0 = ValueUtils_getInstance().toKotlin_6rrtsz_k$(item);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      var kotlinArgs = destination;
      var result = $function(kotlinArgs);
      return ValueUtils_getInstance().fromKotlin_y0ia4s_k$(result);
    };
  }
  function ScriptEngine() {
    Companion_getInstance();
    this.interpreter_1 = new Interpreter();
  }
  protoOf(ScriptEngine).execute_bmqzmt_k$ = function (source) {
    try {
      var lexer = new Lexer(source);
      var tokens = lexer.tokenize_i964w5_k$();
      var parser = new Parser(tokens);
      var program = parser.parse_1rdbjn_k$();
      return this.interpreter_1.execute_tsbz7e_k$(program);
    } catch ($p) {
      if ($p instanceof ScriptError) {
        var e = $p;
        throw e;
      } else {
        if ($p instanceof Exception) {
          var e_0 = $p;
          throw new ScriptError('Unexpected error during script execution: ' + e_0.message, null, e_0);
        } else {
          throw $p;
        }
      }
    }
  };
  protoOf(ScriptEngine).executeAndGetKotlin_7oi3xh_k$ = function (source) {
    var result = this.execute_bmqzmt_k$(source);
    return ValueUtils_getInstance().toKotlin_6rrtsz_k$(result);
  };
  protoOf(ScriptEngine).registerFunction_u38czu_k$ = function (name, function_0) {
    this.interpreter_1.getNativeFunctions_h3elte_k$().register_h2wrlu_k$(name, function_0);
  };
  protoOf(ScriptEngine).registerFunction_6iy5jg_k$ = function (name, function_0) {
    this.interpreter_1.getNativeFunctions_h3elte_k$().register_108fx0_k$(name, function_0);
  };
  protoOf(ScriptEngine).registerKotlinFunction_woywhb_k$ = function (name, function_0) {
    var tmp = this.interpreter_1.getNativeFunctions_h3elte_k$();
    tmp.register_108fx0_k$(name, ScriptEngine$registerKotlinFunction$lambda(function_0));
  };
  protoOf(ScriptEngine).hasFunction_ykjdy0_k$ = function (name) {
    return this.interpreter_1.getNativeFunctions_h3elte_k$().has_5057c0_k$(name);
  };
  protoOf(ScriptEngine).getFunctionNames_f7i0m2_k$ = function () {
    return this.interpreter_1.getNativeFunctions_h3elte_k$().getNames_wf6efm_k$();
  };
  protoOf(ScriptEngine).clearFunctions_p9e5fm_k$ = function () {
    this.interpreter_1.getNativeFunctions_h3elte_k$().clear_j9egeb_k$();
    this.interpreter_1.getNativeFunctions_h3elte_k$().registerBuiltins_bwbecd_k$();
  };
  protoOf(ScriptEngine).validateSyntax_8di1yp_k$ = function (source) {
    try {
      var lexer = new Lexer(source);
      var tokens = lexer.tokenize_i964w5_k$();
      var parser = new Parser(tokens);
      parser.parse_1rdbjn_k$();
    } catch ($p) {
      if ($p instanceof ScriptError) {
        var e = $p;
        throw e;
      } else {
        if ($p instanceof Exception) {
          var e_0 = $p;
          throw new ScriptError('Unexpected error during syntax validation: ' + e_0.message, null, e_0);
        } else {
          throw $p;
        }
      }
    }
  };
  protoOf(ScriptEngine).getVersion_mynp2a_k$ = function () {
    return 'SMS Engine 1.1.0';
  };
  function SMS() {
    SMS_instance = this;
  }
  protoOf(SMS).execute_bmqzmt_k$ = function (source) {
    var engine = Companion_getInstance().withStandardLibrary_n73i54_k$();
    return engine.executeAndGetKotlin_7oi3xh_k$(source);
  };
  protoOf(SMS).execute_ujcjuu_k$ = function (source, functions) {
    var engine = Companion_getInstance().withStandardLibrary_n73i54_k$();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = functions.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'at.crowdware.sms.SMS.execute.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var func = element.get_value_j01efc_k$();
      engine.registerKotlinFunction_woywhb_k$(name, func);
    }
    return engine.executeAndGetKotlin_7oi3xh_k$(source);
  };
  protoOf(SMS).validate_jsbgik_k$ = function (source) {
    var tmp;
    try {
      var engine = new ScriptEngine();
      engine.validateSyntax_8di1yp_k$(source);
      tmp = true;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ScriptError) {
        var e = $p;
        tmp_0 = false;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  var SMS_instance;
  function SMS_getInstance() {
    if (SMS_instance == null)
      new SMS();
    return SMS_instance;
  }
  function ParseError(message, position, cause) {
    position = position === VOID ? null : position;
    cause = cause === VOID ? null : cause;
    ScriptError.call(this, message, position, cause);
    captureStack(this, ParseError);
  }
  function RuntimeError(message, position, cause) {
    position = position === VOID ? null : position;
    cause = cause === VOID ? null : cause;
    ScriptError.call(this, message, position, cause);
    captureStack(this, RuntimeError);
  }
  function ScriptError(message, position, cause) {
    position = position === VOID ? null : position;
    cause = cause === VOID ? null : cause;
    Exception_init_$Init$(!(position == null) ? 'Error at ' + position + ': ' + message : message, cause, this);
    captureStack(this, ScriptError);
    this.position_1 = position;
  }
  protoOf(ScriptError).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(ScriptError).get_line_wopum5_k$ = function () {
    var tmp0_safe_receiver = this.position_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_line_wopum5_k$();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(ScriptError).get_column_c05ahr_k$ = function () {
    var tmp0_safe_receiver = this.position_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_column_c05ahr_k$();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  function LexError(message, position, cause) {
    cause = cause === VOID ? null : cause;
    ScriptError.call(this, message, position, cause);
    captureStack(this, LexError);
  }
  function Program(statements, pos) {
    pos = pos === VOID ? null : pos;
    ASTNode.call(this, pos);
    this.statements_1 = statements;
    this.pos_1 = pos;
  }
  protoOf(Program).get_statements_nqb5hv_k$ = function () {
    return this.statements_1;
  };
  protoOf(Program).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(Program).component1_7eebsc_k$ = function () {
    return this.statements_1;
  };
  protoOf(Program).component2_7eebsb_k$ = function () {
    return this.pos_1;
  };
  protoOf(Program).copy_uwmbgb_k$ = function (statements, pos) {
    return new Program(statements, pos);
  };
  protoOf(Program).copy$default_yy4y4a_k$ = function (statements, pos, $super) {
    statements = statements === VOID ? this.statements_1 : statements;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_uwmbgb_k$(statements, pos) : $super.copy_uwmbgb_k$.call(this, statements, pos);
  };
  protoOf(Program).toString = function () {
    return 'Program(statements=' + this.statements_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(Program).hashCode = function () {
    var result = hashCode(this.statements_1);
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(Program).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Program))
      return false;
    var tmp0_other_with_cast = other instanceof Program ? other : THROW_CCE();
    if (!equals(this.statements_1, tmp0_other_with_cast.statements_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function Statement(position) {
    ASTNode.call(this, position);
  }
  function FunctionDeclaration(name, parameters, body, pos) {
    pos = pos === VOID ? null : pos;
    Statement.call(this, pos);
    this.name_1 = name;
    this.parameters_1 = parameters;
    this.body_1 = body;
    this.pos_1 = pos;
  }
  protoOf(FunctionDeclaration).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(FunctionDeclaration).get_parameters_cl4rkd_k$ = function () {
    return this.parameters_1;
  };
  protoOf(FunctionDeclaration).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(FunctionDeclaration).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(FunctionDeclaration).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(FunctionDeclaration).component2_7eebsb_k$ = function () {
    return this.parameters_1;
  };
  protoOf(FunctionDeclaration).component3_7eebsa_k$ = function () {
    return this.body_1;
  };
  protoOf(FunctionDeclaration).component4_7eebs9_k$ = function () {
    return this.pos_1;
  };
  protoOf(FunctionDeclaration).copy_n3wi3t_k$ = function (name, parameters, body, pos) {
    return new FunctionDeclaration(name, parameters, body, pos);
  };
  protoOf(FunctionDeclaration).copy$default_en6sl5_k$ = function (name, parameters, body, pos, $super) {
    name = name === VOID ? this.name_1 : name;
    parameters = parameters === VOID ? this.parameters_1 : parameters;
    body = body === VOID ? this.body_1 : body;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_n3wi3t_k$(name, parameters, body, pos) : $super.copy_n3wi3t_k$.call(this, name, parameters, body, pos);
  };
  protoOf(FunctionDeclaration).toString = function () {
    return 'FunctionDeclaration(name=' + this.name_1 + ', parameters=' + this.parameters_1 + ', body=' + this.body_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(FunctionDeclaration).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.parameters_1) | 0;
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(FunctionDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FunctionDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof FunctionDeclaration ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.parameters_1, tmp0_other_with_cast.parameters_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function DataClassDeclaration(name, fields, pos) {
    pos = pos === VOID ? null : pos;
    Statement.call(this, pos);
    this.name_1 = name;
    this.fields_1 = fields;
    this.pos_1 = pos;
  }
  protoOf(DataClassDeclaration).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(DataClassDeclaration).get_fields_dbuqbm_k$ = function () {
    return this.fields_1;
  };
  protoOf(DataClassDeclaration).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(DataClassDeclaration).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(DataClassDeclaration).component2_7eebsb_k$ = function () {
    return this.fields_1;
  };
  protoOf(DataClassDeclaration).component3_7eebsa_k$ = function () {
    return this.pos_1;
  };
  protoOf(DataClassDeclaration).copy_9nlnko_k$ = function (name, fields, pos) {
    return new DataClassDeclaration(name, fields, pos);
  };
  protoOf(DataClassDeclaration).copy$default_29pbg1_k$ = function (name, fields, pos, $super) {
    name = name === VOID ? this.name_1 : name;
    fields = fields === VOID ? this.fields_1 : fields;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_9nlnko_k$(name, fields, pos) : $super.copy_9nlnko_k$.call(this, name, fields, pos);
  };
  protoOf(DataClassDeclaration).toString = function () {
    return 'DataClassDeclaration(name=' + this.name_1 + ', fields=' + this.fields_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(DataClassDeclaration).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.fields_1) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(DataClassDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DataClassDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof DataClassDeclaration ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.fields_1, tmp0_other_with_cast.fields_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function VarDeclaration(name, value, pos) {
    pos = pos === VOID ? null : pos;
    Statement.call(this, pos);
    this.name_1 = name;
    this.value_1 = value;
    this.pos_1 = pos;
  }
  protoOf(VarDeclaration).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(VarDeclaration).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(VarDeclaration).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(VarDeclaration).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(VarDeclaration).component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  protoOf(VarDeclaration).component3_7eebsa_k$ = function () {
    return this.pos_1;
  };
  protoOf(VarDeclaration).copy_xrkuvb_k$ = function (name, value, pos) {
    return new VarDeclaration(name, value, pos);
  };
  protoOf(VarDeclaration).copy$default_gfc9yl_k$ = function (name, value, pos, $super) {
    name = name === VOID ? this.name_1 : name;
    value = value === VOID ? this.value_1 : value;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_xrkuvb_k$(name, value, pos) : $super.copy_xrkuvb_k$.call(this, name, value, pos);
  };
  protoOf(VarDeclaration).toString = function () {
    return 'VarDeclaration(name=' + this.name_1 + ', value=' + this.value_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(VarDeclaration).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.value_1) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(VarDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VarDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof VarDeclaration ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function Assignment(target, value, pos) {
    pos = pos === VOID ? null : pos;
    Statement.call(this, pos);
    this.target_1 = target;
    this.value_1 = value;
    this.pos_1 = pos;
  }
  protoOf(Assignment).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(Assignment).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Assignment).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(Assignment).component1_7eebsc_k$ = function () {
    return this.target_1;
  };
  protoOf(Assignment).component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  protoOf(Assignment).component3_7eebsa_k$ = function () {
    return this.pos_1;
  };
  protoOf(Assignment).copy_y8ym56_k$ = function (target, value, pos) {
    return new Assignment(target, value, pos);
  };
  protoOf(Assignment).copy$default_ivsja2_k$ = function (target, value, pos, $super) {
    target = target === VOID ? this.target_1 : target;
    value = value === VOID ? this.value_1 : value;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_y8ym56_k$(target, value, pos) : $super.copy_y8ym56_k$.call(this, target, value, pos);
  };
  protoOf(Assignment).toString = function () {
    return 'Assignment(target=' + this.target_1 + ', value=' + this.value_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(Assignment).hashCode = function () {
    var result = hashCode(this.target_1);
    result = imul(result, 31) + hashCode(this.value_1) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(Assignment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Assignment))
      return false;
    var tmp0_other_with_cast = other instanceof Assignment ? other : THROW_CCE();
    if (!equals(this.target_1, tmp0_other_with_cast.target_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function ExpressionStatement(expression, pos) {
    pos = pos === VOID ? null : pos;
    Statement.call(this, pos);
    this.expression_1 = expression;
    this.pos_1 = pos;
  }
  protoOf(ExpressionStatement).get_expression_l5w7j5_k$ = function () {
    return this.expression_1;
  };
  protoOf(ExpressionStatement).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(ExpressionStatement).component1_7eebsc_k$ = function () {
    return this.expression_1;
  };
  protoOf(ExpressionStatement).component2_7eebsb_k$ = function () {
    return this.pos_1;
  };
  protoOf(ExpressionStatement).copy_c62x5_k$ = function (expression, pos) {
    return new ExpressionStatement(expression, pos);
  };
  protoOf(ExpressionStatement).copy$default_cuaqtu_k$ = function (expression, pos, $super) {
    expression = expression === VOID ? this.expression_1 : expression;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_c62x5_k$(expression, pos) : $super.copy_c62x5_k$.call(this, expression, pos);
  };
  protoOf(ExpressionStatement).toString = function () {
    return 'ExpressionStatement(expression=' + this.expression_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(ExpressionStatement).hashCode = function () {
    var result = hashCode(this.expression_1);
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(ExpressionStatement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExpressionStatement))
      return false;
    var tmp0_other_with_cast = other instanceof ExpressionStatement ? other : THROW_CCE();
    if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function IfStatement(condition, thenBranch, elseBranch, pos) {
    elseBranch = elseBranch === VOID ? null : elseBranch;
    pos = pos === VOID ? null : pos;
    Statement.call(this, pos);
    this.condition_1 = condition;
    this.thenBranch_1 = thenBranch;
    this.elseBranch_1 = elseBranch;
    this.pos_1 = pos;
  }
  protoOf(IfStatement).get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  protoOf(IfStatement).get_thenBranch_cpbazc_k$ = function () {
    return this.thenBranch_1;
  };
  protoOf(IfStatement).get_elseBranch_p6xzcs_k$ = function () {
    return this.elseBranch_1;
  };
  protoOf(IfStatement).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(IfStatement).component1_7eebsc_k$ = function () {
    return this.condition_1;
  };
  protoOf(IfStatement).component2_7eebsb_k$ = function () {
    return this.thenBranch_1;
  };
  protoOf(IfStatement).component3_7eebsa_k$ = function () {
    return this.elseBranch_1;
  };
  protoOf(IfStatement).component4_7eebs9_k$ = function () {
    return this.pos_1;
  };
  protoOf(IfStatement).copy_bsk98s_k$ = function (condition, thenBranch, elseBranch, pos) {
    return new IfStatement(condition, thenBranch, elseBranch, pos);
  };
  protoOf(IfStatement).copy$default_70uxre_k$ = function (condition, thenBranch, elseBranch, pos, $super) {
    condition = condition === VOID ? this.condition_1 : condition;
    thenBranch = thenBranch === VOID ? this.thenBranch_1 : thenBranch;
    elseBranch = elseBranch === VOID ? this.elseBranch_1 : elseBranch;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_bsk98s_k$(condition, thenBranch, elseBranch, pos) : $super.copy_bsk98s_k$.call(this, condition, thenBranch, elseBranch, pos);
  };
  protoOf(IfStatement).toString = function () {
    return 'IfStatement(condition=' + this.condition_1 + ', thenBranch=' + this.thenBranch_1 + ', elseBranch=' + this.elseBranch_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(IfStatement).hashCode = function () {
    var result = hashCode(this.condition_1);
    result = imul(result, 31) + hashCode(this.thenBranch_1) | 0;
    result = imul(result, 31) + (this.elseBranch_1 == null ? 0 : hashCode(this.elseBranch_1)) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(IfStatement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IfStatement))
      return false;
    var tmp0_other_with_cast = other instanceof IfStatement ? other : THROW_CCE();
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.thenBranch_1, tmp0_other_with_cast.thenBranch_1))
      return false;
    if (!equals(this.elseBranch_1, tmp0_other_with_cast.elseBranch_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function WhileStatement(condition, body, pos) {
    pos = pos === VOID ? null : pos;
    Statement.call(this, pos);
    this.condition_1 = condition;
    this.body_1 = body;
    this.pos_1 = pos;
  }
  protoOf(WhileStatement).get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  protoOf(WhileStatement).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(WhileStatement).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(WhileStatement).component1_7eebsc_k$ = function () {
    return this.condition_1;
  };
  protoOf(WhileStatement).component2_7eebsb_k$ = function () {
    return this.body_1;
  };
  protoOf(WhileStatement).component3_7eebsa_k$ = function () {
    return this.pos_1;
  };
  protoOf(WhileStatement).copy_2w18go_k$ = function (condition, body, pos) {
    return new WhileStatement(condition, body, pos);
  };
  protoOf(WhileStatement).copy$default_6hcbq1_k$ = function (condition, body, pos, $super) {
    condition = condition === VOID ? this.condition_1 : condition;
    body = body === VOID ? this.body_1 : body;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_2w18go_k$(condition, body, pos) : $super.copy_2w18go_k$.call(this, condition, body, pos);
  };
  protoOf(WhileStatement).toString = function () {
    return 'WhileStatement(condition=' + this.condition_1 + ', body=' + this.body_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(WhileStatement).hashCode = function () {
    var result = hashCode(this.condition_1);
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(WhileStatement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhileStatement))
      return false;
    var tmp0_other_with_cast = other instanceof WhileStatement ? other : THROW_CCE();
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function ForStatement(init, condition, update, body, pos) {
    pos = pos === VOID ? null : pos;
    Statement.call(this, pos);
    this.init_1 = init;
    this.condition_1 = condition;
    this.update_1 = update;
    this.body_1 = body;
    this.pos_1 = pos;
  }
  protoOf(ForStatement).get_init_woo195_k$ = function () {
    return this.init_1;
  };
  protoOf(ForStatement).get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  protoOf(ForStatement).get_update_kjcrma_k$ = function () {
    return this.update_1;
  };
  protoOf(ForStatement).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(ForStatement).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(ForStatement).component1_7eebsc_k$ = function () {
    return this.init_1;
  };
  protoOf(ForStatement).component2_7eebsb_k$ = function () {
    return this.condition_1;
  };
  protoOf(ForStatement).component3_7eebsa_k$ = function () {
    return this.update_1;
  };
  protoOf(ForStatement).component4_7eebs9_k$ = function () {
    return this.body_1;
  };
  protoOf(ForStatement).component5_7eebs8_k$ = function () {
    return this.pos_1;
  };
  protoOf(ForStatement).copy_t610rd_k$ = function (init, condition, update, body, pos) {
    return new ForStatement(init, condition, update, body, pos);
  };
  protoOf(ForStatement).copy$default_ioghgg_k$ = function (init, condition, update, body, pos, $super) {
    init = init === VOID ? this.init_1 : init;
    condition = condition === VOID ? this.condition_1 : condition;
    update = update === VOID ? this.update_1 : update;
    body = body === VOID ? this.body_1 : body;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_t610rd_k$(init, condition, update, body, pos) : $super.copy_t610rd_k$.call(this, init, condition, update, body, pos);
  };
  protoOf(ForStatement).toString = function () {
    return 'ForStatement(init=' + this.init_1 + ', condition=' + this.condition_1 + ', update=' + this.update_1 + ', body=' + this.body_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(ForStatement).hashCode = function () {
    var result = this.init_1 == null ? 0 : hashCode(this.init_1);
    result = imul(result, 31) + (this.condition_1 == null ? 0 : hashCode(this.condition_1)) | 0;
    result = imul(result, 31) + (this.update_1 == null ? 0 : hashCode(this.update_1)) | 0;
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(ForStatement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ForStatement))
      return false;
    var tmp0_other_with_cast = other instanceof ForStatement ? other : THROW_CCE();
    if (!equals(this.init_1, tmp0_other_with_cast.init_1))
      return false;
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.update_1, tmp0_other_with_cast.update_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function ForInStatement(variable, iterable, body, pos) {
    pos = pos === VOID ? null : pos;
    Statement.call(this, pos);
    this.variable_1 = variable;
    this.iterable_1 = iterable;
    this.body_1 = body;
    this.pos_1 = pos;
  }
  protoOf(ForInStatement).get_variable_ik7c5h_k$ = function () {
    return this.variable_1;
  };
  protoOf(ForInStatement).get_iterable_c8wb7p_k$ = function () {
    return this.iterable_1;
  };
  protoOf(ForInStatement).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(ForInStatement).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(ForInStatement).component1_7eebsc_k$ = function () {
    return this.variable_1;
  };
  protoOf(ForInStatement).component2_7eebsb_k$ = function () {
    return this.iterable_1;
  };
  protoOf(ForInStatement).component3_7eebsa_k$ = function () {
    return this.body_1;
  };
  protoOf(ForInStatement).component4_7eebs9_k$ = function () {
    return this.pos_1;
  };
  protoOf(ForInStatement).copy_a7xsx4_k$ = function (variable, iterable, body, pos) {
    return new ForInStatement(variable, iterable, body, pos);
  };
  protoOf(ForInStatement).copy$default_p4se9j_k$ = function (variable, iterable, body, pos, $super) {
    variable = variable === VOID ? this.variable_1 : variable;
    iterable = iterable === VOID ? this.iterable_1 : iterable;
    body = body === VOID ? this.body_1 : body;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_a7xsx4_k$(variable, iterable, body, pos) : $super.copy_a7xsx4_k$.call(this, variable, iterable, body, pos);
  };
  protoOf(ForInStatement).toString = function () {
    return 'ForInStatement(variable=' + this.variable_1 + ', iterable=' + this.iterable_1 + ', body=' + this.body_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(ForInStatement).hashCode = function () {
    var result = getStringHashCode(this.variable_1);
    result = imul(result, 31) + hashCode(this.iterable_1) | 0;
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(ForInStatement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ForInStatement))
      return false;
    var tmp0_other_with_cast = other instanceof ForInStatement ? other : THROW_CCE();
    if (!(this.variable_1 === tmp0_other_with_cast.variable_1))
      return false;
    if (!equals(this.iterable_1, tmp0_other_with_cast.iterable_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function BreakStatement(pos) {
    pos = pos === VOID ? null : pos;
    Statement.call(this, pos);
    this.pos_1 = pos;
  }
  protoOf(BreakStatement).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(BreakStatement).component1_7eebsc_k$ = function () {
    return this.pos_1;
  };
  protoOf(BreakStatement).copy_4n0goq_k$ = function (pos) {
    return new BreakStatement(pos);
  };
  protoOf(BreakStatement).copy$default_yfxyct_k$ = function (pos, $super) {
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_4n0goq_k$(pos) : $super.copy_4n0goq_k$.call(this, pos);
  };
  protoOf(BreakStatement).toString = function () {
    return 'BreakStatement(pos=' + this.pos_1 + ')';
  };
  protoOf(BreakStatement).hashCode = function () {
    return this.pos_1 == null ? 0 : this.pos_1.hashCode();
  };
  protoOf(BreakStatement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakStatement))
      return false;
    var tmp0_other_with_cast = other instanceof BreakStatement ? other : THROW_CCE();
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function ContinueStatement(pos) {
    pos = pos === VOID ? null : pos;
    Statement.call(this, pos);
    this.pos_1 = pos;
  }
  protoOf(ContinueStatement).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(ContinueStatement).component1_7eebsc_k$ = function () {
    return this.pos_1;
  };
  protoOf(ContinueStatement).copy_4n0goq_k$ = function (pos) {
    return new ContinueStatement(pos);
  };
  protoOf(ContinueStatement).copy$default_5o7sol_k$ = function (pos, $super) {
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_4n0goq_k$(pos) : $super.copy_4n0goq_k$.call(this, pos);
  };
  protoOf(ContinueStatement).toString = function () {
    return 'ContinueStatement(pos=' + this.pos_1 + ')';
  };
  protoOf(ContinueStatement).hashCode = function () {
    return this.pos_1 == null ? 0 : this.pos_1.hashCode();
  };
  protoOf(ContinueStatement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContinueStatement))
      return false;
    var tmp0_other_with_cast = other instanceof ContinueStatement ? other : THROW_CCE();
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function ReturnStatement(value, pos) {
    pos = pos === VOID ? null : pos;
    Statement.call(this, pos);
    this.value_1 = value;
    this.pos_1 = pos;
  }
  protoOf(ReturnStatement).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(ReturnStatement).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(ReturnStatement).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(ReturnStatement).component2_7eebsb_k$ = function () {
    return this.pos_1;
  };
  protoOf(ReturnStatement).copy_wb0jpg_k$ = function (value, pos) {
    return new ReturnStatement(value, pos);
  };
  protoOf(ReturnStatement).copy$default_3l79bv_k$ = function (value, pos, $super) {
    value = value === VOID ? this.value_1 : value;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_wb0jpg_k$(value, pos) : $super.copy_wb0jpg_k$.call(this, value, pos);
  };
  protoOf(ReturnStatement).toString = function () {
    return 'ReturnStatement(value=' + this.value_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(ReturnStatement).hashCode = function () {
    var result = this.value_1 == null ? 0 : hashCode(this.value_1);
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(ReturnStatement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReturnStatement))
      return false;
    var tmp0_other_with_cast = other instanceof ReturnStatement ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function Expression(position) {
    ASTNode.call(this, position);
  }
  function Identifier(name, pos) {
    pos = pos === VOID ? null : pos;
    Expression.call(this, pos);
    this.name_1 = name;
    this.pos_1 = pos;
  }
  protoOf(Identifier).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Identifier).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(Identifier).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(Identifier).component2_7eebsb_k$ = function () {
    return this.pos_1;
  };
  protoOf(Identifier).copy_lzs3qi_k$ = function (name, pos) {
    return new Identifier(name, pos);
  };
  protoOf(Identifier).copy$default_xohjy2_k$ = function (name, pos, $super) {
    name = name === VOID ? this.name_1 : name;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_lzs3qi_k$(name, pos) : $super.copy_lzs3qi_k$.call(this, name, pos);
  };
  protoOf(Identifier).toString = function () {
    return 'Identifier(name=' + this.name_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(Identifier).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(Identifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Identifier))
      return false;
    var tmp0_other_with_cast = other instanceof Identifier ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function MemberAccess(receiver, member, pos) {
    pos = pos === VOID ? null : pos;
    Expression.call(this, pos);
    this.receiver_1 = receiver;
    this.member_1 = member;
    this.pos_1 = pos;
  }
  protoOf(MemberAccess).get_receiver_puon20_k$ = function () {
    return this.receiver_1;
  };
  protoOf(MemberAccess).get_member_gl3t7n_k$ = function () {
    return this.member_1;
  };
  protoOf(MemberAccess).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(MemberAccess).component1_7eebsc_k$ = function () {
    return this.receiver_1;
  };
  protoOf(MemberAccess).component2_7eebsb_k$ = function () {
    return this.member_1;
  };
  protoOf(MemberAccess).component3_7eebsa_k$ = function () {
    return this.pos_1;
  };
  protoOf(MemberAccess).copy_752ulv_k$ = function (receiver, member, pos) {
    return new MemberAccess(receiver, member, pos);
  };
  protoOf(MemberAccess).copy$default_cvlpkn_k$ = function (receiver, member, pos, $super) {
    receiver = receiver === VOID ? this.receiver_1 : receiver;
    member = member === VOID ? this.member_1 : member;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_752ulv_k$(receiver, member, pos) : $super.copy_752ulv_k$.call(this, receiver, member, pos);
  };
  protoOf(MemberAccess).toString = function () {
    return 'MemberAccess(receiver=' + this.receiver_1 + ', member=' + this.member_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(MemberAccess).hashCode = function () {
    var result = hashCode(this.receiver_1);
    result = imul(result, 31) + getStringHashCode(this.member_1) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(MemberAccess).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MemberAccess))
      return false;
    var tmp0_other_with_cast = other instanceof MemberAccess ? other : THROW_CCE();
    if (!equals(this.receiver_1, tmp0_other_with_cast.receiver_1))
      return false;
    if (!(this.member_1 === tmp0_other_with_cast.member_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function ArrayAccess(receiver, index, pos) {
    pos = pos === VOID ? null : pos;
    Expression.call(this, pos);
    this.receiver_1 = receiver;
    this.index_1 = index;
    this.pos_1 = pos;
  }
  protoOf(ArrayAccess).get_receiver_puon20_k$ = function () {
    return this.receiver_1;
  };
  protoOf(ArrayAccess).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(ArrayAccess).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(ArrayAccess).component1_7eebsc_k$ = function () {
    return this.receiver_1;
  };
  protoOf(ArrayAccess).component2_7eebsb_k$ = function () {
    return this.index_1;
  };
  protoOf(ArrayAccess).component3_7eebsa_k$ = function () {
    return this.pos_1;
  };
  protoOf(ArrayAccess).copy_y8ym56_k$ = function (receiver, index, pos) {
    return new ArrayAccess(receiver, index, pos);
  };
  protoOf(ArrayAccess).copy$default_ejocq1_k$ = function (receiver, index, pos, $super) {
    receiver = receiver === VOID ? this.receiver_1 : receiver;
    index = index === VOID ? this.index_1 : index;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_y8ym56_k$(receiver, index, pos) : $super.copy_y8ym56_k$.call(this, receiver, index, pos);
  };
  protoOf(ArrayAccess).toString = function () {
    return 'ArrayAccess(receiver=' + this.receiver_1 + ', index=' + this.index_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(ArrayAccess).hashCode = function () {
    var result = hashCode(this.receiver_1);
    result = imul(result, 31) + hashCode(this.index_1) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(ArrayAccess).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArrayAccess))
      return false;
    var tmp0_other_with_cast = other instanceof ArrayAccess ? other : THROW_CCE();
    if (!equals(this.receiver_1, tmp0_other_with_cast.receiver_1))
      return false;
    if (!equals(this.index_1, tmp0_other_with_cast.index_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function NumberLiteral(value, pos) {
    pos = pos === VOID ? null : pos;
    Expression.call(this, pos);
    this.value_1 = value;
    this.pos_1 = pos;
  }
  protoOf(NumberLiteral).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(NumberLiteral).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(NumberLiteral).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(NumberLiteral).component2_7eebsb_k$ = function () {
    return this.pos_1;
  };
  protoOf(NumberLiteral).copy_5r4x86_k$ = function (value, pos) {
    return new NumberLiteral(value, pos);
  };
  protoOf(NumberLiteral).copy$default_qjlxfp_k$ = function (value, pos, $super) {
    value = value === VOID ? this.value_1 : value;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_5r4x86_k$(value, pos) : $super.copy_5r4x86_k$.call(this, value, pos);
  };
  protoOf(NumberLiteral).toString = function () {
    return 'NumberLiteral(value=' + this.value_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(NumberLiteral).hashCode = function () {
    var result = getNumberHashCode(this.value_1);
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(NumberLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NumberLiteral))
      return false;
    var tmp0_other_with_cast = other instanceof NumberLiteral ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function StringLiteral(value, pos) {
    pos = pos === VOID ? null : pos;
    Expression.call(this, pos);
    this.value_1 = value;
    this.pos_1 = pos;
  }
  protoOf(StringLiteral).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(StringLiteral).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(StringLiteral).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(StringLiteral).component2_7eebsb_k$ = function () {
    return this.pos_1;
  };
  protoOf(StringLiteral).copy_lzs3qi_k$ = function (value, pos) {
    return new StringLiteral(value, pos);
  };
  protoOf(StringLiteral).copy$default_8e4j7j_k$ = function (value, pos, $super) {
    value = value === VOID ? this.value_1 : value;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_lzs3qi_k$(value, pos) : $super.copy_lzs3qi_k$.call(this, value, pos);
  };
  protoOf(StringLiteral).toString = function () {
    return 'StringLiteral(value=' + this.value_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(StringLiteral).hashCode = function () {
    var result = getStringHashCode(this.value_1);
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(StringLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringLiteral))
      return false;
    var tmp0_other_with_cast = other instanceof StringLiteral ? other : THROW_CCE();
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function InterpolatedStringLiteral(parts, pos) {
    pos = pos === VOID ? null : pos;
    Expression.call(this, pos);
    this.parts_1 = parts;
    this.pos_1 = pos;
  }
  protoOf(InterpolatedStringLiteral).get_parts_iwqrav_k$ = function () {
    return this.parts_1;
  };
  protoOf(InterpolatedStringLiteral).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(InterpolatedStringLiteral).component1_7eebsc_k$ = function () {
    return this.parts_1;
  };
  protoOf(InterpolatedStringLiteral).component2_7eebsb_k$ = function () {
    return this.pos_1;
  };
  protoOf(InterpolatedStringLiteral).copy_2cp3wi_k$ = function (parts, pos) {
    return new InterpolatedStringLiteral(parts, pos);
  };
  protoOf(InterpolatedStringLiteral).copy$default_cueyzu_k$ = function (parts, pos, $super) {
    parts = parts === VOID ? this.parts_1 : parts;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_2cp3wi_k$(parts, pos) : $super.copy_2cp3wi_k$.call(this, parts, pos);
  };
  protoOf(InterpolatedStringLiteral).toString = function () {
    return 'InterpolatedStringLiteral(parts=' + this.parts_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(InterpolatedStringLiteral).hashCode = function () {
    var result = hashCode(this.parts_1);
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(InterpolatedStringLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InterpolatedStringLiteral))
      return false;
    var tmp0_other_with_cast = other instanceof InterpolatedStringLiteral ? other : THROW_CCE();
    if (!equals(this.parts_1, tmp0_other_with_cast.parts_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function BooleanLiteral(value, pos) {
    pos = pos === VOID ? null : pos;
    Expression.call(this, pos);
    this.value_1 = value;
    this.pos_1 = pos;
  }
  protoOf(BooleanLiteral).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(BooleanLiteral).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(BooleanLiteral).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(BooleanLiteral).component2_7eebsb_k$ = function () {
    return this.pos_1;
  };
  protoOf(BooleanLiteral).copy_m6rz3f_k$ = function (value, pos) {
    return new BooleanLiteral(value, pos);
  };
  protoOf(BooleanLiteral).copy$default_aer8jn_k$ = function (value, pos, $super) {
    value = value === VOID ? this.value_1 : value;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_m6rz3f_k$(value, pos) : $super.copy_m6rz3f_k$.call(this, value, pos);
  };
  protoOf(BooleanLiteral).toString = function () {
    return 'BooleanLiteral(value=' + this.value_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(BooleanLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.value_1);
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(BooleanLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BooleanLiteral))
      return false;
    var tmp0_other_with_cast = other instanceof BooleanLiteral ? other : THROW_CCE();
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function NullLiteral(pos) {
    pos = pos === VOID ? null : pos;
    Expression.call(this, pos);
    this.pos_1 = pos;
  }
  protoOf(NullLiteral).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(NullLiteral).component1_7eebsc_k$ = function () {
    return this.pos_1;
  };
  protoOf(NullLiteral).copy_4n0goq_k$ = function (pos) {
    return new NullLiteral(pos);
  };
  protoOf(NullLiteral).copy$default_z3qvs4_k$ = function (pos, $super) {
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_4n0goq_k$(pos) : $super.copy_4n0goq_k$.call(this, pos);
  };
  protoOf(NullLiteral).toString = function () {
    return 'NullLiteral(pos=' + this.pos_1 + ')';
  };
  protoOf(NullLiteral).hashCode = function () {
    return this.pos_1 == null ? 0 : this.pos_1.hashCode();
  };
  protoOf(NullLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NullLiteral))
      return false;
    var tmp0_other_with_cast = other instanceof NullLiteral ? other : THROW_CCE();
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function BinaryExpression(left, operator, right, pos) {
    pos = pos === VOID ? null : pos;
    Expression.call(this, pos);
    this.left_1 = left;
    this.operator_1 = operator;
    this.right_1 = right;
    this.pos_1 = pos;
  }
  protoOf(BinaryExpression).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(BinaryExpression).get_operator_uy5ppp_k$ = function () {
    return this.operator_1;
  };
  protoOf(BinaryExpression).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  protoOf(BinaryExpression).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(BinaryExpression).component1_7eebsc_k$ = function () {
    return this.left_1;
  };
  protoOf(BinaryExpression).component2_7eebsb_k$ = function () {
    return this.operator_1;
  };
  protoOf(BinaryExpression).component3_7eebsa_k$ = function () {
    return this.right_1;
  };
  protoOf(BinaryExpression).component4_7eebs9_k$ = function () {
    return this.pos_1;
  };
  protoOf(BinaryExpression).copy_5jqkxo_k$ = function (left, operator, right, pos) {
    return new BinaryExpression(left, operator, right, pos);
  };
  protoOf(BinaryExpression).copy$default_5z3122_k$ = function (left, operator, right, pos, $super) {
    left = left === VOID ? this.left_1 : left;
    operator = operator === VOID ? this.operator_1 : operator;
    right = right === VOID ? this.right_1 : right;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_5jqkxo_k$(left, operator, right, pos) : $super.copy_5jqkxo_k$.call(this, left, operator, right, pos);
  };
  protoOf(BinaryExpression).toString = function () {
    return 'BinaryExpression(left=' + this.left_1 + ', operator=' + this.operator_1 + ', right=' + this.right_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(BinaryExpression).hashCode = function () {
    var result = hashCode(this.left_1);
    result = imul(result, 31) + getStringHashCode(this.operator_1) | 0;
    result = imul(result, 31) + hashCode(this.right_1) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(BinaryExpression).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BinaryExpression))
      return false;
    var tmp0_other_with_cast = other instanceof BinaryExpression ? other : THROW_CCE();
    if (!equals(this.left_1, tmp0_other_with_cast.left_1))
      return false;
    if (!(this.operator_1 === tmp0_other_with_cast.operator_1))
      return false;
    if (!equals(this.right_1, tmp0_other_with_cast.right_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function UnaryExpression(operator, operand, pos) {
    pos = pos === VOID ? null : pos;
    Expression.call(this, pos);
    this.operator_1 = operator;
    this.operand_1 = operand;
    this.pos_1 = pos;
  }
  protoOf(UnaryExpression).get_operator_uy5ppp_k$ = function () {
    return this.operator_1;
  };
  protoOf(UnaryExpression).get_operand_jmg3ds_k$ = function () {
    return this.operand_1;
  };
  protoOf(UnaryExpression).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(UnaryExpression).component1_7eebsc_k$ = function () {
    return this.operator_1;
  };
  protoOf(UnaryExpression).component2_7eebsb_k$ = function () {
    return this.operand_1;
  };
  protoOf(UnaryExpression).component3_7eebsa_k$ = function () {
    return this.pos_1;
  };
  protoOf(UnaryExpression).copy_xrkuvb_k$ = function (operator, operand, pos) {
    return new UnaryExpression(operator, operand, pos);
  };
  protoOf(UnaryExpression).copy$default_fwel1c_k$ = function (operator, operand, pos, $super) {
    operator = operator === VOID ? this.operator_1 : operator;
    operand = operand === VOID ? this.operand_1 : operand;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_xrkuvb_k$(operator, operand, pos) : $super.copy_xrkuvb_k$.call(this, operator, operand, pos);
  };
  protoOf(UnaryExpression).toString = function () {
    return 'UnaryExpression(operator=' + this.operator_1 + ', operand=' + this.operand_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(UnaryExpression).hashCode = function () {
    var result = getStringHashCode(this.operator_1);
    result = imul(result, 31) + hashCode(this.operand_1) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(UnaryExpression).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UnaryExpression))
      return false;
    var tmp0_other_with_cast = other instanceof UnaryExpression ? other : THROW_CCE();
    if (!(this.operator_1 === tmp0_other_with_cast.operator_1))
      return false;
    if (!equals(this.operand_1, tmp0_other_with_cast.operand_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function PostfixExpression(operand, operator, pos) {
    pos = pos === VOID ? null : pos;
    Expression.call(this, pos);
    this.operand_1 = operand;
    this.operator_1 = operator;
    this.pos_1 = pos;
  }
  protoOf(PostfixExpression).get_operand_jmg3ds_k$ = function () {
    return this.operand_1;
  };
  protoOf(PostfixExpression).get_operator_uy5ppp_k$ = function () {
    return this.operator_1;
  };
  protoOf(PostfixExpression).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(PostfixExpression).component1_7eebsc_k$ = function () {
    return this.operand_1;
  };
  protoOf(PostfixExpression).component2_7eebsb_k$ = function () {
    return this.operator_1;
  };
  protoOf(PostfixExpression).component3_7eebsa_k$ = function () {
    return this.pos_1;
  };
  protoOf(PostfixExpression).copy_752ulv_k$ = function (operand, operator, pos) {
    return new PostfixExpression(operand, operator, pos);
  };
  protoOf(PostfixExpression).copy$default_q504sa_k$ = function (operand, operator, pos, $super) {
    operand = operand === VOID ? this.operand_1 : operand;
    operator = operator === VOID ? this.operator_1 : operator;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_752ulv_k$(operand, operator, pos) : $super.copy_752ulv_k$.call(this, operand, operator, pos);
  };
  protoOf(PostfixExpression).toString = function () {
    return 'PostfixExpression(operand=' + this.operand_1 + ', operator=' + this.operator_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(PostfixExpression).hashCode = function () {
    var result = hashCode(this.operand_1);
    result = imul(result, 31) + getStringHashCode(this.operator_1) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(PostfixExpression).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PostfixExpression))
      return false;
    var tmp0_other_with_cast = other instanceof PostfixExpression ? other : THROW_CCE();
    if (!equals(this.operand_1, tmp0_other_with_cast.operand_1))
      return false;
    if (!(this.operator_1 === tmp0_other_with_cast.operator_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function FunctionCall(name, arguments_0, pos) {
    pos = pos === VOID ? null : pos;
    Expression.call(this, pos);
    this.name_1 = name;
    this.arguments_1 = arguments_0;
    this.pos_1 = pos;
  }
  protoOf(FunctionCall).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(FunctionCall).get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  protoOf(FunctionCall).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(FunctionCall).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(FunctionCall).component2_7eebsb_k$ = function () {
    return this.arguments_1;
  };
  protoOf(FunctionCall).component3_7eebsa_k$ = function () {
    return this.pos_1;
  };
  protoOf(FunctionCall).copy_rbv3vq_k$ = function (name, arguments_0, pos) {
    return new FunctionCall(name, arguments_0, pos);
  };
  protoOf(FunctionCall).copy$default_z6b7ji_k$ = function (name, arguments_0, pos, $super) {
    name = name === VOID ? this.name_1 : name;
    arguments_0 = arguments_0 === VOID ? this.arguments_1 : arguments_0;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_rbv3vq_k$(name, arguments_0, pos) : $super.copy_rbv3vq_k$.call(this, name, arguments_0, pos);
  };
  protoOf(FunctionCall).toString = function () {
    return 'FunctionCall(name=' + this.name_1 + ', arguments=' + this.arguments_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(FunctionCall).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(FunctionCall).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FunctionCall))
      return false;
    var tmp0_other_with_cast = other instanceof FunctionCall ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function MethodCall(receiver, method, arguments_0, pos) {
    pos = pos === VOID ? null : pos;
    Expression.call(this, pos);
    this.receiver_1 = receiver;
    this.method_1 = method;
    this.arguments_1 = arguments_0;
    this.pos_1 = pos;
  }
  protoOf(MethodCall).get_receiver_puon20_k$ = function () {
    return this.receiver_1;
  };
  protoOf(MethodCall).get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  protoOf(MethodCall).get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  protoOf(MethodCall).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(MethodCall).component1_7eebsc_k$ = function () {
    return this.receiver_1;
  };
  protoOf(MethodCall).component2_7eebsb_k$ = function () {
    return this.method_1;
  };
  protoOf(MethodCall).component3_7eebsa_k$ = function () {
    return this.arguments_1;
  };
  protoOf(MethodCall).component4_7eebs9_k$ = function () {
    return this.pos_1;
  };
  protoOf(MethodCall).copy_fg06kp_k$ = function (receiver, method, arguments_0, pos) {
    return new MethodCall(receiver, method, arguments_0, pos);
  };
  protoOf(MethodCall).copy$default_cs5yqb_k$ = function (receiver, method, arguments_0, pos, $super) {
    receiver = receiver === VOID ? this.receiver_1 : receiver;
    method = method === VOID ? this.method_1 : method;
    arguments_0 = arguments_0 === VOID ? this.arguments_1 : arguments_0;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_fg06kp_k$(receiver, method, arguments_0, pos) : $super.copy_fg06kp_k$.call(this, receiver, method, arguments_0, pos);
  };
  protoOf(MethodCall).toString = function () {
    return 'MethodCall(receiver=' + this.receiver_1 + ', method=' + this.method_1 + ', arguments=' + this.arguments_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(MethodCall).hashCode = function () {
    var result = hashCode(this.receiver_1);
    result = imul(result, 31) + getStringHashCode(this.method_1) | 0;
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(MethodCall).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MethodCall))
      return false;
    var tmp0_other_with_cast = other instanceof MethodCall ? other : THROW_CCE();
    if (!equals(this.receiver_1, tmp0_other_with_cast.receiver_1))
      return false;
    if (!(this.method_1 === tmp0_other_with_cast.method_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function ArrayLiteral(elements, pos) {
    pos = pos === VOID ? null : pos;
    Expression.call(this, pos);
    this.elements_1 = elements;
    this.pos_1 = pos;
  }
  protoOf(ArrayLiteral).get_elements_vxwh8g_k$ = function () {
    return this.elements_1;
  };
  protoOf(ArrayLiteral).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(ArrayLiteral).component1_7eebsc_k$ = function () {
    return this.elements_1;
  };
  protoOf(ArrayLiteral).component2_7eebsb_k$ = function () {
    return this.pos_1;
  };
  protoOf(ArrayLiteral).copy_o3itx2_k$ = function (elements, pos) {
    return new ArrayLiteral(elements, pos);
  };
  protoOf(ArrayLiteral).copy$default_qcqzfx_k$ = function (elements, pos, $super) {
    elements = elements === VOID ? this.elements_1 : elements;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_o3itx2_k$(elements, pos) : $super.copy_o3itx2_k$.call(this, elements, pos);
  };
  protoOf(ArrayLiteral).toString = function () {
    return 'ArrayLiteral(elements=' + this.elements_1 + ', pos=' + this.pos_1 + ')';
  };
  protoOf(ArrayLiteral).hashCode = function () {
    var result = hashCode(this.elements_1);
    result = imul(result, 31) + (this.pos_1 == null ? 0 : this.pos_1.hashCode()) | 0;
    return result;
  };
  protoOf(ArrayLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArrayLiteral))
      return false;
    var tmp0_other_with_cast = other instanceof ArrayLiteral ? other : THROW_CCE();
    if (!equals(this.elements_1, tmp0_other_with_cast.elements_1))
      return false;
    if (!equals(this.pos_1, tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function Text(value) {
    StringPart.call(this);
    this.value_1 = value;
  }
  protoOf(Text).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Text).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(Text).copy_a35qlh_k$ = function (value) {
    return new Text(value);
  };
  protoOf(Text).copy$default_9pc8o8_k$ = function (value, $super) {
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_a35qlh_k$(value) : $super.copy_a35qlh_k$.call(this, value);
  };
  protoOf(Text).toString = function () {
    return 'Text(value=' + this.value_1 + ')';
  };
  protoOf(Text).hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  protoOf(Text).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Text))
      return false;
    var tmp0_other_with_cast = other instanceof Text ? other : THROW_CCE();
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function Expression_0(expr) {
    StringPart.call(this);
    this.expr_1 = expr;
  }
  protoOf(Expression_0).get_expr_wolovy_k$ = function () {
    return this.expr_1;
  };
  protoOf(Expression_0).component1_7eebsc_k$ = function () {
    return this.expr_1;
  };
  protoOf(Expression_0).copy_ll7pn2_k$ = function (expr) {
    return new Expression_0(expr);
  };
  protoOf(Expression_0).copy$default_l090vk_k$ = function (expr, $super) {
    expr = expr === VOID ? this.expr_1 : expr;
    return $super === VOID ? this.copy_ll7pn2_k$(expr) : $super.copy_ll7pn2_k$.call(this, expr);
  };
  protoOf(Expression_0).toString = function () {
    return 'Expression(expr=' + this.expr_1 + ')';
  };
  protoOf(Expression_0).hashCode = function () {
    return hashCode(this.expr_1);
  };
  protoOf(Expression_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Expression_0))
      return false;
    var tmp0_other_with_cast = other instanceof Expression_0 ? other : THROW_CCE();
    if (!equals(this.expr_1, tmp0_other_with_cast.expr_1))
      return false;
    return true;
  };
  function StringPart() {
  }
  function ASTNode(position) {
    this.position_1 = position;
  }
  protoOf(ASTNode).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  function _get_nativeFunctions__u2olzh($this) {
    return $this.nativeFunctions_1;
  }
  function _set_currentScope__gzl55o($this, _set____db54di) {
    $this.currentScope_1 = _set____db54di;
  }
  function _get_currentScope__wjbvps($this) {
    return $this.currentScope_1;
  }
  function executeStatement($this, statement) {
    try {
      var tmp;
      if (statement instanceof VarDeclaration) {
        var value = evaluateExpression($this, statement.get_value_j01efc_k$());
        $this.currentScope_1.defineVariable_uunah8_k$(statement.get_name_woqyms_k$(), value);
        tmp = NullValue_getInstance();
      } else {
        if (statement instanceof Assignment) {
          var value_0 = evaluateExpression($this, statement.get_value_j01efc_k$());
          var target = statement.get_target_juba8q_k$();
          if (target instanceof Identifier) {
            if (!$this.currentScope_1.setVariable_j9b8zn_k$(target.get_name_woqyms_k$(), value_0)) {
              throw new RuntimeError("Undefined variable '" + target.get_name_woqyms_k$() + "'", statement.get_position_jfponi_k$());
            }
          } else {
            if (target instanceof MemberAccess) {
              var obj = evaluateExpression($this, target.get_receiver_puon20_k$());
              if (obj instanceof ObjectValue) {
                obj.setField_7mv1pv_k$(target.get_member_gl3t7n_k$(), value_0);
              } else {
                throw new RuntimeError('Cannot set field on non-object', statement.get_position_jfponi_k$());
              }
            } else {
              if (target instanceof ArrayAccess) {
                var array = evaluateExpression($this, target.get_receiver_puon20_k$());
                var index = evaluateExpression($this, target.get_index_it478p_k$());
                var tmp_0;
                if (array instanceof ArrayValue) {
                  tmp_0 = index instanceof NumberValue;
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  array.set_n9ia1z_k$(index.toInt_1tsl84_k$(), value_0);
                } else {
                  throw new RuntimeError('Invalid array assignment', statement.get_position_jfponi_k$());
                }
              } else {
                throw new RuntimeError('Invalid assignment target', statement.get_position_jfponi_k$());
              }
            }
          }
          tmp = NullValue_getInstance();
        } else {
          if (statement instanceof ExpressionStatement) {
            tmp = evaluateExpression($this, statement.get_expression_l5w7j5_k$());
          } else {
            if (statement instanceof IfStatement) {
              var condition = evaluateExpression($this, statement.get_condition_5qa366_k$());
              var tmp_1;
              if (ValueUtils_getInstance().isTruthy_uoutaf_k$(condition)) {
                tmp_1 = executeBlock($this, statement.get_thenBranch_cpbazc_k$());
              } else if (!(statement.get_elseBranch_p6xzcs_k$() == null)) {
                tmp_1 = executeBlock($this, statement.get_elseBranch_p6xzcs_k$());
              } else {
                tmp_1 = NullValue_getInstance();
              }
              tmp = tmp_1;
            } else {
              if (statement instanceof WhileStatement) {
                var lastValue = NullValue_getInstance();
                try {
                  $l$loop_0: while (true) {
                    var condition_0 = evaluateExpression($this, statement.get_condition_5qa366_k$());
                    if (!ValueUtils_getInstance().isTruthy_uoutaf_k$(condition_0))
                      break $l$loop_0;
                    try {
                      lastValue = executeBlock($this, statement.get_body_wojkyz_k$());
                    } catch ($p) {
                      if ($p instanceof ContinueException) {
                        var e = $p;
                        continue $l$loop_0;
                      } else {
                        throw $p;
                      }
                    }
                  }
                } catch ($p) {
                  if ($p instanceof BreakException) {
                    var e_0 = $p;
                  } else {
                    throw $p;
                  }
                }
                tmp = lastValue;
              } else {
                if (statement instanceof ForStatement) {
                  var lastValue_0 = NullValue_getInstance();
                  var forScope = new Scope($this.currentScope_1);
                  var prevScope = $this.currentScope_1;
                  $this.currentScope_1 = forScope;
                  try {
                    var tmp1_safe_receiver = statement.get_init_woo195_k$();
                    if (tmp1_safe_receiver == null)
                      null;
                    else {
                      // Inline function 'kotlin.let' call
                      // Inline function 'kotlin.contracts.contract' call
                      // Inline function 'at.crowdware.sms.interpreter.Interpreter.executeStatement.<anonymous>' call
                      executeStatement($this, tmp1_safe_receiver);
                    }
                    try {
                      $l$loop_1: while (true) {
                        if (!(statement.get_condition_5qa366_k$() == null)) {
                          var condition_1 = evaluateExpression($this, statement.get_condition_5qa366_k$());
                          if (!ValueUtils_getInstance().isTruthy_uoutaf_k$(condition_1))
                            break $l$loop_1;
                        }
                        try {
                          lastValue_0 = executeBlock($this, statement.get_body_wojkyz_k$());
                        } catch ($p) {
                          if ($p instanceof ContinueException) {
                            var e_1 = $p;
                          } else {
                            throw $p;
                          }
                        }
                        var tmp2_safe_receiver = statement.get_update_kjcrma_k$();
                        if (tmp2_safe_receiver == null)
                          null;
                        else {
                          // Inline function 'kotlin.let' call
                          // Inline function 'kotlin.contracts.contract' call
                          // Inline function 'at.crowdware.sms.interpreter.Interpreter.executeStatement.<anonymous>' call
                          executeStatement($this, tmp2_safe_receiver);
                        }
                      }
                    } catch ($p) {
                      if ($p instanceof BreakException) {
                        var e_2 = $p;
                      } else {
                        throw $p;
                      }
                    }
                  }finally {
                    $this.currentScope_1 = prevScope;
                  }
                  tmp = lastValue_0;
                } else {
                  if (statement instanceof ForInStatement) {
                    var lastValue_1 = NullValue_getInstance();
                    var forScope_0 = new Scope($this.currentScope_1);
                    var prevScope_0 = $this.currentScope_1;
                    $this.currentScope_1 = forScope_0;
                    try {
                      var iterable = evaluateExpression($this, statement.get_iterable_c8wb7p_k$());
                      if (iterable instanceof ArrayValue) {
                        try {
                          var tmp3_iterator = iterable.get_elements_vxwh8g_k$().iterator_jk1svi_k$();
                          $l$loop_2: while (tmp3_iterator.hasNext_bitz1p_k$()) {
                            var element = tmp3_iterator.next_20eer_k$();
                            $this.currentScope_1.defineVariable_uunah8_k$(statement.get_variable_ik7c5h_k$(), element);
                            try {
                              lastValue_1 = executeBlock($this, statement.get_body_wojkyz_k$());
                            } catch ($p) {
                              if ($p instanceof ContinueException) {
                                var e_3 = $p;
                                continue $l$loop_2;
                              } else {
                                throw $p;
                              }
                            }
                          }
                        } catch ($p) {
                          if ($p instanceof BreakException) {
                            var e_4 = $p;
                          } else {
                            throw $p;
                          }
                        }
                      } else {
                        throw new RuntimeError('for-in requires an array', statement.get_position_jfponi_k$());
                      }
                    }finally {
                      $this.currentScope_1 = prevScope_0;
                    }
                    tmp = lastValue_1;
                  } else {
                    if (statement instanceof BreakStatement) {
                      throw new BreakException();
                    } else {
                      if (statement instanceof ContinueStatement) {
                        throw new ContinueException();
                      } else {
                        if (statement instanceof ReturnStatement) {
                          var tmp4_safe_receiver = statement.get_value_j01efc_k$();
                          var tmp_2;
                          if (tmp4_safe_receiver == null) {
                            tmp_2 = null;
                          } else {
                            // Inline function 'kotlin.let' call
                            // Inline function 'kotlin.contracts.contract' call
                            // Inline function 'at.crowdware.sms.interpreter.Interpreter.executeStatement.<anonymous>' call
                            tmp_2 = evaluateExpression($this, tmp4_safe_receiver);
                          }
                          var tmp5_elvis_lhs = tmp_2;
                          var value_1 = tmp5_elvis_lhs == null ? NullValue_getInstance() : tmp5_elvis_lhs;
                          throw new ReturnException(value_1);
                        } else {
                          if (statement instanceof FunctionDeclaration) {
                            tmp = NullValue_getInstance();
                          } else {
                            if (statement instanceof DataClassDeclaration) {
                              tmp = NullValue_getInstance();
                            } else {
                              throw new RuntimeError('Unknown statement type in execution', statement.get_position_jfponi_k$());
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return tmp;
    } catch ($p) {
      if ($p instanceof RuntimeError) {
        var e_5 = $p;
        throw e_5;
      } else {
        if ($p instanceof BreakException) {
          var e_6 = $p;
          throw e_6;
        } else {
          if ($p instanceof ContinueException) {
            var e_7 = $p;
            throw e_7;
          } else {
            if ($p instanceof ReturnException) {
              var e_8 = $p;
              throw e_8;
            } else {
              if ($p instanceof Exception) {
                var e_9 = $p;
                throw new RuntimeError('Runtime error: ' + e_9.message, statement.get_position_jfponi_k$(), e_9);
              } else {
                throw $p;
              }
            }
          }
        }
      }
    }
  }
  function executeBlock($this, statements) {
    var blockScope = new Scope($this.currentScope_1);
    var prevScope = $this.currentScope_1;
    $this.currentScope_1 = blockScope;
    var tmp;
    try {
      var lastValue = NullValue_getInstance();
      var tmp0_iterator = statements.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var statement = tmp0_iterator.next_20eer_k$();
        lastValue = executeStatement($this, statement);
      }
      tmp = lastValue;
    }finally {
      $this.currentScope_1 = prevScope;
    }
    return tmp;
  }
  function evaluateExpression($this, expression) {
    var tmp;
    try {
      var tmp_0;
      if (expression instanceof NumberLiteral) {
        tmp_0 = new NumberValue(expression.get_value_j01efc_k$());
      } else {
        if (expression instanceof StringLiteral) {
          tmp_0 = new StringValue(expression.get_value_j01efc_k$());
        } else {
          if (expression instanceof InterpolatedStringLiteral) {
            tmp_0 = evaluateInterpolatedString($this, expression);
          } else {
            if (expression instanceof BooleanLiteral) {
              tmp_0 = new BooleanValue(expression.get_value_j01efc_k$());
            } else {
              if (expression instanceof NullLiteral) {
                tmp_0 = NullValue_getInstance();
              } else {
                if (expression instanceof Identifier) {
                  var tmp1_elvis_lhs = $this.currentScope_1.getVariable_jacbig_k$(expression.get_name_woqyms_k$());
                  var tmp_1;
                  if (tmp1_elvis_lhs == null) {
                    throw new RuntimeError("Undefined variable '" + expression.get_name_woqyms_k$() + "'", expression.get_position_jfponi_k$());
                  } else {
                    tmp_1 = tmp1_elvis_lhs;
                  }
                  tmp_0 = tmp_1;
                } else {
                  if (expression instanceof BinaryExpression) {
                    tmp_0 = evaluateBinaryExpression($this, expression);
                  } else {
                    if (expression instanceof UnaryExpression) {
                      tmp_0 = evaluateUnaryExpression($this, expression);
                    } else {
                      if (expression instanceof PostfixExpression) {
                        tmp_0 = evaluatePostfixExpression($this, expression);
                      } else {
                        if (expression instanceof FunctionCall) {
                          // Inline function 'kotlin.collections.map' call
                          var this_0 = expression.get_arguments_p5ddub_k$();
                          // Inline function 'kotlin.collections.mapTo' call
                          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
                          var tmp0_iterator = this_0.iterator_jk1svi_k$();
                          while (tmp0_iterator.hasNext_bitz1p_k$()) {
                            var item = tmp0_iterator.next_20eer_k$();
                            // Inline function 'at.crowdware.sms.interpreter.Interpreter.evaluateExpression.<anonymous>' call
                            var tmp$ret$0 = evaluateExpression($this, item);
                            destination.add_utx5q5_k$(tmp$ret$0);
                          }
                          var args = destination;
                          var nativeFunc = $this.nativeFunctions_1.get_6bo4tg_k$(expression.get_name_woqyms_k$());
                          if (!(nativeFunc == null)) {
                            return nativeFunc.call_yiqqb5_k$(args);
                          }
                          var dataClass = $this.currentScope_1.getDataClass_50e5ku_k$(expression.get_name_woqyms_k$());
                          if (!(dataClass == null)) {
                            return callDataClassConstructor($this, dataClass, args, expression.get_position_jfponi_k$());
                          }
                          var tmp2_elvis_lhs = $this.currentScope_1.getFunction_m9x40k_k$(expression.get_name_woqyms_k$());
                          var tmp_2;
                          if (tmp2_elvis_lhs == null) {
                            throw new RuntimeError("Undefined function '" + expression.get_name_woqyms_k$() + "'", expression.get_position_jfponi_k$());
                          } else {
                            tmp_2 = tmp2_elvis_lhs;
                          }
                          var func = tmp_2;
                          tmp_0 = callFunction($this, func, args, expression.get_position_jfponi_k$());
                        } else {
                          if (expression instanceof MethodCall) {
                            var receiver = evaluateExpression($this, expression.get_receiver_puon20_k$());
                            // Inline function 'kotlin.collections.map' call
                            var this_1 = expression.get_arguments_p5ddub_k$();
                            // Inline function 'kotlin.collections.mapTo' call
                            var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
                            var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
                            while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                              var item_0 = tmp0_iterator_0.next_20eer_k$();
                              // Inline function 'at.crowdware.sms.interpreter.Interpreter.evaluateExpression.<anonymous>' call
                              var tmp$ret$3 = evaluateExpression($this, item_0);
                              destination_0.add_utx5q5_k$(tmp$ret$3);
                            }
                            var args_0 = destination_0;
                            var tmp_3;
                            if (receiver instanceof ArrayValue) {
                              tmp_3 = callArrayMethod($this, receiver, expression.get_method_gl8esq_k$(), args_0, expression.get_position_jfponi_k$());
                            } else {
                              if (receiver instanceof StringValue) {
                                tmp_3 = callStringMethod($this, receiver, expression.get_method_gl8esq_k$(), args_0, expression.get_position_jfponi_k$());
                              } else {
                                throw new RuntimeError("Cannot call method '" + expression.get_method_gl8esq_k$() + "' on " + getKClassFromExpression(receiver).get_simpleName_r6f8py_k$(), expression.get_position_jfponi_k$());
                              }
                            }
                            tmp_0 = tmp_3;
                          } else {
                            if (expression instanceof MemberAccess) {
                              var receiver_0 = evaluateExpression($this, expression.get_receiver_puon20_k$());
                              var tmp_4;
                              if (receiver_0 instanceof ObjectValue) {
                                tmp_4 = receiver_0.getField_m983m2_k$(expression.get_member_gl3t7n_k$());
                              } else {
                                if (receiver_0 instanceof ArrayValue) {
                                  var tmp_5;
                                  if (expression.get_member_gl3t7n_k$() === 'size') {
                                    tmp_5 = NumberValue_init_$Create$(receiver_0.size_23och_k$());
                                  } else {
                                    throw new RuntimeError("Unknown array property '" + expression.get_member_gl3t7n_k$() + "'", expression.get_position_jfponi_k$());
                                  }
                                  tmp_4 = tmp_5;
                                } else {
                                  throw new RuntimeError("Cannot access member '" + expression.get_member_gl3t7n_k$() + "' on " + getKClassFromExpression(receiver_0).get_simpleName_r6f8py_k$(), expression.get_position_jfponi_k$());
                                }
                              }
                              tmp_0 = tmp_4;
                            } else {
                              if (expression instanceof ArrayAccess) {
                                var receiver_1 = evaluateExpression($this, expression.get_receiver_puon20_k$());
                                var index = evaluateExpression($this, expression.get_index_it478p_k$());
                                var tmp_6;
                                var tmp_7;
                                if (receiver_1 instanceof ArrayValue) {
                                  tmp_7 = index instanceof NumberValue;
                                } else {
                                  tmp_7 = false;
                                }
                                if (tmp_7) {
                                  tmp_6 = receiver_1.get_c1px32_k$(index.toInt_1tsl84_k$());
                                } else {
                                  throw new RuntimeError('Invalid array access', expression.get_position_jfponi_k$());
                                }
                                tmp_0 = tmp_6;
                              } else {
                                if (expression instanceof ArrayLiteral) {
                                  // Inline function 'kotlin.collections.map' call
                                  var this_2 = expression.get_elements_vxwh8g_k$();
                                  // Inline function 'kotlin.collections.mapTo' call
                                  var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
                                  var tmp0_iterator_1 = this_2.iterator_jk1svi_k$();
                                  while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
                                    var item_1 = tmp0_iterator_1.next_20eer_k$();
                                    // Inline function 'at.crowdware.sms.interpreter.Interpreter.evaluateExpression.<anonymous>' call
                                    var tmp$ret$6 = evaluateExpression($this, item_1);
                                    destination_1.add_utx5q5_k$(tmp$ret$6);
                                  }
                                  var elements = toMutableList(destination_1);
                                  tmp_0 = new ArrayValue(elements);
                                } else {
                                  throw new RuntimeError('Unknown expression type', expression.get_position_jfponi_k$());
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_8;
      if ($p instanceof RuntimeError) {
        var e = $p;
        throw e;
      } else {
        if ($p instanceof Exception) {
          var e_0 = $p;
          throw new RuntimeError('Expression evaluation error: ' + e_0.message, expression.get_position_jfponi_k$(), e_0);
        } else {
          throw $p;
        }
      }
    }
    return tmp;
  }
  function evaluateBinaryExpression($this, expr) {
    var left = evaluateExpression($this, expr.get_left_woprgw_k$());
    var right = evaluateExpression($this, expr.get_right_ixz7xv_k$());
    var tmp;
    switch (expr.get_operator_uy5ppp_k$()) {
      case '+':
        var tmp_0;
        var tmp_1;
        if (left instanceof NumberValue) {
          tmp_1 = right instanceof NumberValue;
        } else {
          tmp_1 = false;
        }

        if (tmp_1) {
          tmp_0 = new NumberValue(left.get_value_j01efc_k$() + right.get_value_j01efc_k$());
        } else {
          var tmp_2;
          if (left instanceof StringValue) {
            tmp_2 = true;
          } else {
            tmp_2 = right instanceof StringValue;
          }
          if (tmp_2) {
            var tmp_3;
            if (left instanceof StringValue) {
              tmp_3 = left.get_value_j01efc_k$();
            } else {
              if (left instanceof NumberValue) {
                tmp_3 = left.get_value_j01efc_k$() === numberToInt(left.get_value_j01efc_k$()) ? numberToInt(left.get_value_j01efc_k$()).toString() : left.get_value_j01efc_k$().toString();
              } else {
                if (left instanceof BooleanValue) {
                  tmp_3 = left.get_value_j01efc_k$().toString();
                } else {
                  if (left instanceof NullValue) {
                    tmp_3 = 'null';
                  } else {
                    tmp_3 = left.toString();
                  }
                }
              }
            }
            var leftStr = tmp_3;
            var tmp_4;
            if (right instanceof StringValue) {
              tmp_4 = right.get_value_j01efc_k$();
            } else {
              if (right instanceof NumberValue) {
                tmp_4 = right.get_value_j01efc_k$() === numberToInt(right.get_value_j01efc_k$()) ? numberToInt(right.get_value_j01efc_k$()).toString() : right.get_value_j01efc_k$().toString();
              } else {
                if (right instanceof BooleanValue) {
                  tmp_4 = right.get_value_j01efc_k$().toString();
                } else {
                  if (right instanceof NullValue) {
                    tmp_4 = 'null';
                  } else {
                    tmp_4 = right.toString();
                  }
                }
              }
            }
            var rightStr = tmp_4;
            tmp_0 = new StringValue(leftStr + rightStr);
          } else {
            throw new RuntimeError("Invalid operands for '+'", expr.get_position_jfponi_k$());
          }
        }

        tmp = tmp_0;
        break;
      case '-':
        var tmp_5;
        var tmp_6;
        if (left instanceof NumberValue) {
          tmp_6 = right instanceof NumberValue;
        } else {
          tmp_6 = false;
        }

        if (tmp_6) {
          tmp_5 = new NumberValue(left.get_value_j01efc_k$() - right.get_value_j01efc_k$());
        } else {
          throw new RuntimeError("Invalid operands for '-'", expr.get_position_jfponi_k$());
        }

        tmp = tmp_5;
        break;
      case '*':
        var tmp_7;
        var tmp_8;
        if (left instanceof NumberValue) {
          tmp_8 = right instanceof NumberValue;
        } else {
          tmp_8 = false;
        }

        if (tmp_8) {
          tmp_7 = new NumberValue(left.get_value_j01efc_k$() * right.get_value_j01efc_k$());
        } else {
          throw new RuntimeError("Invalid operands for '*'", expr.get_position_jfponi_k$());
        }

        tmp = tmp_7;
        break;
      case '/':
        var tmp_9;
        var tmp_10;
        if (left instanceof NumberValue) {
          tmp_10 = right instanceof NumberValue;
        } else {
          tmp_10 = false;
        }

        if (tmp_10) {
          if (right.get_value_j01efc_k$() === 0.0)
            throw new RuntimeError('Division by zero', expr.get_position_jfponi_k$());
          var leftInt = numberToInt(left.get_value_j01efc_k$());
          var rightInt = numberToInt(right.get_value_j01efc_k$());
          tmp_9 = NumberValue_init_$Create$(leftInt / rightInt | 0);
        } else {
          throw new RuntimeError("Invalid operands for '/'", expr.get_position_jfponi_k$());
        }

        tmp = tmp_9;
        break;
      case '==':
        tmp = new BooleanValue(ValueUtils_getInstance().equals_1op2in_k$(left, right));
        break;
      case '!=':
        tmp = new BooleanValue(!ValueUtils_getInstance().equals_1op2in_k$(left, right));
        break;
      case '<':
        var tmp_11;
        var tmp_12;
        if (left instanceof NumberValue) {
          tmp_12 = right instanceof NumberValue;
        } else {
          tmp_12 = false;
        }

        if (tmp_12) {
          tmp_11 = new BooleanValue(left.get_value_j01efc_k$() < right.get_value_j01efc_k$());
        } else {
          throw new RuntimeError("Invalid operands for '<'", expr.get_position_jfponi_k$());
        }

        tmp = tmp_11;
        break;
      case '>':
        var tmp_13;
        var tmp_14;
        if (left instanceof NumberValue) {
          tmp_14 = right instanceof NumberValue;
        } else {
          tmp_14 = false;
        }

        if (tmp_14) {
          tmp_13 = new BooleanValue(left.get_value_j01efc_k$() > right.get_value_j01efc_k$());
        } else {
          throw new RuntimeError("Invalid operands for '>'", expr.get_position_jfponi_k$());
        }

        tmp = tmp_13;
        break;
      case '<=':
        var tmp_15;
        var tmp_16;
        if (left instanceof NumberValue) {
          tmp_16 = right instanceof NumberValue;
        } else {
          tmp_16 = false;
        }

        if (tmp_16) {
          tmp_15 = new BooleanValue(left.get_value_j01efc_k$() <= right.get_value_j01efc_k$());
        } else {
          throw new RuntimeError("Invalid operands for '<='", expr.get_position_jfponi_k$());
        }

        tmp = tmp_15;
        break;
      case '>=':
        var tmp_17;
        var tmp_18;
        if (left instanceof NumberValue) {
          tmp_18 = right instanceof NumberValue;
        } else {
          tmp_18 = false;
        }

        if (tmp_18) {
          tmp_17 = new BooleanValue(left.get_value_j01efc_k$() >= right.get_value_j01efc_k$());
        } else {
          throw new RuntimeError("Invalid operands for '>='", expr.get_position_jfponi_k$());
        }

        tmp = tmp_17;
        break;
      case '&&':
        tmp = new BooleanValue(ValueUtils_getInstance().isTruthy_uoutaf_k$(left) ? ValueUtils_getInstance().isTruthy_uoutaf_k$(right) : false);
        break;
      case '||':
        tmp = new BooleanValue(ValueUtils_getInstance().isTruthy_uoutaf_k$(left) ? true : ValueUtils_getInstance().isTruthy_uoutaf_k$(right));
        break;
      default:
        throw new RuntimeError("Unknown binary operator '" + expr.get_operator_uy5ppp_k$() + "'", expr.get_position_jfponi_k$());
    }
    return tmp;
  }
  function evaluateUnaryExpression($this, expr) {
    var operand = evaluateExpression($this, expr.get_operand_jmg3ds_k$());
    var tmp;
    switch (expr.get_operator_uy5ppp_k$()) {
      case '-':
        var tmp_0;
        if (operand instanceof NumberValue) {
          tmp_0 = new NumberValue(-operand.get_value_j01efc_k$());
        } else {
          throw new RuntimeError("Invalid operand for unary '-'", expr.get_position_jfponi_k$());
        }

        tmp = tmp_0;
        break;
      case '+':
        var tmp_1;
        if (operand instanceof NumberValue) {
          tmp_1 = operand;
        } else {
          throw new RuntimeError("Invalid operand for unary '+'", expr.get_position_jfponi_k$());
        }

        tmp = tmp_1;
        break;
      case '!':
        tmp = new BooleanValue(!ValueUtils_getInstance().isTruthy_uoutaf_k$(operand));
        break;
      default:
        throw new RuntimeError("Unknown unary operator '" + expr.get_operator_uy5ppp_k$() + "'", expr.get_position_jfponi_k$());
    }
    return tmp;
  }
  function evaluatePostfixExpression($this, expr) {
    var operand = expr.get_operand_jmg3ds_k$();
    if (operand instanceof Identifier) {
      var tmp0_elvis_lhs = $this.currentScope_1.getVariable_jacbig_k$(operand.get_name_woqyms_k$());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw new RuntimeError("Undefined variable '" + operand.get_name_woqyms_k$() + "'", expr.get_position_jfponi_k$());
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      if (current instanceof NumberValue) {
        var tmp_0;
        switch (expr.get_operator_uy5ppp_k$()) {
          case '++':
            tmp_0 = new NumberValue(current.get_value_j01efc_k$() + 1);
            break;
          case '--':
            tmp_0 = new NumberValue(current.get_value_j01efc_k$() - 1);
            break;
          default:
            throw new RuntimeError("Unknown postfix operator '" + expr.get_operator_uy5ppp_k$() + "'", expr.get_position_jfponi_k$());
        }
        var newValue = tmp_0;
        $this.currentScope_1.setVariable_j9b8zn_k$(operand.get_name_woqyms_k$(), newValue);
        return current;
      } else {
        throw new RuntimeError('Postfix operators only work on numbers', expr.get_position_jfponi_k$());
      }
    } else {
      throw new RuntimeError('Postfix operators only work on variables', expr.get_position_jfponi_k$());
    }
  }
  function callFunction($this, func, args, position) {
    if (!(args.get_size_woubt6_k$() === func.get_parameters_cl4rkd_k$().get_size_woubt6_k$())) {
      throw new RuntimeError('Expected ' + func.get_parameters_cl4rkd_k$().get_size_woubt6_k$() + ' arguments, got ' + args.get_size_woubt6_k$(), position);
    }
    var funcScope = new Scope($this.currentScope_1);
    var prevScope = $this.currentScope_1;
    $this.currentScope_1 = funcScope;
    var tmp;
    try {
      var inductionVariable = 0;
      var last = func.get_parameters_cl4rkd_k$().get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          $this.currentScope_1.defineVariable_uunah8_k$(func.get_parameters_cl4rkd_k$().get_c1px32_k$(i), args.get_c1px32_k$(i));
        }
         while (inductionVariable <= last);
      tmp = executeBlock($this, func.get_body_wojkyz_k$());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ReturnException) {
        var e = $p;
        tmp_0 = e.value_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    finally {
      $this.currentScope_1 = prevScope;
    }
    return tmp;
  }
  function callArrayMethod($this, array, method, args, position) {
    var tmp;
    switch (method) {
      case 'add':
        var tmp_0;
        if (args.get_size_woubt6_k$() === 1) {
          array.add_kdya1u_k$(args.get_c1px32_k$(0));
          tmp_0 = NullValue_getInstance();
        } else {
          throw new RuntimeError('add() expects 1 argument', position);
        }

        tmp = tmp_0;
        break;
      case 'remove':
        var tmp_1;
        if (args.get_size_woubt6_k$() === 1) {
          tmp_1 = new BooleanValue(array.remove_s5muf9_k$(args.get_c1px32_k$(0)));
        } else {
          throw new RuntimeError('remove() expects 1 argument', position);
        }

        tmp = tmp_1;
        break;
      case 'removeAt':
        var tmp_2;
        var tmp_3;
        if (args.get_size_woubt6_k$() === 1) {
          var tmp_4 = args.get_c1px32_k$(0);
          tmp_3 = tmp_4 instanceof NumberValue;
        } else {
          tmp_3 = false;
        }

        if (tmp_3) {
          var tmp_5 = args.get_c1px32_k$(0);
          var tmp1_elvis_lhs = array.removeAt_6niowx_k$((tmp_5 instanceof NumberValue ? tmp_5 : THROW_CCE()).toInt_1tsl84_k$());
          tmp_2 = tmp1_elvis_lhs == null ? NullValue_getInstance() : tmp1_elvis_lhs;
        } else {
          throw new RuntimeError('removeAt() expects 1 number argument', position);
        }

        tmp = tmp_2;
        break;
      case 'contains':
        var tmp_6;
        if (args.get_size_woubt6_k$() === 1) {
          tmp_6 = new BooleanValue(array.contains_h1qgm8_k$(args.get_c1px32_k$(0)));
        } else {
          throw new RuntimeError('contains() expects 1 argument', position);
        }

        tmp = tmp_6;
        break;
      default:
        throw new RuntimeError("Unknown array method '" + method + "'", position);
    }
    return tmp;
  }
  function callStringMethod($this, string, method, args, position) {
    var tmp;
    switch (method) {
      case 'length':
        tmp = NumberValue_init_$Create$(string.get_value_j01efc_k$().length);
        break;
      case 'toUpperCase':
        // Inline function 'kotlin.text.uppercase' call

        // Inline function 'kotlin.js.asDynamic' call

        var tmp$ret$1 = string.get_value_j01efc_k$().toUpperCase();
        tmp = new StringValue(tmp$ret$1);
        break;
      case 'toLowerCase':
        // Inline function 'kotlin.text.lowercase' call

        // Inline function 'kotlin.js.asDynamic' call

        var tmp$ret$3 = string.get_value_j01efc_k$().toLowerCase();
        tmp = new StringValue(tmp$ret$3);
        break;
      default:
        throw new RuntimeError("Unknown string method '" + method + "'", position);
    }
    return tmp;
  }
  function evaluateInterpolatedString($this, expr) {
    var result = StringBuilder_init_$Create$();
    var tmp0_iterator = expr.get_parts_iwqrav_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var part = tmp0_iterator.next_20eer_k$();
      if (part instanceof Text) {
        result.append_22ad7x_k$(part.get_value_j01efc_k$());
      } else {
        if (part instanceof Expression_0) {
          var value = evaluateExpression($this, part.get_expr_wolovy_k$());
          var tmp;
          if (value instanceof StringValue) {
            tmp = value.get_value_j01efc_k$();
          } else {
            if (value instanceof NumberValue) {
              var tmp_0;
              if (value.get_value_j01efc_k$() === numberToInt(value.get_value_j01efc_k$())) {
                tmp_0 = numberToInt(value.get_value_j01efc_k$()).toString();
              } else {
                tmp_0 = value.get_value_j01efc_k$().toString();
              }
              tmp = tmp_0;
            } else {
              if (value instanceof BooleanValue) {
                tmp = value.get_value_j01efc_k$().toString();
              } else {
                if (value instanceof NullValue) {
                  tmp = 'null';
                } else {
                  tmp = value.toString();
                }
              }
            }
          }
          var str = tmp;
          result.append_22ad7x_k$(str);
        }
      }
    }
    return new StringValue(result.toString());
  }
  function callDataClassConstructor($this, dataClass, args, position) {
    if (!(args.get_size_woubt6_k$() === dataClass.get_fields_dbuqbm_k$().get_size_woubt6_k$())) {
      throw new RuntimeError('Expected ' + dataClass.get_fields_dbuqbm_k$().get_size_woubt6_k$() + ' arguments for ' + dataClass.get_name_woqyms_k$() + ' constructor, got ' + args.get_size_woubt6_k$(), position);
    }
    // Inline function 'kotlin.collections.mutableMapOf' call
    var fields = LinkedHashMap_init_$Create$();
    var inductionVariable = 0;
    var last = dataClass.get_fields_dbuqbm_k$().get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = dataClass.get_fields_dbuqbm_k$().get_c1px32_k$(i);
        var value = args.get_c1px32_k$(i);
        fields.put_4fpzoq_k$(key, value);
      }
       while (inductionVariable <= last);
    return new ObjectValue(dataClass.get_name_woqyms_k$(), fields);
  }
  function Interpreter(nativeFunctions) {
    nativeFunctions = nativeFunctions === VOID ? new NativeFunctionRegistry() : nativeFunctions;
    this.nativeFunctions_1 = nativeFunctions;
    this.currentScope_1 = new Scope();
    this.nativeFunctions_1.registerBuiltins_bwbecd_k$();
  }
  protoOf(Interpreter).execute_tsbz7e_k$ = function (program) {
    var lastValue = NullValue_getInstance();
    var tmp0_iterator = program.get_statements_nqb5hv_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var statement = tmp0_iterator.next_20eer_k$();
      if (statement instanceof FunctionDeclaration) {
        this.currentScope_1.defineFunction_f94t9l_k$(statement.get_name_woqyms_k$(), statement);
      } else {
        if (statement instanceof DataClassDeclaration) {
          this.currentScope_1.defineDataClass_80lxnd_k$(statement.get_name_woqyms_k$(), statement);
        } else {
          var tmp;
          var tmp_0;
          var tmp_1;
          var tmp_2;
          var tmp_3;
          var tmp_4;
          var tmp_5;
          var tmp_6;
          var tmp_7;
          if (statement instanceof VarDeclaration) {
            tmp_7 = true;
          } else {
            tmp_7 = statement instanceof Assignment;
          }
          if (tmp_7) {
            tmp_6 = true;
          } else {
            tmp_6 = statement instanceof ExpressionStatement;
          }
          if (tmp_6) {
            tmp_5 = true;
          } else {
            tmp_5 = statement instanceof IfStatement;
          }
          if (tmp_5) {
            tmp_4 = true;
          } else {
            tmp_4 = statement instanceof WhileStatement;
          }
          if (tmp_4) {
            tmp_3 = true;
          } else {
            tmp_3 = statement instanceof ForStatement;
          }
          if (tmp_3) {
            tmp_2 = true;
          } else {
            tmp_2 = statement instanceof ForInStatement;
          }
          if (tmp_2) {
            tmp_1 = true;
          } else {
            tmp_1 = statement instanceof BreakStatement;
          }
          if (tmp_1) {
            tmp_0 = true;
          } else {
            tmp_0 = statement instanceof ContinueStatement;
          }
          if (tmp_0) {
            tmp = true;
          } else {
            tmp = statement instanceof ReturnStatement;
          }
          if (!tmp) {
            throw new RuntimeError('Unknown statement type in first pass', statement.get_position_jfponi_k$());
          }
        }
      }
    }
    var tmp2_iterator = program.get_statements_nqb5hv_k$().iterator_jk1svi_k$();
    while (tmp2_iterator.hasNext_bitz1p_k$()) {
      var statement_0 = tmp2_iterator.next_20eer_k$();
      var tmp_8;
      if (statement_0 instanceof FunctionDeclaration) {
        tmp_8 = true;
      } else {
        tmp_8 = statement_0 instanceof DataClassDeclaration;
      }
      if (!tmp_8) {
        var tmp_9;
        var tmp_10;
        var tmp_11;
        var tmp_12;
        var tmp_13;
        var tmp_14;
        var tmp_15;
        var tmp_16;
        var tmp_17;
        if (statement_0 instanceof VarDeclaration) {
          tmp_17 = true;
        } else {
          tmp_17 = statement_0 instanceof Assignment;
        }
        if (tmp_17) {
          tmp_16 = true;
        } else {
          tmp_16 = statement_0 instanceof ExpressionStatement;
        }
        if (tmp_16) {
          tmp_15 = true;
        } else {
          tmp_15 = statement_0 instanceof IfStatement;
        }
        if (tmp_15) {
          tmp_14 = true;
        } else {
          tmp_14 = statement_0 instanceof WhileStatement;
        }
        if (tmp_14) {
          tmp_13 = true;
        } else {
          tmp_13 = statement_0 instanceof ForStatement;
        }
        if (tmp_13) {
          tmp_12 = true;
        } else {
          tmp_12 = statement_0 instanceof ForInStatement;
        }
        if (tmp_12) {
          tmp_11 = true;
        } else {
          tmp_11 = statement_0 instanceof BreakStatement;
        }
        if (tmp_11) {
          tmp_10 = true;
        } else {
          tmp_10 = statement_0 instanceof ContinueStatement;
        }
        if (tmp_10) {
          tmp_9 = true;
        } else {
          tmp_9 = statement_0 instanceof ReturnStatement;
        }
        if (tmp_9)
          lastValue = executeStatement(this, statement_0);
        else {
          throw new RuntimeError('Unknown statement type', statement_0.get_position_jfponi_k$());
        }
      }
    }
    return lastValue;
  };
  protoOf(Interpreter).getNativeFunctions_h3elte_k$ = function () {
    return this.nativeFunctions_1;
  };
  function _get_parent__oo9xup($this) {
    return $this.parent_1;
  }
  function _get_variables__748mgq($this) {
    return $this.variables_1;
  }
  function _get_functions__mnzx7u($this) {
    return $this.functions_1;
  }
  function _get_dataClasses__a9sm4r($this) {
    return $this.dataClasses_1;
  }
  function Scope(parent) {
    parent = parent === VOID ? null : parent;
    this.parent_1 = parent;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.variables_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.functions_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.dataClasses_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Scope).defineVariable_uunah8_k$ = function (name, value) {
    // Inline function 'kotlin.collections.set' call
    this.variables_1.put_4fpzoq_k$(name, value);
  };
  protoOf(Scope).getVariable_jacbig_k$ = function (name) {
    var tmp1_elvis_lhs = this.variables_1.get_wei43m_k$(name);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = this.parent_1;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getVariable_jacbig_k$(name);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Scope).setVariable_j9b8zn_k$ = function (name, value) {
    if (this.variables_1.containsKey_aw81wo_k$(name)) {
      // Inline function 'kotlin.collections.set' call
      this.variables_1.put_4fpzoq_k$(name, value);
      return true;
    }
    var tmp0_safe_receiver = this.parent_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.setVariable_j9b8zn_k$(name, value);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(Scope).defineFunction_f94t9l_k$ = function (name, function_0) {
    // Inline function 'kotlin.collections.set' call
    this.functions_1.put_4fpzoq_k$(name, function_0);
  };
  protoOf(Scope).getFunction_m9x40k_k$ = function (name) {
    var tmp1_elvis_lhs = this.functions_1.get_wei43m_k$(name);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = this.parent_1;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getFunction_m9x40k_k$(name);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Scope).defineDataClass_80lxnd_k$ = function (name, dataClass) {
    // Inline function 'kotlin.collections.set' call
    this.dataClasses_1.put_4fpzoq_k$(name, dataClass);
  };
  protoOf(Scope).getDataClass_50e5ku_k$ = function (name) {
    var tmp1_elvis_lhs = this.dataClasses_1.get_wei43m_k$(name);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = this.parent_1;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getDataClass_50e5ku_k$(name);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  function ContinueException() {
    Exception_init_$Init$_0(this);
    captureStack(this, ContinueException);
  }
  function BreakException() {
    Exception_init_$Init$_0(this);
    captureStack(this, BreakException);
  }
  function ReturnException(value) {
    Exception_init_$Init$_0(this);
    captureStack(this, ReturnException);
    this.value_1 = value;
  }
  protoOf(ReturnException).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function _get_KEYWORDS__gcp0gv($this) {
    return $this.KEYWORDS_1;
  }
  function _get_input__g2gq7t($this) {
    return $this.input_1;
  }
  function _set_current__qj3kk($this, _set____db54di) {
    $this.current_1 = _set____db54di;
  }
  function _get_current__qcrdxk($this) {
    return $this.current_1;
  }
  function _set_line__9q1omb($this, _set____db54di) {
    $this.line_1 = _set____db54di;
  }
  function _get_line__d9to7r($this) {
    return $this.line_1;
  }
  function _set_column__izs2v3($this, _set____db54di) {
    $this.column_1 = _set____db54di;
  }
  function _get_column__hj1i8b($this) {
    return $this.column_1;
  }
  function nextToken($this) {
    var start = $this.current_1;
    var startPos = positionFromIndex($this, start);
    var c = advance($this);
    var tmp;
    if (c === _Char___init__impl__6a9atx(40)) {
      tmp = new Token(TokenType_LEFT_PAREN_getInstance(), '(', startPos);
    } else if (c === _Char___init__impl__6a9atx(41)) {
      tmp = new Token(TokenType_RIGHT_PAREN_getInstance(), ')', startPos);
    } else if (c === _Char___init__impl__6a9atx(123)) {
      tmp = new Token(TokenType_LEFT_BRACE_getInstance(), '{', startPos);
    } else if (c === _Char___init__impl__6a9atx(125)) {
      tmp = new Token(TokenType_RIGHT_BRACE_getInstance(), '}', startPos);
    } else if (c === _Char___init__impl__6a9atx(91)) {
      tmp = new Token(TokenType_LEFT_BRACKET_getInstance(), '[', startPos);
    } else if (c === _Char___init__impl__6a9atx(93)) {
      tmp = new Token(TokenType_RIGHT_BRACKET_getInstance(), ']', startPos);
    } else if (c === _Char___init__impl__6a9atx(44)) {
      tmp = new Token(TokenType_COMMA_getInstance(), ',', startPos);
    } else if (c === _Char___init__impl__6a9atx(46)) {
      tmp = new Token(TokenType_DOT_getInstance(), '.', startPos);
    } else if (c === _Char___init__impl__6a9atx(59)) {
      tmp = new Token(TokenType_SEMICOLON_getInstance(), ';', startPos);
    } else if (c === _Char___init__impl__6a9atx(43)) {
      var tmp_0;
      if (match($this, _Char___init__impl__6a9atx(43))) {
        tmp_0 = new Token(TokenType_INCREMENT_getInstance(), '++', startPos);
      } else {
        tmp_0 = new Token(TokenType_PLUS_getInstance(), '+', startPos);
      }
      tmp = tmp_0;
    } else if (c === _Char___init__impl__6a9atx(45)) {
      var tmp_1;
      if (match($this, _Char___init__impl__6a9atx(45))) {
        tmp_1 = new Token(TokenType_DECREMENT_getInstance(), '--', startPos);
      } else {
        tmp_1 = new Token(TokenType_MINUS_getInstance(), '-', startPos);
      }
      tmp = tmp_1;
    } else if (c === _Char___init__impl__6a9atx(42)) {
      tmp = new Token(TokenType_MULTIPLY_getInstance(), '*', startPos);
    } else if (c === _Char___init__impl__6a9atx(47)) {
      var tmp_2;
      if (match($this, _Char___init__impl__6a9atx(47))) {
        while (!(peek($this) === _Char___init__impl__6a9atx(10)) ? !isAtEnd($this) : false) {
          advance($this);
        }
        return nextToken($this);
      } else if (match($this, _Char___init__impl__6a9atx(42))) {
        while (!isAtEnd($this)) {
          if (peek($this) === _Char___init__impl__6a9atx(42) ? peekNext($this) === _Char___init__impl__6a9atx(47) : false) {
            advance($this);
            advance($this);
            return nextToken($this);
          }
          advance($this);
        }
        throw new LexError('Unterminated block comment - missing */', startPos);
      } else {
        tmp_2 = new Token(TokenType_DIVIDE_getInstance(), '/', startPos);
      }
      tmp = tmp_2;
    } else if (c === _Char___init__impl__6a9atx(61)) {
      var tmp_3;
      if (match($this, _Char___init__impl__6a9atx(61))) {
        tmp_3 = new Token(TokenType_EQUALS_getInstance(), '==', startPos);
      } else {
        tmp_3 = new Token(TokenType_ASSIGN_getInstance(), '=', startPos);
      }
      tmp = tmp_3;
    } else if (c === _Char___init__impl__6a9atx(33)) {
      var tmp_4;
      if (match($this, _Char___init__impl__6a9atx(61))) {
        tmp_4 = new Token(TokenType_NOT_EQUALS_getInstance(), '!=', startPos);
      } else {
        tmp_4 = new Token(TokenType_NOT_getInstance(), '!', startPos);
      }
      tmp = tmp_4;
    } else if (c === _Char___init__impl__6a9atx(60)) {
      var tmp_5;
      if (match($this, _Char___init__impl__6a9atx(61))) {
        tmp_5 = new Token(TokenType_LESS_EQUAL_getInstance(), '<=', startPos);
      } else {
        tmp_5 = new Token(TokenType_LESS_getInstance(), '<', startPos);
      }
      tmp = tmp_5;
    } else if (c === _Char___init__impl__6a9atx(62)) {
      var tmp_6;
      if (match($this, _Char___init__impl__6a9atx(61))) {
        tmp_6 = new Token(TokenType_GREATER_EQUAL_getInstance(), '>=', startPos);
      } else {
        tmp_6 = new Token(TokenType_GREATER_getInstance(), '>', startPos);
      }
      tmp = tmp_6;
    } else if (c === _Char___init__impl__6a9atx(38)) {
      var tmp_7;
      if (match($this, _Char___init__impl__6a9atx(38))) {
        tmp_7 = new Token(TokenType_AND_getInstance(), '&&', startPos);
      } else {
        throw new LexError("Unexpected character '&' - did you mean '&&'?", startPos);
      }
      tmp = tmp_7;
    } else if (c === _Char___init__impl__6a9atx(124)) {
      var tmp_8;
      if (match($this, _Char___init__impl__6a9atx(124))) {
        tmp_8 = new Token(TokenType_OR_getInstance(), '||', startPos);
      } else {
        throw new LexError("Unexpected character '|' - did you mean '||'?", startPos);
      }
      tmp = tmp_8;
    } else if (c === _Char___init__impl__6a9atx(10)) {
      tmp = new Token(TokenType_NEWLINE_getInstance(), '\n', startPos);
    } else if (c === _Char___init__impl__6a9atx(34)) {
      tmp = string($this, startPos);
    } else {
      var tmp_9;
      if (isDigit(c)) {
        tmp_9 = number($this, start, startPos);
      } else if (isLetter(c) ? true : c === _Char___init__impl__6a9atx(95)) {
        tmp_9 = identifier($this, start, startPos);
      } else {
        throw new LexError("Unexpected character '" + toString(c) + "'", startPos);
      }
      tmp = tmp_9;
    }
    return tmp;
  }
  function string($this, startPos) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var parts = ArrayList_init_$Create$_0();
    var hasInterpolation = scanStringForInterpolation($this, parts);
    if (hasInterpolation) {
      return new Token(TokenType_INTERPOLATED_STRING_getInstance(), joinToString(parts, '\x01'), startPos);
    } else {
      var tmp = TokenType_STRING_getInstance();
      var tmp0_elvis_lhs = firstOrNull(parts);
      return new Token(tmp, tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, startPos);
    }
  }
  function scanStringForInterpolation($this, parts) {
    var currentPart = StringBuilder_init_$Create$();
    var hasInterpolation = false;
    while (!(peek($this) === _Char___init__impl__6a9atx(34)) ? !isAtEnd($this) : false) {
      if (peek($this) === _Char___init__impl__6a9atx(92)) {
        advance($this);
        if (isAtEnd($this)) {
          throw new LexError('Unterminated string literal - missing closing quote', currentPosition($this));
        }
        var escaped = advance($this);
        if (escaped === _Char___init__impl__6a9atx(110)) {
          currentPart.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        } else if (escaped === _Char___init__impl__6a9atx(116)) {
          currentPart.append_am5a4z_k$(_Char___init__impl__6a9atx(9));
        } else if (escaped === _Char___init__impl__6a9atx(114)) {
          currentPart.append_am5a4z_k$(_Char___init__impl__6a9atx(13));
        } else if (escaped === _Char___init__impl__6a9atx(92)) {
          currentPart.append_am5a4z_k$(_Char___init__impl__6a9atx(92));
        } else if (escaped === _Char___init__impl__6a9atx(34)) {
          currentPart.append_am5a4z_k$(_Char___init__impl__6a9atx(34));
        } else if (escaped === _Char___init__impl__6a9atx(36)) {
          currentPart.append_am5a4z_k$(_Char___init__impl__6a9atx(36));
        } else {
          currentPart.append_am5a4z_k$(_Char___init__impl__6a9atx(92));
          currentPart.append_am5a4z_k$(escaped);
        }
      } else if (peek($this) === _Char___init__impl__6a9atx(36)) {
        if (peekNext($this) === _Char___init__impl__6a9atx(123)) {
          hasInterpolation = true;
          // Inline function 'kotlin.text.isNotEmpty' call
          if (charSequenceLength(currentPart) > 0) {
            parts.add_utx5q5_k$('TEXT:' + currentPart);
            currentPart.clear_1keqml_k$();
          }
          advance($this);
          advance($this);
          var exprStart = $this.current_1;
          var braceCount = 1;
          while (braceCount > 0 ? !isAtEnd($this) : false) {
            var tmp0_subject = peek($this);
            if (tmp0_subject === _Char___init__impl__6a9atx(123)) {
              braceCount = braceCount + 1 | 0;
            } else if (tmp0_subject === _Char___init__impl__6a9atx(125)) {
              braceCount = braceCount - 1 | 0;
            }
            advance($this);
          }
          if (braceCount > 0) {
            throw new LexError('Unterminated string interpolation - missing }', currentPosition($this));
          }
          // Inline function 'kotlin.text.substring' call
          var this_0 = $this.input_1;
          var endIndex = $this.current_1 - 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          var exprText = this_0.substring(exprStart, endIndex);
          parts.add_utx5q5_k$('EXPR:' + exprText);
        } else if (isLetter(peekNext($this)) ? true : peekNext($this) === _Char___init__impl__6a9atx(95)) {
          hasInterpolation = true;
          // Inline function 'kotlin.text.isNotEmpty' call
          if (charSequenceLength(currentPart) > 0) {
            parts.add_utx5q5_k$('TEXT:' + currentPart);
            currentPart.clear_1keqml_k$();
          }
          advance($this);
          var identStart = $this.current_1;
          while (isLetterOrDigit(peek($this)) ? true : peek($this) === _Char___init__impl__6a9atx(95)) {
            advance($this);
          }
          // Inline function 'kotlin.text.substring' call
          var this_1 = $this.input_1;
          var endIndex_0 = $this.current_1;
          // Inline function 'kotlin.js.asDynamic' call
          var identifier = this_1.substring(identStart, endIndex_0);
          // Inline function 'kotlin.text.isEmpty' call
          if (charSequenceLength(identifier) === 0) {
            throw new LexError('Invalid interpolation - expected identifier after $', currentPosition($this));
          }
          parts.add_utx5q5_k$('EXPR:' + identifier);
        } else {
          currentPart.append_am5a4z_k$(advance($this));
        }
      } else {
        currentPart.append_am5a4z_k$(advance($this));
      }
    }
    if (isAtEnd($this)) {
      throw new LexError('Unterminated string literal - missing closing quote', currentPosition($this));
    }
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(currentPart) > 0) {
      parts.add_utx5q5_k$('TEXT:' + currentPart);
    }
    advance($this);
    if (!hasInterpolation) {
      if (parts.isEmpty_y1axqb_k$()) {
        parts.add_utx5q5_k$('');
      } else {
        var singlePart = first(parts);
        if (startsWith(singlePart, 'TEXT:')) {
          // Inline function 'kotlin.text.substring' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$9 = singlePart.substring(5);
          parts.set_82063s_k$(0, tmp$ret$9);
        }
      }
    }
    return hasInterpolation;
  }
  function number($this, start, startPos) {
    while (isDigit(peek($this))) {
      advance($this);
    }
    if (peek($this) === _Char___init__impl__6a9atx(46) ? isDigit(peekNext($this)) : false) {
      advance($this);
      while (isDigit(peek($this))) {
        advance($this);
      }
    }
    // Inline function 'kotlin.text.substring' call
    var this_0 = $this.input_1;
    var endIndex = $this.current_1;
    // Inline function 'kotlin.js.asDynamic' call
    var text = this_0.substring(start, endIndex);
    return new Token(TokenType_NUMBER_getInstance(), text, startPos);
  }
  function identifier($this, start, startPos) {
    while (isLetterOrDigit(peek($this)) ? true : peek($this) === _Char___init__impl__6a9atx(95)) {
      advance($this);
    }
    // Inline function 'kotlin.text.substring' call
    var this_0 = $this.input_1;
    var endIndex = $this.current_1;
    // Inline function 'kotlin.js.asDynamic' call
    var text = this_0.substring(start, endIndex);
    var tmp0_elvis_lhs = Companion_getInstance_0().KEYWORDS_1.get_wei43m_k$(text);
    var type = tmp0_elvis_lhs == null ? TokenType_IDENTIFIER_getInstance() : tmp0_elvis_lhs;
    return new Token(type, text, startPos);
  }
  function skipWhitespace($this) {
    $l$loop: while (!isAtEnd($this)) {
      var tmp0_subject = peek($this);
      if (tmp0_subject === _Char___init__impl__6a9atx(32) ? true : tmp0_subject === _Char___init__impl__6a9atx(9)) {
        advance($this);
      } else if (tmp0_subject === _Char___init__impl__6a9atx(13)) {
        advance($this);
        if (peek($this) === _Char___init__impl__6a9atx(10)) {
          advance($this);
          $this.line_1 = $this.line_1 + 1 | 0;
          $this.column_1 = 1;
        }
      } else
        break $l$loop;
    }
  }
  function advance($this) {
    if (isAtEnd($this))
      return _Char___init__impl__6a9atx(0);
    var tmp1 = $this.current_1;
    $this.current_1 = tmp1 + 1 | 0;
    var c = charSequenceGet($this.input_1, tmp1);
    if (c === _Char___init__impl__6a9atx(10)) {
      $this.line_1 = $this.line_1 + 1 | 0;
      $this.column_1 = 1;
    } else {
      $this.column_1 = $this.column_1 + 1 | 0;
    }
    return c;
  }
  function match($this, expected) {
    if (isAtEnd($this) ? true : !(charSequenceGet($this.input_1, $this.current_1) === expected))
      return false;
    $this.current_1 = $this.current_1 + 1 | 0;
    $this.column_1 = $this.column_1 + 1 | 0;
    return true;
  }
  function peek($this) {
    if (isAtEnd($this))
      return _Char___init__impl__6a9atx(0);
    return charSequenceGet($this.input_1, $this.current_1);
  }
  function peekNext($this) {
    if (($this.current_1 + 1 | 0) >= $this.input_1.length)
      return _Char___init__impl__6a9atx(0);
    return charSequenceGet($this.input_1, $this.current_1 + 1 | 0);
  }
  function isAtEnd($this) {
    return $this.current_1 >= $this.input_1.length;
  }
  function currentPosition($this) {
    return new Position($this.line_1, $this.column_1);
  }
  function positionFromIndex($this, index) {
    // Inline function 'kotlin.text.count' call
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var count = 0;
    var indexedObject = $this.input_1.substring(0, index);
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(indexedObject)) {
      var element = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'at.crowdware.sms.lexer.Lexer.positionFromIndex.<anonymous>' call
      if (element === _Char___init__impl__6a9atx(10)) {
        count = count + 1 | 0;
      }
    }
    var actualLine = count + 1 | 0;
    var lineStart = actualLine === 1 ? 0 : lastIndexOf($this.input_1, _Char___init__impl__6a9atx(10), index - 1 | 0) + 1 | 0;
    var actualColumn = (index - lineStart | 0) + 1 | 0;
    return new Position(actualLine, actualColumn);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.KEYWORDS_1 = mapOf([to('fun', TokenType_FUN_getInstance()), to('var', TokenType_VAR_getInstance()), to('if', TokenType_IF_getInstance()), to('else', TokenType_ELSE_getInstance()), to('while', TokenType_WHILE_getInstance()), to('for', TokenType_FOR_getInstance()), to('in', TokenType_IN_getInstance()), to('break', TokenType_BREAK_getInstance()), to('continue', TokenType_CONTINUE_getInstance()), to('return', TokenType_RETURN_getInstance()), to('true', TokenType_BOOLEAN_getInstance()), to('false', TokenType_BOOLEAN_getInstance()), to('null', TokenType_NULL_getInstance()), to('data', TokenType_DATA_getInstance()), to('class', TokenType_CLASS_getInstance())]);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Lexer(input) {
    Companion_getInstance_0();
    this.input_1 = input;
    this.current_1 = 0;
    this.line_1 = 1;
    this.column_1 = 1;
  }
  protoOf(Lexer).tokenize_i964w5_k$ = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokens = ArrayList_init_$Create$_0();
    $l$loop: while (!isAtEnd(this)) {
      skipWhitespace(this);
      if (isAtEnd(this))
        break $l$loop;
      var token = nextToken(this);
      tokens.add_utx5q5_k$(token);
    }
    tokens.add_utx5q5_k$(new Token(TokenType_EOF_getInstance(), '', currentPosition(this)));
    return tokens;
  };
  function get_KEYWORDS() {
    _init_properties_Token_kt__y4xssn();
    return KEYWORDS;
  }
  var KEYWORDS;
  var TokenType_NUMBER_instance;
  var TokenType_STRING_instance;
  var TokenType_INTERPOLATED_STRING_instance;
  var TokenType_BOOLEAN_instance;
  var TokenType_NULL_instance;
  var TokenType_IDENTIFIER_instance;
  var TokenType_VAR_instance;
  var TokenType_FUN_instance;
  var TokenType_IF_instance;
  var TokenType_ELSE_instance;
  var TokenType_WHILE_instance;
  var TokenType_FOR_instance;
  var TokenType_IN_instance;
  var TokenType_BREAK_instance;
  var TokenType_CONTINUE_instance;
  var TokenType_RETURN_instance;
  var TokenType_DATA_instance;
  var TokenType_CLASS_instance;
  var TokenType_PLUS_instance;
  var TokenType_MINUS_instance;
  var TokenType_MULTIPLY_instance;
  var TokenType_DIVIDE_instance;
  var TokenType_ASSIGN_instance;
  var TokenType_EQUALS_instance;
  var TokenType_NOT_EQUALS_instance;
  var TokenType_LESS_instance;
  var TokenType_LESS_EQUAL_instance;
  var TokenType_GREATER_instance;
  var TokenType_GREATER_EQUAL_instance;
  var TokenType_NOT_instance;
  var TokenType_AND_instance;
  var TokenType_OR_instance;
  var TokenType_INCREMENT_instance;
  var TokenType_DECREMENT_instance;
  var TokenType_LEFT_PAREN_instance;
  var TokenType_RIGHT_PAREN_instance;
  var TokenType_LEFT_BRACE_instance;
  var TokenType_RIGHT_BRACE_instance;
  var TokenType_LEFT_BRACKET_instance;
  var TokenType_RIGHT_BRACKET_instance;
  var TokenType_COMMA_instance;
  var TokenType_DOT_instance;
  var TokenType_SEMICOLON_instance;
  var TokenType_NEWLINE_instance;
  var TokenType_EOF_instance;
  var TokenType_UNKNOWN_instance;
  function values() {
    return [TokenType_NUMBER_getInstance(), TokenType_STRING_getInstance(), TokenType_INTERPOLATED_STRING_getInstance(), TokenType_BOOLEAN_getInstance(), TokenType_NULL_getInstance(), TokenType_IDENTIFIER_getInstance(), TokenType_VAR_getInstance(), TokenType_FUN_getInstance(), TokenType_IF_getInstance(), TokenType_ELSE_getInstance(), TokenType_WHILE_getInstance(), TokenType_FOR_getInstance(), TokenType_IN_getInstance(), TokenType_BREAK_getInstance(), TokenType_CONTINUE_getInstance(), TokenType_RETURN_getInstance(), TokenType_DATA_getInstance(), TokenType_CLASS_getInstance(), TokenType_PLUS_getInstance(), TokenType_MINUS_getInstance(), TokenType_MULTIPLY_getInstance(), TokenType_DIVIDE_getInstance(), TokenType_ASSIGN_getInstance(), TokenType_EQUALS_getInstance(), TokenType_NOT_EQUALS_getInstance(), TokenType_LESS_getInstance(), TokenType_LESS_EQUAL_getInstance(), TokenType_GREATER_getInstance(), TokenType_GREATER_EQUAL_getInstance(), TokenType_NOT_getInstance(), TokenType_AND_getInstance(), TokenType_OR_getInstance(), TokenType_INCREMENT_getInstance(), TokenType_DECREMENT_getInstance(), TokenType_LEFT_PAREN_getInstance(), TokenType_RIGHT_PAREN_getInstance(), TokenType_LEFT_BRACE_getInstance(), TokenType_RIGHT_BRACE_getInstance(), TokenType_LEFT_BRACKET_getInstance(), TokenType_RIGHT_BRACKET_getInstance(), TokenType_COMMA_getInstance(), TokenType_DOT_getInstance(), TokenType_SEMICOLON_getInstance(), TokenType_NEWLINE_getInstance(), TokenType_EOF_getInstance(), TokenType_UNKNOWN_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'NUMBER':
        return TokenType_NUMBER_getInstance();
      case 'STRING':
        return TokenType_STRING_getInstance();
      case 'INTERPOLATED_STRING':
        return TokenType_INTERPOLATED_STRING_getInstance();
      case 'BOOLEAN':
        return TokenType_BOOLEAN_getInstance();
      case 'NULL':
        return TokenType_NULL_getInstance();
      case 'IDENTIFIER':
        return TokenType_IDENTIFIER_getInstance();
      case 'VAR':
        return TokenType_VAR_getInstance();
      case 'FUN':
        return TokenType_FUN_getInstance();
      case 'IF':
        return TokenType_IF_getInstance();
      case 'ELSE':
        return TokenType_ELSE_getInstance();
      case 'WHILE':
        return TokenType_WHILE_getInstance();
      case 'FOR':
        return TokenType_FOR_getInstance();
      case 'IN':
        return TokenType_IN_getInstance();
      case 'BREAK':
        return TokenType_BREAK_getInstance();
      case 'CONTINUE':
        return TokenType_CONTINUE_getInstance();
      case 'RETURN':
        return TokenType_RETURN_getInstance();
      case 'DATA':
        return TokenType_DATA_getInstance();
      case 'CLASS':
        return TokenType_CLASS_getInstance();
      case 'PLUS':
        return TokenType_PLUS_getInstance();
      case 'MINUS':
        return TokenType_MINUS_getInstance();
      case 'MULTIPLY':
        return TokenType_MULTIPLY_getInstance();
      case 'DIVIDE':
        return TokenType_DIVIDE_getInstance();
      case 'ASSIGN':
        return TokenType_ASSIGN_getInstance();
      case 'EQUALS':
        return TokenType_EQUALS_getInstance();
      case 'NOT_EQUALS':
        return TokenType_NOT_EQUALS_getInstance();
      case 'LESS':
        return TokenType_LESS_getInstance();
      case 'LESS_EQUAL':
        return TokenType_LESS_EQUAL_getInstance();
      case 'GREATER':
        return TokenType_GREATER_getInstance();
      case 'GREATER_EQUAL':
        return TokenType_GREATER_EQUAL_getInstance();
      case 'NOT':
        return TokenType_NOT_getInstance();
      case 'AND':
        return TokenType_AND_getInstance();
      case 'OR':
        return TokenType_OR_getInstance();
      case 'INCREMENT':
        return TokenType_INCREMENT_getInstance();
      case 'DECREMENT':
        return TokenType_DECREMENT_getInstance();
      case 'LEFT_PAREN':
        return TokenType_LEFT_PAREN_getInstance();
      case 'RIGHT_PAREN':
        return TokenType_RIGHT_PAREN_getInstance();
      case 'LEFT_BRACE':
        return TokenType_LEFT_BRACE_getInstance();
      case 'RIGHT_BRACE':
        return TokenType_RIGHT_BRACE_getInstance();
      case 'LEFT_BRACKET':
        return TokenType_LEFT_BRACKET_getInstance();
      case 'RIGHT_BRACKET':
        return TokenType_RIGHT_BRACKET_getInstance();
      case 'COMMA':
        return TokenType_COMMA_getInstance();
      case 'DOT':
        return TokenType_DOT_getInstance();
      case 'SEMICOLON':
        return TokenType_SEMICOLON_getInstance();
      case 'NEWLINE':
        return TokenType_NEWLINE_getInstance();
      case 'EOF':
        return TokenType_EOF_getInstance();
      case 'UNKNOWN':
        return TokenType_UNKNOWN_getInstance();
      default:
        TokenType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var TokenType_entriesInitialized;
  function TokenType_initEntries() {
    if (TokenType_entriesInitialized)
      return Unit_getInstance();
    TokenType_entriesInitialized = true;
    TokenType_NUMBER_instance = new TokenType('NUMBER', 0);
    TokenType_STRING_instance = new TokenType('STRING', 1);
    TokenType_INTERPOLATED_STRING_instance = new TokenType('INTERPOLATED_STRING', 2);
    TokenType_BOOLEAN_instance = new TokenType('BOOLEAN', 3);
    TokenType_NULL_instance = new TokenType('NULL', 4);
    TokenType_IDENTIFIER_instance = new TokenType('IDENTIFIER', 5);
    TokenType_VAR_instance = new TokenType('VAR', 6);
    TokenType_FUN_instance = new TokenType('FUN', 7);
    TokenType_IF_instance = new TokenType('IF', 8);
    TokenType_ELSE_instance = new TokenType('ELSE', 9);
    TokenType_WHILE_instance = new TokenType('WHILE', 10);
    TokenType_FOR_instance = new TokenType('FOR', 11);
    TokenType_IN_instance = new TokenType('IN', 12);
    TokenType_BREAK_instance = new TokenType('BREAK', 13);
    TokenType_CONTINUE_instance = new TokenType('CONTINUE', 14);
    TokenType_RETURN_instance = new TokenType('RETURN', 15);
    TokenType_DATA_instance = new TokenType('DATA', 16);
    TokenType_CLASS_instance = new TokenType('CLASS', 17);
    TokenType_PLUS_instance = new TokenType('PLUS', 18);
    TokenType_MINUS_instance = new TokenType('MINUS', 19);
    TokenType_MULTIPLY_instance = new TokenType('MULTIPLY', 20);
    TokenType_DIVIDE_instance = new TokenType('DIVIDE', 21);
    TokenType_ASSIGN_instance = new TokenType('ASSIGN', 22);
    TokenType_EQUALS_instance = new TokenType('EQUALS', 23);
    TokenType_NOT_EQUALS_instance = new TokenType('NOT_EQUALS', 24);
    TokenType_LESS_instance = new TokenType('LESS', 25);
    TokenType_LESS_EQUAL_instance = new TokenType('LESS_EQUAL', 26);
    TokenType_GREATER_instance = new TokenType('GREATER', 27);
    TokenType_GREATER_EQUAL_instance = new TokenType('GREATER_EQUAL', 28);
    TokenType_NOT_instance = new TokenType('NOT', 29);
    TokenType_AND_instance = new TokenType('AND', 30);
    TokenType_OR_instance = new TokenType('OR', 31);
    TokenType_INCREMENT_instance = new TokenType('INCREMENT', 32);
    TokenType_DECREMENT_instance = new TokenType('DECREMENT', 33);
    TokenType_LEFT_PAREN_instance = new TokenType('LEFT_PAREN', 34);
    TokenType_RIGHT_PAREN_instance = new TokenType('RIGHT_PAREN', 35);
    TokenType_LEFT_BRACE_instance = new TokenType('LEFT_BRACE', 36);
    TokenType_RIGHT_BRACE_instance = new TokenType('RIGHT_BRACE', 37);
    TokenType_LEFT_BRACKET_instance = new TokenType('LEFT_BRACKET', 38);
    TokenType_RIGHT_BRACKET_instance = new TokenType('RIGHT_BRACKET', 39);
    TokenType_COMMA_instance = new TokenType('COMMA', 40);
    TokenType_DOT_instance = new TokenType('DOT', 41);
    TokenType_SEMICOLON_instance = new TokenType('SEMICOLON', 42);
    TokenType_NEWLINE_instance = new TokenType('NEWLINE', 43);
    TokenType_EOF_instance = new TokenType('EOF', 44);
    TokenType_UNKNOWN_instance = new TokenType('UNKNOWN', 45);
  }
  var $ENTRIES;
  function TokenType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Token(type, text, position) {
    this.type_1 = type;
    this.text_1 = text;
    this.position_1 = position;
  }
  protoOf(Token).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(Token).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(Token).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(Token).toString = function () {
    return '' + this.type_1 + "('" + this.text_1 + "') at " + this.position_1;
  };
  protoOf(Token).component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  protoOf(Token).component2_7eebsb_k$ = function () {
    return this.text_1;
  };
  protoOf(Token).component3_7eebsa_k$ = function () {
    return this.position_1;
  };
  protoOf(Token).copy_n3j4n3_k$ = function (type, text, position) {
    return new Token(type, text, position);
  };
  protoOf(Token).copy$default_9oybqz_k$ = function (type, text, position, $super) {
    type = type === VOID ? this.type_1 : type;
    text = text === VOID ? this.text_1 : text;
    position = position === VOID ? this.position_1 : position;
    return $super === VOID ? this.copy_n3j4n3_k$(type, text, position) : $super.copy_n3j4n3_k$.call(this, type, text, position);
  };
  protoOf(Token).hashCode = function () {
    var result = this.type_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.text_1) | 0;
    result = imul(result, 31) + this.position_1.hashCode() | 0;
    return result;
  };
  protoOf(Token).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Token))
      return false;
    var tmp0_other_with_cast = other instanceof Token ? other : THROW_CCE();
    if (!this.type_1.equals(tmp0_other_with_cast.type_1))
      return false;
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    if (!this.position_1.equals(tmp0_other_with_cast.position_1))
      return false;
    return true;
  };
  function TokenType_NUMBER_getInstance() {
    TokenType_initEntries();
    return TokenType_NUMBER_instance;
  }
  function TokenType_STRING_getInstance() {
    TokenType_initEntries();
    return TokenType_STRING_instance;
  }
  function TokenType_INTERPOLATED_STRING_getInstance() {
    TokenType_initEntries();
    return TokenType_INTERPOLATED_STRING_instance;
  }
  function TokenType_BOOLEAN_getInstance() {
    TokenType_initEntries();
    return TokenType_BOOLEAN_instance;
  }
  function TokenType_NULL_getInstance() {
    TokenType_initEntries();
    return TokenType_NULL_instance;
  }
  function TokenType_IDENTIFIER_getInstance() {
    TokenType_initEntries();
    return TokenType_IDENTIFIER_instance;
  }
  function TokenType_VAR_getInstance() {
    TokenType_initEntries();
    return TokenType_VAR_instance;
  }
  function TokenType_FUN_getInstance() {
    TokenType_initEntries();
    return TokenType_FUN_instance;
  }
  function TokenType_IF_getInstance() {
    TokenType_initEntries();
    return TokenType_IF_instance;
  }
  function TokenType_ELSE_getInstance() {
    TokenType_initEntries();
    return TokenType_ELSE_instance;
  }
  function TokenType_WHILE_getInstance() {
    TokenType_initEntries();
    return TokenType_WHILE_instance;
  }
  function TokenType_FOR_getInstance() {
    TokenType_initEntries();
    return TokenType_FOR_instance;
  }
  function TokenType_IN_getInstance() {
    TokenType_initEntries();
    return TokenType_IN_instance;
  }
  function TokenType_BREAK_getInstance() {
    TokenType_initEntries();
    return TokenType_BREAK_instance;
  }
  function TokenType_CONTINUE_getInstance() {
    TokenType_initEntries();
    return TokenType_CONTINUE_instance;
  }
  function TokenType_RETURN_getInstance() {
    TokenType_initEntries();
    return TokenType_RETURN_instance;
  }
  function TokenType_DATA_getInstance() {
    TokenType_initEntries();
    return TokenType_DATA_instance;
  }
  function TokenType_CLASS_getInstance() {
    TokenType_initEntries();
    return TokenType_CLASS_instance;
  }
  function TokenType_PLUS_getInstance() {
    TokenType_initEntries();
    return TokenType_PLUS_instance;
  }
  function TokenType_MINUS_getInstance() {
    TokenType_initEntries();
    return TokenType_MINUS_instance;
  }
  function TokenType_MULTIPLY_getInstance() {
    TokenType_initEntries();
    return TokenType_MULTIPLY_instance;
  }
  function TokenType_DIVIDE_getInstance() {
    TokenType_initEntries();
    return TokenType_DIVIDE_instance;
  }
  function TokenType_ASSIGN_getInstance() {
    TokenType_initEntries();
    return TokenType_ASSIGN_instance;
  }
  function TokenType_EQUALS_getInstance() {
    TokenType_initEntries();
    return TokenType_EQUALS_instance;
  }
  function TokenType_NOT_EQUALS_getInstance() {
    TokenType_initEntries();
    return TokenType_NOT_EQUALS_instance;
  }
  function TokenType_LESS_getInstance() {
    TokenType_initEntries();
    return TokenType_LESS_instance;
  }
  function TokenType_LESS_EQUAL_getInstance() {
    TokenType_initEntries();
    return TokenType_LESS_EQUAL_instance;
  }
  function TokenType_GREATER_getInstance() {
    TokenType_initEntries();
    return TokenType_GREATER_instance;
  }
  function TokenType_GREATER_EQUAL_getInstance() {
    TokenType_initEntries();
    return TokenType_GREATER_EQUAL_instance;
  }
  function TokenType_NOT_getInstance() {
    TokenType_initEntries();
    return TokenType_NOT_instance;
  }
  function TokenType_AND_getInstance() {
    TokenType_initEntries();
    return TokenType_AND_instance;
  }
  function TokenType_OR_getInstance() {
    TokenType_initEntries();
    return TokenType_OR_instance;
  }
  function TokenType_INCREMENT_getInstance() {
    TokenType_initEntries();
    return TokenType_INCREMENT_instance;
  }
  function TokenType_DECREMENT_getInstance() {
    TokenType_initEntries();
    return TokenType_DECREMENT_instance;
  }
  function TokenType_LEFT_PAREN_getInstance() {
    TokenType_initEntries();
    return TokenType_LEFT_PAREN_instance;
  }
  function TokenType_RIGHT_PAREN_getInstance() {
    TokenType_initEntries();
    return TokenType_RIGHT_PAREN_instance;
  }
  function TokenType_LEFT_BRACE_getInstance() {
    TokenType_initEntries();
    return TokenType_LEFT_BRACE_instance;
  }
  function TokenType_RIGHT_BRACE_getInstance() {
    TokenType_initEntries();
    return TokenType_RIGHT_BRACE_instance;
  }
  function TokenType_LEFT_BRACKET_getInstance() {
    TokenType_initEntries();
    return TokenType_LEFT_BRACKET_instance;
  }
  function TokenType_RIGHT_BRACKET_getInstance() {
    TokenType_initEntries();
    return TokenType_RIGHT_BRACKET_instance;
  }
  function TokenType_COMMA_getInstance() {
    TokenType_initEntries();
    return TokenType_COMMA_instance;
  }
  function TokenType_DOT_getInstance() {
    TokenType_initEntries();
    return TokenType_DOT_instance;
  }
  function TokenType_SEMICOLON_getInstance() {
    TokenType_initEntries();
    return TokenType_SEMICOLON_instance;
  }
  function TokenType_NEWLINE_getInstance() {
    TokenType_initEntries();
    return TokenType_NEWLINE_instance;
  }
  function TokenType_EOF_getInstance() {
    TokenType_initEntries();
    return TokenType_EOF_instance;
  }
  function TokenType_UNKNOWN_getInstance() {
    TokenType_initEntries();
    return TokenType_UNKNOWN_instance;
  }
  var properties_initialized_Token_kt_3j5vlj;
  function _init_properties_Token_kt__y4xssn() {
    if (!properties_initialized_Token_kt_3j5vlj) {
      properties_initialized_Token_kt_3j5vlj = true;
      KEYWORDS = mapOf([to('var', TokenType_VAR_getInstance()), to('fun', TokenType_FUN_getInstance()), to('if', TokenType_IF_getInstance()), to('else', TokenType_ELSE_getInstance()), to('while', TokenType_WHILE_getInstance()), to('for', TokenType_FOR_getInstance()), to('in', TokenType_IN_getInstance()), to('break', TokenType_BREAK_getInstance()), to('continue', TokenType_CONTINUE_getInstance()), to('return', TokenType_RETURN_getInstance()), to('data', TokenType_DATA_getInstance()), to('class', TokenType_CLASS_getInstance()), to('true', TokenType_BOOLEAN_getInstance()), to('false', TokenType_BOOLEAN_getInstance()), to('null', TokenType_NULL_getInstance())]);
    }
  }
  function _get_tokens__ivj641($this) {
    return $this.tokens_1;
  }
  function _set_current__qj3kk_0($this, _set____db54di) {
    $this.current_1 = _set____db54di;
  }
  function _get_current__qcrdxk_0($this) {
    return $this.current_1;
  }
  function statement($this) {
    var tmp;
    if (match_0($this, [TokenType_VAR_getInstance()])) {
      tmp = varDeclaration($this);
    } else if (match_0($this, [TokenType_FUN_getInstance()])) {
      tmp = functionDeclaration($this);
    } else if (match_0($this, [TokenType_DATA_getInstance()])) {
      tmp = dataClassDeclaration($this);
    } else if (match_0($this, [TokenType_IF_getInstance()])) {
      tmp = ifStatement($this);
    } else if (match_0($this, [TokenType_WHILE_getInstance()])) {
      tmp = whileStatement($this);
    } else if (match_0($this, [TokenType_FOR_getInstance()])) {
      tmp = forStatement($this);
    } else if (match_0($this, [TokenType_BREAK_getInstance()])) {
      tmp = breakStatement($this);
    } else if (match_0($this, [TokenType_CONTINUE_getInstance()])) {
      tmp = continueStatement($this);
    } else if (match_0($this, [TokenType_RETURN_getInstance()])) {
      tmp = returnStatement($this);
    } else {
      var checkpoint = $this.current_1;
      var tmp_0;
      try {
        tmp_0 = assignment($this);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ParseError) {
          var e = $p;
          $this.current_1 = checkpoint;
          tmp_1 = expressionStatement($this);
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function varDeclaration($this) {
    var name = consume($this, TokenType_IDENTIFIER_getInstance(), 'Expected variable name').get_text_wouvsm_k$();
    consume($this, TokenType_ASSIGN_getInstance(), "Expected '=' after variable name");
    var value = expression($this);
    skipNewlines($this);
    return new VarDeclaration(name, value, previous($this).get_position_jfponi_k$());
  }
  function functionDeclaration($this) {
    var pos = previous($this).get_position_jfponi_k$();
    var name = consume($this, TokenType_IDENTIFIER_getInstance(), 'Expected function name').get_text_wouvsm_k$();
    consume($this, TokenType_LEFT_PAREN_getInstance(), "Expected '(' after function name");
    // Inline function 'kotlin.collections.mutableListOf' call
    var parameters = ArrayList_init_$Create$_0();
    if (!check($this, TokenType_RIGHT_PAREN_getInstance())) {
      do {
        parameters.add_utx5q5_k$(consume($this, TokenType_IDENTIFIER_getInstance(), 'Expected parameter name').get_text_wouvsm_k$());
      }
       while (match_0($this, [TokenType_COMMA_getInstance()]));
    }
    consume($this, TokenType_RIGHT_PAREN_getInstance(), "Expected ')' after parameters");
    consume($this, TokenType_LEFT_BRACE_getInstance(), "Expected '{' before function body");
    var body = block($this);
    return new FunctionDeclaration(name, parameters, body, pos);
  }
  function dataClassDeclaration($this) {
    var pos = previous($this).get_position_jfponi_k$();
    consume($this, TokenType_CLASS_getInstance(), "Expected 'class' after 'data'");
    var name = consume($this, TokenType_IDENTIFIER_getInstance(), 'Expected class name').get_text_wouvsm_k$();
    consume($this, TokenType_LEFT_PAREN_getInstance(), "Expected '(' after class name");
    // Inline function 'kotlin.collections.mutableListOf' call
    var fields = ArrayList_init_$Create$_0();
    if (!check($this, TokenType_RIGHT_PAREN_getInstance())) {
      do {
        fields.add_utx5q5_k$(consume($this, TokenType_IDENTIFIER_getInstance(), 'Expected field name').get_text_wouvsm_k$());
      }
       while (match_0($this, [TokenType_COMMA_getInstance()]));
    }
    consume($this, TokenType_RIGHT_PAREN_getInstance(), "Expected ')' after fields");
    skipNewlines($this);
    return new DataClassDeclaration(name, fields, pos);
  }
  function ifStatement($this) {
    var pos = previous($this).get_position_jfponi_k$();
    consume($this, TokenType_LEFT_PAREN_getInstance(), "Expected '(' after 'if'");
    var condition = expression($this);
    consume($this, TokenType_RIGHT_PAREN_getInstance(), "Expected ')' after if condition");
    consume($this, TokenType_LEFT_BRACE_getInstance(), "Expected '{' after if condition");
    var thenBranch = block($this);
    var tmp;
    if (match_0($this, [TokenType_ELSE_getInstance()])) {
      consume($this, TokenType_LEFT_BRACE_getInstance(), "Expected '{' after 'else'");
      tmp = block($this);
    } else {
      tmp = null;
    }
    var elseBranch = tmp;
    return new IfStatement(condition, thenBranch, elseBranch, pos);
  }
  function whileStatement($this) {
    var pos = previous($this).get_position_jfponi_k$();
    consume($this, TokenType_LEFT_PAREN_getInstance(), "Expected '(' after 'while'");
    var condition = expression($this);
    consume($this, TokenType_RIGHT_PAREN_getInstance(), "Expected ')' after while condition");
    consume($this, TokenType_LEFT_BRACE_getInstance(), "Expected '{' after while condition");
    var body = block($this);
    return new WhileStatement(condition, body, pos);
  }
  function forStatement($this) {
    var pos = previous($this).get_position_jfponi_k$();
    consume($this, TokenType_LEFT_PAREN_getInstance(), "Expected '(' after 'for'");
    if (check($this, TokenType_IDENTIFIER_getInstance())) {
      var checkpoint = $this.current_1;
      var variable = advance_0($this).get_text_wouvsm_k$();
      if (match_0($this, [TokenType_IN_getInstance()])) {
        var iterable = expression($this);
        consume($this, TokenType_RIGHT_PAREN_getInstance(), "Expected ')' after for-in");
        consume($this, TokenType_LEFT_BRACE_getInstance(), "Expected '{' after for-in");
        var body = block($this);
        return new ForInStatement(variable, iterable, body, pos);
      } else {
        $this.current_1 = checkpoint;
      }
    }
    var tmp;
    if (match_0($this, [TokenType_SEMICOLON_getInstance()])) {
      tmp = null;
    } else {
      var stmt = match_0($this, [TokenType_VAR_getInstance()]) ? varDeclaration($this) : assignment($this);
      consume($this, TokenType_SEMICOLON_getInstance(), "Expected ';' after for loop initializer");
      tmp = stmt;
    }
    var init = tmp;
    var condition = check($this, TokenType_SEMICOLON_getInstance()) ? null : expression($this);
    consume($this, TokenType_SEMICOLON_getInstance(), "Expected ';' after for loop condition");
    var update = check($this, TokenType_RIGHT_PAREN_getInstance()) ? null : assignment($this);
    consume($this, TokenType_RIGHT_PAREN_getInstance(), "Expected ')' after for clauses");
    consume($this, TokenType_LEFT_BRACE_getInstance(), "Expected '{' after for");
    var body_0 = block($this);
    return new ForStatement(init, condition, update, body_0, pos);
  }
  function breakStatement($this) {
    var pos = previous($this).get_position_jfponi_k$();
    skipNewlines($this);
    return new BreakStatement(pos);
  }
  function continueStatement($this) {
    var pos = previous($this).get_position_jfponi_k$();
    skipNewlines($this);
    return new ContinueStatement(pos);
  }
  function returnStatement($this) {
    var pos = previous($this).get_position_jfponi_k$();
    var value = (check($this, TokenType_NEWLINE_getInstance()) ? true : isAtEnd_0($this)) ? null : expression($this);
    skipNewlines($this);
    return new ReturnStatement(value, pos);
  }
  function assignment($this) {
    var expr = expression($this);
    if (match_0($this, [TokenType_ASSIGN_getInstance()])) {
      var value = expression($this);
      skipNewlines($this);
      return new Assignment(expr, value, expr.get_position_jfponi_k$());
    }
    throw new ParseError('Expected assignment', peek_0($this).get_position_jfponi_k$());
  }
  function expressionStatement($this) {
    var expr = expression($this);
    skipNewlines($this);
    return new ExpressionStatement(expr, expr.get_position_jfponi_k$());
  }
  function block($this) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var statements = ArrayList_init_$Create$_0();
    skipNewlines($this);
    $l$loop: while (!check($this, TokenType_RIGHT_BRACE_getInstance()) ? !isAtEnd_0($this) : false) {
      if (match_0($this, [TokenType_NEWLINE_getInstance()]))
        continue $l$loop;
      statements.add_utx5q5_k$(statement($this));
    }
    consume($this, TokenType_RIGHT_BRACE_getInstance(), "Expected '}' after block");
    return statements;
  }
  function expression($this) {
    return or($this);
  }
  function or($this) {
    var expr = and($this);
    while (match_0($this, [TokenType_OR_getInstance()])) {
      var operator = previous($this).get_text_wouvsm_k$();
      var right = and($this);
      expr = new BinaryExpression(expr, operator, right, expr.get_position_jfponi_k$());
    }
    return expr;
  }
  function and($this) {
    var expr = equality($this);
    while (match_0($this, [TokenType_AND_getInstance()])) {
      var operator = previous($this).get_text_wouvsm_k$();
      var right = equality($this);
      expr = new BinaryExpression(expr, operator, right, expr.get_position_jfponi_k$());
    }
    return expr;
  }
  function equality($this) {
    var expr = comparison($this);
    while (match_0($this, [TokenType_EQUALS_getInstance(), TokenType_NOT_EQUALS_getInstance()])) {
      var operator = previous($this).get_text_wouvsm_k$();
      var right = comparison($this);
      expr = new BinaryExpression(expr, operator, right, expr.get_position_jfponi_k$());
    }
    return expr;
  }
  function comparison($this) {
    var expr = term($this);
    while (match_0($this, [TokenType_GREATER_getInstance(), TokenType_GREATER_EQUAL_getInstance(), TokenType_LESS_getInstance(), TokenType_LESS_EQUAL_getInstance()])) {
      var operator = previous($this).get_text_wouvsm_k$();
      var right = term($this);
      expr = new BinaryExpression(expr, operator, right, expr.get_position_jfponi_k$());
    }
    return expr;
  }
  function term($this) {
    var expr = factor($this);
    while (match_0($this, [TokenType_MINUS_getInstance(), TokenType_PLUS_getInstance()])) {
      var operator = previous($this).get_text_wouvsm_k$();
      var right = factor($this);
      expr = new BinaryExpression(expr, operator, right, expr.get_position_jfponi_k$());
    }
    return expr;
  }
  function factor($this) {
    var expr = unary($this);
    while (match_0($this, [TokenType_DIVIDE_getInstance(), TokenType_MULTIPLY_getInstance()])) {
      var operator = previous($this).get_text_wouvsm_k$();
      var right = unary($this);
      expr = new BinaryExpression(expr, operator, right, expr.get_position_jfponi_k$());
    }
    return expr;
  }
  function unary($this) {
    if (match_0($this, [TokenType_NOT_getInstance(), TokenType_MINUS_getInstance(), TokenType_PLUS_getInstance()])) {
      var operator = previous($this).get_text_wouvsm_k$();
      var right = unary($this);
      return new UnaryExpression(operator, right, previous($this).get_position_jfponi_k$());
    }
    return postfix($this);
  }
  function postfix($this) {
    var expr = call($this);
    if (match_0($this, [TokenType_INCREMENT_getInstance(), TokenType_DECREMENT_getInstance()])) {
      var operator = previous($this).get_text_wouvsm_k$();
      return new PostfixExpression(expr, operator, expr.get_position_jfponi_k$());
    }
    return expr;
  }
  function call($this) {
    var expr = primary($this);
    $l$loop: while (true) {
      var tmp;
      if (match_0($this, [TokenType_LEFT_PAREN_getInstance()])) {
        var args = arguments_0($this);
        var tmp_0;
        if (expr instanceof Identifier) {
          tmp_0 = new FunctionCall(expr.get_name_woqyms_k$(), args, expr.get_position_jfponi_k$());
        } else {
          throw new ParseError('Invalid function call', expr.get_position_jfponi_k$());
        }
        tmp = tmp_0;
      } else if (match_0($this, [TokenType_DOT_getInstance()])) {
        var name = consume($this, TokenType_IDENTIFIER_getInstance(), "Expected property name after '.'").get_text_wouvsm_k$();
        var tmp_1;
        if (match_0($this, [TokenType_LEFT_PAREN_getInstance()])) {
          var args_0 = arguments_0($this);
          tmp_1 = new MethodCall(expr, name, args_0, expr.get_position_jfponi_k$());
        } else {
          tmp_1 = new MemberAccess(expr, name, expr.get_position_jfponi_k$());
        }
        tmp = tmp_1;
      } else if (match_0($this, [TokenType_LEFT_BRACKET_getInstance()])) {
        var index = expression($this);
        consume($this, TokenType_RIGHT_BRACKET_getInstance(), "Expected ']' after array index");
        tmp = new ArrayAccess(expr, index, expr.get_position_jfponi_k$());
      } else {
        break $l$loop;
      }
      expr = tmp;
    }
    return expr;
  }
  function primary($this) {
    var tmp;
    if (match_0($this, [TokenType_BOOLEAN_getInstance()])) {
      tmp = new BooleanLiteral(toBoolean(previous($this).get_text_wouvsm_k$()), previous($this).get_position_jfponi_k$());
    } else if (match_0($this, [TokenType_NULL_getInstance()])) {
      tmp = new NullLiteral(previous($this).get_position_jfponi_k$());
    } else if (match_0($this, [TokenType_NUMBER_getInstance()])) {
      var token = previous($this);
      var numberText = token.get_text_wouvsm_k$();
      if (contains(numberText, _Char___init__impl__6a9atx(46))) {
        throw new ParseError('Double/float literals are not supported. Use integer values only.', token.get_position_jfponi_k$());
      }
      tmp = new NumberLiteral(toDouble(numberText), token.get_position_jfponi_k$());
    } else if (match_0($this, [TokenType_STRING_getInstance()])) {
      tmp = new StringLiteral(previous($this).get_text_wouvsm_k$(), previous($this).get_position_jfponi_k$());
    } else if (match_0($this, [TokenType_INTERPOLATED_STRING_getInstance()])) {
      tmp = parseInterpolatedString($this);
    } else if (match_0($this, [TokenType_IDENTIFIER_getInstance()])) {
      tmp = new Identifier(previous($this).get_text_wouvsm_k$(), previous($this).get_position_jfponi_k$());
    } else if (match_0($this, [TokenType_LEFT_PAREN_getInstance()])) {
      var expr = expression($this);
      consume($this, TokenType_RIGHT_PAREN_getInstance(), "Expected ')' after expression");
      tmp = expr;
    } else if (match_0($this, [TokenType_LEFT_BRACKET_getInstance()])) {
      var startPos = previous($this).get_position_jfponi_k$();
      // Inline function 'kotlin.collections.mutableListOf' call
      var elements = ArrayList_init_$Create$_0();
      if (!check($this, TokenType_RIGHT_BRACKET_getInstance())) {
        do {
          if (check($this, TokenType_IDENTIFIER_getInstance())) {
            var identifier = advance_0($this);
            elements.add_utx5q5_k$(new Identifier(identifier.get_text_wouvsm_k$(), identifier.get_position_jfponi_k$()));
          } else {
            elements.add_utx5q5_k$(expression($this));
          }
        }
         while (match_0($this, [TokenType_COMMA_getInstance()]));
      }
      consume($this, TokenType_RIGHT_BRACKET_getInstance(), "Expected ']' after array elements");
      tmp = new ArrayLiteral(elements, startPos);
    } else {
      throw new ParseError('Expected expression', peek_0($this).get_position_jfponi_k$());
    }
    return tmp;
  }
  function arguments_0($this) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var args = ArrayList_init_$Create$_0();
    if (!check($this, TokenType_RIGHT_PAREN_getInstance())) {
      do {
        args.add_utx5q5_k$(expression($this));
      }
       while (match_0($this, [TokenType_COMMA_getInstance()]));
    }
    consume($this, TokenType_RIGHT_PAREN_getInstance(), "Expected ')' after arguments");
    return args;
  }
  function match_0($this, types) {
    var inductionVariable = 0;
    var last = types.length;
    while (inductionVariable < last) {
      var type = types[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (check($this, type)) {
        advance_0($this);
        return true;
      }
    }
    return false;
  }
  function check($this, type) {
    if (isAtEnd_0($this))
      return false;
    return peek_0($this).get_type_wovaf7_k$().equals(type);
  }
  function advance_0($this) {
    if (!isAtEnd_0($this)) {
      $this.current_1 = $this.current_1 + 1 | 0;
    }
    return previous($this);
  }
  function isAtEnd_0($this) {
    return peek_0($this).get_type_wovaf7_k$().equals(TokenType_EOF_getInstance());
  }
  function peek_0($this) {
    return $this.tokens_1.get_c1px32_k$($this.current_1);
  }
  function previous($this) {
    return $this.tokens_1.get_c1px32_k$($this.current_1 - 1 | 0);
  }
  function consume($this, type, message) {
    if (check($this, type))
      return advance_0($this);
    var currentToken = peek_0($this);
    var errorPosition = (currentToken.get_type_wovaf7_k$().equals(TokenType_EOF_getInstance()) ? $this.current_1 > 0 : false) ? previous($this).get_position_jfponi_k$() : currentToken.get_position_jfponi_k$();
    throw new ParseError(message, errorPosition);
  }
  function parseInterpolatedString($this) {
    var token = previous($this);
    var encodedParts = split(token.get_text_wouvsm_k$(), ['\x01']);
    // Inline function 'kotlin.collections.mutableListOf' call
    var parts = ArrayList_init_$Create$_0();
    var tmp0_iterator = encodedParts.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var encodedPart = tmp0_iterator.next_20eer_k$();
      if (startsWith(encodedPart, 'TEXT:')) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        var text = encodedPart.substring(5);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(text) > 0) {
          parts.add_utx5q5_k$(new Text(text));
        }
      } else if (startsWith(encodedPart, 'EXPR:')) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        var exprText = encodedPart.substring(5);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(exprText) > 0) {
          var exprLexer = new Lexer(exprText);
          var exprTokens = exprLexer.tokenize_i964w5_k$();
          var exprParser = new Parser(exprTokens);
          var expr = expression(exprParser);
          parts.add_utx5q5_k$(new Expression_0(expr));
        }
      }
    }
    return new InterpolatedStringLiteral(parts, token.get_position_jfponi_k$());
  }
  function skipNewlines($this) {
    while (match_0($this, [TokenType_NEWLINE_getInstance()])) {
    }
  }
  function Parser(tokens) {
    this.tokens_1 = tokens;
    this.current_1 = 0;
  }
  protoOf(Parser).parse_1rdbjn_k$ = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var statements = ArrayList_init_$Create$_0();
    $l$loop: while (!isAtEnd_0(this)) {
      if (check(this, TokenType_NEWLINE_getInstance())) {
        advance_0(this);
        continue $l$loop;
      }
      var stmt = statement(this);
      statements.add_utx5q5_k$(stmt);
    }
    return new Program(statements);
  };
  function NativeFunction() {
  }
  function _get_functions__mnzx7u_0($this) {
    return $this.functions_1;
  }
  function sam$at_crowdware_sms_runtime_NativeFunction$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$at_crowdware_sms_runtime_NativeFunction$0).call_yiqqb5_k$ = function (args) {
    return this.function_1(args);
  };
  function NativeFunctionRegistry$registerBuiltins$lambda(args) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!args.isEmpty_y1axqb_k$()) {
      tmp = new StringValue(ValueUtils_getInstance().toString_k2f3al_k$(args.get_c1px32_k$(0)));
    } else {
      tmp = new StringValue('');
    }
    return tmp;
  }
  function NativeFunctionRegistry$registerBuiltins$lambda_0(args) {
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!args.isEmpty_y1axqb_k$()) {
      var tmp_1 = args.get_c1px32_k$(0);
      tmp_0 = tmp_1 instanceof ArrayValue;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_2 = args.get_c1px32_k$(0);
      tmp = NumberValue_init_$Create$((tmp_2 instanceof ArrayValue ? tmp_2 : THROW_CCE()).size_23och_k$());
    } else {
      tmp = NumberValue_init_$Create$(0);
    }
    return tmp;
  }
  function NativeFunctionRegistry$registerBuiltins$lambda_1(args) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!args.isEmpty_y1axqb_k$()) {
      var tmp_0 = args.get_c1px32_k$(0);
      tmp = tmp_0 instanceof NumberValue;
    } else {
      tmp = false;
    }
    return new BooleanValue(tmp);
  }
  function NativeFunctionRegistry$registerBuiltins$lambda_2(args) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!args.isEmpty_y1axqb_k$()) {
      var tmp_0 = args.get_c1px32_k$(0);
      tmp = tmp_0 instanceof StringValue;
    } else {
      tmp = false;
    }
    return new BooleanValue(tmp);
  }
  function NativeFunctionRegistry$registerBuiltins$lambda_3(args) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!args.isEmpty_y1axqb_k$()) {
      var tmp_0 = args.get_c1px32_k$(0);
      tmp = tmp_0 instanceof BooleanValue;
    } else {
      tmp = false;
    }
    return new BooleanValue(tmp);
  }
  function NativeFunctionRegistry$registerBuiltins$lambda_4(args) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!args.isEmpty_y1axqb_k$()) {
      var tmp_0 = args.get_c1px32_k$(0);
      tmp = tmp_0 instanceof NullValue;
    } else {
      tmp = false;
    }
    return new BooleanValue(tmp);
  }
  function NativeFunctionRegistry$registerBuiltins$lambda_5(args) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!args.isEmpty_y1axqb_k$()) {
      var tmp_0 = args.get_c1px32_k$(0);
      tmp = tmp_0 instanceof ArrayValue;
    } else {
      tmp = false;
    }
    return new BooleanValue(tmp);
  }
  function NativeFunctionRegistry$registerBuiltins$lambda_6(args) {
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!args.isEmpty_y1axqb_k$()) {
      var tmp_1 = args.get_c1px32_k$(0);
      tmp_0 = tmp_1 instanceof NumberValue;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_2 = args.get_c1px32_k$(0);
      var num = (tmp_2 instanceof NumberValue ? tmp_2 : THROW_CCE()).get_value_j01efc_k$();
      // Inline function 'kotlin.math.abs' call
      var tmp$ret$1 = Math.abs(num);
      tmp = new NumberValue(tmp$ret$1);
    } else {
      tmp = new NumberValue(0.0);
    }
    return tmp;
  }
  function NativeFunctionRegistry$registerBuiltins$lambda_7(args) {
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
      // Inline function 'kotlin.math.min' call
      var tmp$ret$0 = Math.min(a, b);
      tmp = new NumberValue(tmp$ret$0);
    } else {
      tmp = new NumberValue(0.0);
    }
    return tmp;
  }
  function NativeFunctionRegistry$registerBuiltins$lambda_8(args) {
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
      // Inline function 'kotlin.math.max' call
      var tmp$ret$0 = Math.max(a, b);
      tmp = new NumberValue(tmp$ret$0);
    } else {
      tmp = new NumberValue(0.0);
    }
    return tmp;
  }
  function NativeFunctionRegistry$registerBuiltins$lambda_9(args) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!args.isEmpty_y1axqb_k$()) {
      print(ValueUtils_getInstance().toString_k2f3al_k$(args.get_c1px32_k$(0)));
    }
    return NullValue_getInstance();
  }
  function NativeFunctionRegistry() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.functions_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(NativeFunctionRegistry).register_h2wrlu_k$ = function (name, function_0) {
    // Inline function 'kotlin.collections.set' call
    this.functions_1.put_4fpzoq_k$(name, function_0);
  };
  protoOf(NativeFunctionRegistry).register_108fx0_k$ = function (name, function_0) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.functions_1;
    var value = new sam$at_crowdware_sms_runtime_NativeFunction$0(function_0);
    this_0.put_4fpzoq_k$(name, value);
  };
  protoOf(NativeFunctionRegistry).get_6bo4tg_k$ = function (name) {
    return this.functions_1.get_wei43m_k$(name);
  };
  protoOf(NativeFunctionRegistry).has_5057c0_k$ = function (name) {
    return this.functions_1.containsKey_aw81wo_k$(name);
  };
  protoOf(NativeFunctionRegistry).getNames_wf6efm_k$ = function () {
    return toSet(this.functions_1.get_keys_wop4xp_k$());
  };
  protoOf(NativeFunctionRegistry).clear_j9egeb_k$ = function () {
    return this.functions_1.clear_j9egeb_k$();
  };
  protoOf(NativeFunctionRegistry).registerBuiltins_bwbecd_k$ = function () {
    this.register_108fx0_k$('toString', NativeFunctionRegistry$registerBuiltins$lambda);
    this.register_108fx0_k$('size', NativeFunctionRegistry$registerBuiltins$lambda_0);
    this.register_108fx0_k$('isNumber', NativeFunctionRegistry$registerBuiltins$lambda_1);
    this.register_108fx0_k$('isString', NativeFunctionRegistry$registerBuiltins$lambda_2);
    this.register_108fx0_k$('isBoolean', NativeFunctionRegistry$registerBuiltins$lambda_3);
    this.register_108fx0_k$('isNull', NativeFunctionRegistry$registerBuiltins$lambda_4);
    this.register_108fx0_k$('isArray', NativeFunctionRegistry$registerBuiltins$lambda_5);
    this.register_108fx0_k$('abs', NativeFunctionRegistry$registerBuiltins$lambda_6);
    this.register_108fx0_k$('min', NativeFunctionRegistry$registerBuiltins$lambda_7);
    this.register_108fx0_k$('max', NativeFunctionRegistry$registerBuiltins$lambda_8);
    this.register_108fx0_k$('print', NativeFunctionRegistry$registerBuiltins$lambda_9);
  };
  function Value$toString$lambda(it) {
    return it.get_key_18j28a_k$() + '=' + it.get_value_j01efc_k$();
  }
  function Value() {
  }
  protoOf(Value).toString = function () {
    var tmp;
    if (this instanceof NumberValue) {
      tmp = this.value_1 % 1.0 === 0.0 ? numberToLong(this.value_1).toString() : this.value_1.toString();
    } else {
      if (this instanceof StringValue) {
        tmp = this.value_1;
      } else {
        if (this instanceof BooleanValue) {
          tmp = this.value_1.toString();
        } else {
          if (this instanceof NullValue) {
            tmp = 'null';
          } else {
            if (this instanceof ArrayValue) {
              tmp = '[' + joinToString(this.elements_1, ', ') + ']';
            } else {
              if (this instanceof ObjectValue) {
                var tmp_0 = this.fields_1.get_entries_p20ztl_k$();
                tmp = this.className_1 + '{' + joinToString(tmp_0, ', ', VOID, VOID, VOID, VOID, Value$toString$lambda) + '}';
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  function NumberValue_init_$Init$(value, $this) {
    NumberValue.call($this, value);
    return $this;
  }
  function NumberValue_init_$Create$(value) {
    return NumberValue_init_$Init$(value, objectCreate(protoOf(NumberValue)));
  }
  function NumberValue_init_$Init$_0(value, $this) {
    NumberValue.call($this, value.toDouble_ygsx0s_k$());
    return $this;
  }
  function NumberValue_init_$Create$_0(value) {
    return NumberValue_init_$Init$_0(value, objectCreate(protoOf(NumberValue)));
  }
  function NumberValue(value) {
    Value.call(this);
    this.value_1 = value;
  }
  protoOf(NumberValue).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(NumberValue).toKotlin_x907tw_k$ = function () {
    return this.value_1;
  };
  protoOf(NumberValue).isTruthy_35rah4_k$ = function () {
    return !(this.value_1 === 0.0);
  };
  protoOf(NumberValue).toInt_1tsl84_k$ = function () {
    return numberToInt(this.value_1);
  };
  protoOf(NumberValue).toLong_edfucp_k$ = function () {
    return numberToLong(this.value_1);
  };
  protoOf(NumberValue).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(NumberValue).copy_rpdqz3_k$ = function (value) {
    return new NumberValue(value);
  };
  protoOf(NumberValue).copy$default_q17qkq_k$ = function (value, $super) {
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_rpdqz3_k$(value) : $super.copy_rpdqz3_k$.call(this, value);
  };
  protoOf(NumberValue).toString = function () {
    return 'NumberValue(value=' + this.value_1 + ')';
  };
  protoOf(NumberValue).hashCode = function () {
    return getNumberHashCode(this.value_1);
  };
  protoOf(NumberValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NumberValue))
      return false;
    var tmp0_other_with_cast = other instanceof NumberValue ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function ValueUtils() {
    ValueUtils_instance = this;
  }
  protoOf(ValueUtils).fromKotlin_y0ia4s_k$ = function (value) {
    var tmp;
    if (value == null) {
      tmp = NullValue_getInstance();
    } else {
      if (!(value == null) ? typeof value === 'boolean' : false) {
        tmp = new BooleanValue(value);
      } else {
        if (!(value == null) ? typeof value === 'number' : false) {
          tmp = NumberValue_init_$Create$(value);
        } else {
          if (value instanceof Long) {
            tmp = NumberValue_init_$Create$_0(value);
          } else {
            if (!(value == null) ? typeof value === 'number' : false) {
              tmp = new NumberValue(value);
            } else {
              if (!(value == null) ? typeof value === 'number' : false) {
                tmp = new NumberValue(value);
              } else {
                if (!(value == null) ? typeof value === 'string' : false) {
                  tmp = new StringValue(value);
                } else {
                  if (!(value == null) ? isInterface(value, List) : false) {
                    // Inline function 'kotlin.collections.map' call
                    // Inline function 'kotlin.collections.mapTo' call
                    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(value, 10));
                    var tmp0_iterator = value.iterator_jk1svi_k$();
                    while (tmp0_iterator.hasNext_bitz1p_k$()) {
                      var item = tmp0_iterator.next_20eer_k$();
                      // Inline function 'at.crowdware.sms.runtime.ValueUtils.fromKotlin.<anonymous>' call
                      var tmp$ret$0 = ValueUtils_getInstance().fromKotlin_y0ia4s_k$(item);
                      destination.add_utx5q5_k$(tmp$ret$0);
                    }
                    tmp = new ArrayValue(toMutableList(destination));
                  } else {
                    if (!(value == null) ? isArray(value) : false) {
                      // Inline function 'kotlin.collections.map' call
                      // Inline function 'kotlin.collections.mapTo' call
                      var destination_0 = ArrayList_init_$Create$(value.length);
                      var inductionVariable = 0;
                      var last = value.length;
                      while (inductionVariable < last) {
                        var item_0 = value[inductionVariable];
                        inductionVariable = inductionVariable + 1 | 0;
                        // Inline function 'at.crowdware.sms.runtime.ValueUtils.fromKotlin.<anonymous>' call
                        var tmp$ret$3 = ValueUtils_getInstance().fromKotlin_y0ia4s_k$(item_0);
                        destination_0.add_utx5q5_k$(tmp$ret$3);
                      }
                      tmp = new ArrayValue(toMutableList(destination_0));
                    } else {
                      if (!(value == null) ? isInterface(value, Map) : false) {
                        // Inline function 'kotlin.collections.mutableMapOf' call
                        var fields = LinkedHashMap_init_$Create$();
                        // Inline function 'kotlin.collections.forEach' call
                        // Inline function 'kotlin.collections.iterator' call
                        var tmp0_iterator_0 = value.get_entries_p20ztl_k$().iterator_jk1svi_k$();
                        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                          var element = tmp0_iterator_0.next_20eer_k$();
                          // Inline function 'at.crowdware.sms.runtime.ValueUtils.fromKotlin.<anonymous>' call
                          // Inline function 'kotlin.collections.component1' call
                          var k = element.get_key_18j28a_k$();
                          // Inline function 'kotlin.collections.component2' call
                          var v = element.get_value_j01efc_k$();
                          if (!(k == null) ? typeof k === 'string' : false) {
                            // Inline function 'kotlin.collections.set' call
                            var value_0 = ValueUtils_getInstance().fromKotlin_y0ia4s_k$(v);
                            fields.put_4fpzoq_k$(k, value_0);
                          }
                        }
                        tmp = new ObjectValue('Map', fields);
                      } else {
                        tmp = new StringValue(toString_0(value));
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  protoOf(ValueUtils).toKotlin_6rrtsz_k$ = function (value) {
    return value.toKotlin_x907tw_k$();
  };
  protoOf(ValueUtils).equals_1op2in_k$ = function (left, right) {
    var tmp;
    var tmp_0;
    if (left instanceof NumberValue) {
      tmp_0 = right instanceof NumberValue;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = left.value_1 === right.value_1;
    } else {
      var tmp_1;
      if (left instanceof StringValue) {
        tmp_1 = right instanceof StringValue;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = left.value_1 === right.value_1;
      } else {
        var tmp_2;
        if (left instanceof BooleanValue) {
          tmp_2 = right instanceof BooleanValue;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp = left.value_1 === right.value_1;
        } else {
          var tmp_3;
          if (left instanceof NullValue) {
            tmp_3 = right instanceof NullValue;
          } else {
            tmp_3 = false;
          }
          if (tmp_3) {
            tmp = true;
          } else {
            var tmp_4;
            if (left instanceof ArrayValue) {
              tmp_4 = right instanceof ArrayValue;
            } else {
              tmp_4 = false;
            }
            if (tmp_4) {
              tmp = equals(left.elements_1, right.elements_1);
            } else {
              var tmp_5;
              if (left instanceof ObjectValue) {
                tmp_5 = right instanceof ObjectValue;
              } else {
                tmp_5 = false;
              }
              if (tmp_5) {
                tmp = equals(left.fields_1, right.fields_1);
              } else {
                tmp = false;
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  protoOf(ValueUtils).toString_k2f3al_k$ = function (value) {
    return value.toString();
  };
  protoOf(ValueUtils).isTruthy_uoutaf_k$ = function (value) {
    return value.isTruthy_35rah4_k$();
  };
  var ValueUtils_instance;
  function ValueUtils_getInstance() {
    if (ValueUtils_instance == null)
      new ValueUtils();
    return ValueUtils_instance;
  }
  function StringValue(value) {
    Value.call(this);
    this.value_1 = value;
  }
  protoOf(StringValue).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(StringValue).toKotlin_x907tw_k$ = function () {
    return this.value_1;
  };
  protoOf(StringValue).isTruthy_35rah4_k$ = function () {
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.value_1;
    return charSequenceLength(this_0) > 0;
  };
  protoOf(StringValue).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(StringValue).copy_a35qlh_k$ = function (value) {
    return new StringValue(value);
  };
  protoOf(StringValue).copy$default_99iele_k$ = function (value, $super) {
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_a35qlh_k$(value) : $super.copy_a35qlh_k$.call(this, value);
  };
  protoOf(StringValue).toString = function () {
    return 'StringValue(value=' + this.value_1 + ')';
  };
  protoOf(StringValue).hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  protoOf(StringValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringValue))
      return false;
    var tmp0_other_with_cast = other instanceof StringValue ? other : THROW_CCE();
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function BooleanValue(value) {
    Value.call(this);
    this.value_1 = value;
  }
  protoOf(BooleanValue).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(BooleanValue).toKotlin_x907tw_k$ = function () {
    return this.value_1;
  };
  protoOf(BooleanValue).isTruthy_35rah4_k$ = function () {
    return this.value_1;
  };
  protoOf(BooleanValue).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(BooleanValue).copy_o18wmo_k$ = function (value) {
    return new BooleanValue(value);
  };
  protoOf(BooleanValue).copy$default_c1xn10_k$ = function (value, $super) {
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_o18wmo_k$(value) : $super.copy_o18wmo_k$.call(this, value);
  };
  protoOf(BooleanValue).toString = function () {
    return 'BooleanValue(value=' + this.value_1 + ')';
  };
  protoOf(BooleanValue).hashCode = function () {
    return getBooleanHashCode(this.value_1);
  };
  protoOf(BooleanValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BooleanValue))
      return false;
    var tmp0_other_with_cast = other instanceof BooleanValue ? other : THROW_CCE();
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function NullValue() {
    NullValue_instance = this;
    Value.call(this);
  }
  protoOf(NullValue).toKotlin_x907tw_k$ = function () {
    return null;
  };
  protoOf(NullValue).isTruthy_35rah4_k$ = function () {
    return false;
  };
  var NullValue_instance;
  function NullValue_getInstance() {
    if (NullValue_instance == null)
      new NullValue();
    return NullValue_instance;
  }
  function ArrayValue(elements) {
    var tmp;
    if (elements === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$_0();
    } else {
      tmp = elements;
    }
    elements = tmp;
    Value.call(this);
    this.elements_1 = elements;
  }
  protoOf(ArrayValue).get_elements_vxwh8g_k$ = function () {
    return this.elements_1;
  };
  protoOf(ArrayValue).toKotlin_x907tw_k$ = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.elements_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'at.crowdware.sms.runtime.ArrayValue.toKotlin.<anonymous>' call
      var tmp$ret$0 = item.toKotlin_x907tw_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return destination;
  };
  protoOf(ArrayValue).isTruthy_35rah4_k$ = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.elements_1.isEmpty_y1axqb_k$();
  };
  protoOf(ArrayValue).size_23och_k$ = function () {
    return this.elements_1.get_size_woubt6_k$();
  };
  protoOf(ArrayValue).get_c1px32_k$ = function (index) {
    var tmp0_elvis_lhs = getOrNull(this.elements_1, index);
    return tmp0_elvis_lhs == null ? NullValue_getInstance() : tmp0_elvis_lhs;
  };
  protoOf(ArrayValue).set_n9ia1z_k$ = function (index, value) {
    if (index >= 0 ? index < this.elements_1.get_size_woubt6_k$() : false) {
      this.elements_1.set_82063s_k$(index, value);
    }
  };
  protoOf(ArrayValue).add_kdya1u_k$ = function (value) {
    return this.elements_1.add_utx5q5_k$(value);
  };
  protoOf(ArrayValue).remove_s5muf9_k$ = function (value) {
    return this.elements_1.remove_cedx0m_k$(value);
  };
  protoOf(ArrayValue).removeAt_6niowx_k$ = function (index) {
    return (index >= 0 ? index < this.elements_1.get_size_woubt6_k$() : false) ? this.elements_1.removeAt_6niowx_k$(index) : null;
  };
  protoOf(ArrayValue).contains_h1qgm8_k$ = function (value) {
    return this.elements_1.contains_aljjnj_k$(value);
  };
  protoOf(ArrayValue).component1_7eebsc_k$ = function () {
    return this.elements_1;
  };
  protoOf(ArrayValue).copy_n0kta5_k$ = function (elements) {
    return new ArrayValue(elements);
  };
  protoOf(ArrayValue).copy$default_o50ylq_k$ = function (elements, $super) {
    elements = elements === VOID ? this.elements_1 : elements;
    return $super === VOID ? this.copy_n0kta5_k$(elements) : $super.copy_n0kta5_k$.call(this, elements);
  };
  protoOf(ArrayValue).toString = function () {
    return 'ArrayValue(elements=' + this.elements_1 + ')';
  };
  protoOf(ArrayValue).hashCode = function () {
    return hashCode(this.elements_1);
  };
  protoOf(ArrayValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArrayValue))
      return false;
    var tmp0_other_with_cast = other instanceof ArrayValue ? other : THROW_CCE();
    if (!equals(this.elements_1, tmp0_other_with_cast.elements_1))
      return false;
    return true;
  };
  function ObjectValue(className, fields) {
    var tmp;
    if (fields === VOID) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    } else {
      tmp = fields;
    }
    fields = tmp;
    Value.call(this);
    this.className_1 = className;
    this.fields_1 = fields;
  }
  protoOf(ObjectValue).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  protoOf(ObjectValue).get_fields_dbuqbm_k$ = function () {
    return this.fields_1;
  };
  protoOf(ObjectValue).toKotlin_x907tw_k$ = function () {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = this.fields_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.get_size_woubt6_k$()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.get_key_18j28a_k$();
      // Inline function 'at.crowdware.sms.runtime.ObjectValue.toKotlin.<anonymous>' call
      var tmp$ret$1 = element.get_value_j01efc_k$().toKotlin_x907tw_k$();
      destination.put_4fpzoq_k$(tmp, tmp$ret$1);
    }
    return destination;
  };
  protoOf(ObjectValue).isTruthy_35rah4_k$ = function () {
    return true;
  };
  protoOf(ObjectValue).getField_m983m2_k$ = function (name) {
    var tmp0_elvis_lhs = this.fields_1.get_wei43m_k$(name);
    return tmp0_elvis_lhs == null ? NullValue_getInstance() : tmp0_elvis_lhs;
  };
  protoOf(ObjectValue).setField_7mv1pv_k$ = function (name, value) {
    // Inline function 'kotlin.collections.set' call
    this.fields_1.put_4fpzoq_k$(name, value);
  };
  protoOf(ObjectValue).component1_7eebsc_k$ = function () {
    return this.className_1;
  };
  protoOf(ObjectValue).component2_7eebsb_k$ = function () {
    return this.fields_1;
  };
  protoOf(ObjectValue).copy_9v2lby_k$ = function (className, fields) {
    return new ObjectValue(className, fields);
  };
  protoOf(ObjectValue).copy$default_2v5xfk_k$ = function (className, fields, $super) {
    className = className === VOID ? this.className_1 : className;
    fields = fields === VOID ? this.fields_1 : fields;
    return $super === VOID ? this.copy_9v2lby_k$(className, fields) : $super.copy_9v2lby_k$.call(this, className, fields);
  };
  protoOf(ObjectValue).toString = function () {
    return 'ObjectValue(className=' + this.className_1 + ', fields=' + this.fields_1 + ')';
  };
  protoOf(ObjectValue).hashCode = function () {
    var result = getStringHashCode(this.className_1);
    result = imul(result, 31) + hashCode(this.fields_1) | 0;
    return result;
  };
  protoOf(ObjectValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ObjectValue))
      return false;
    var tmp0_other_with_cast = other instanceof ObjectValue ? other : THROW_CCE();
    if (!(this.className_1 === tmp0_other_with_cast.className_1))
      return false;
    if (!equals(this.fields_1, tmp0_other_with_cast.fields_1))
      return false;
    return true;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NumberValue;
  _.$_$.b = LexError;
  _.$_$.c = ParseError;
  _.$_$.d = RuntimeError;
  _.$_$.e = ScriptEngine;
  _.$_$.f = ScriptError;
  _.$_$.g = NumberValue_init_$Create$;
  _.$_$.h = SMS_getInstance;
  _.$_$.i = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=sms.js.map
