/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.iotextypes.Endorsement', null, global);
goog.exportSymbol('proto.iotextypes.Endorsement.ConsensusVoteTopic', null, global);
goog.exportSymbol('proto.iotextypes.EndorsementSet', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotextypes.Endorsement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotextypes.Endorsement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iotextypes.Endorsement.displayName = 'proto.iotextypes.Endorsement';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotextypes.Endorsement.prototype.toObject = function(opt_includeInstance) {
  return proto.iotextypes.Endorsement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotextypes.Endorsement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotextypes.Endorsement.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    round: jspb.Message.getFieldWithDefault(msg, 2, 0),
    blockhash: msg.getBlockhash_asB64(),
    topic: jspb.Message.getFieldWithDefault(msg, 4, 0),
    endorser: jspb.Message.getFieldWithDefault(msg, 5, ""),
    endorserpubkey: msg.getEndorserpubkey_asB64(),
    decision: jspb.Message.getFieldWithDefault(msg, 7, false),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotextypes.Endorsement}
 */
proto.iotextypes.Endorsement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotextypes.Endorsement;
  return proto.iotextypes.Endorsement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotextypes.Endorsement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotextypes.Endorsement}
 */
proto.iotextypes.Endorsement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRound(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockhash(value);
      break;
    case 4:
      var value = /** @type {!proto.iotextypes.Endorsement.ConsensusVoteTopic} */ (reader.readEnum());
      msg.setTopic(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndorser(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEndorserpubkey(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDecision(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotextypes.Endorsement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotextypes.Endorsement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotextypes.Endorsement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotextypes.Endorsement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRound();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getBlockhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getTopic();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getEndorser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEndorserpubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getDecision();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.iotextypes.Endorsement.ConsensusVoteTopic = {
  PROPOSAL: 0,
  LOCK: 1,
  COMMIT: 2
};

/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.iotextypes.Endorsement.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.iotextypes.Endorsement.prototype.setHeight = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 round = 2;
 * @return {number}
 */
proto.iotextypes.Endorsement.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.iotextypes.Endorsement.prototype.setRound = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes blockHash = 3;
 * @return {string}
 */
proto.iotextypes.Endorsement.prototype.getBlockhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes blockHash = 3;
 * This is a type-conversion wrapper around `getBlockhash()`
 * @return {string}
 */
proto.iotextypes.Endorsement.prototype.getBlockhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockhash()));
};


/**
 * optional bytes blockHash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockhash()`
 * @return {!Uint8Array}
 */
proto.iotextypes.Endorsement.prototype.getBlockhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.iotextypes.Endorsement.prototype.setBlockhash = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional ConsensusVoteTopic topic = 4;
 * @return {!proto.iotextypes.Endorsement.ConsensusVoteTopic}
 */
proto.iotextypes.Endorsement.prototype.getTopic = function() {
  return /** @type {!proto.iotextypes.Endorsement.ConsensusVoteTopic} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.iotextypes.Endorsement.ConsensusVoteTopic} value */
proto.iotextypes.Endorsement.prototype.setTopic = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string endorser = 5;
 * @return {string}
 */
proto.iotextypes.Endorsement.prototype.getEndorser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.iotextypes.Endorsement.prototype.setEndorser = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bytes endorserPubKey = 6;
 * @return {string}
 */
proto.iotextypes.Endorsement.prototype.getEndorserpubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes endorserPubKey = 6;
 * This is a type-conversion wrapper around `getEndorserpubkey()`
 * @return {string}
 */
proto.iotextypes.Endorsement.prototype.getEndorserpubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEndorserpubkey()));
};


/**
 * optional bytes endorserPubKey = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEndorserpubkey()`
 * @return {!Uint8Array}
 */
proto.iotextypes.Endorsement.prototype.getEndorserpubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEndorserpubkey()));
};


/** @param {!(string|Uint8Array)} value */
proto.iotextypes.Endorsement.prototype.setEndorserpubkey = function(value) {
  jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bool decision = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.iotextypes.Endorsement.prototype.getDecision = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.iotextypes.Endorsement.prototype.setDecision = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bytes signature = 8;
 * @return {string}
 */
proto.iotextypes.Endorsement.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes signature = 8;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.iotextypes.Endorsement.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.iotextypes.Endorsement.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.iotextypes.Endorsement.prototype.setSignature = function(value) {
  jspb.Message.setProto3BytesField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotextypes.EndorsementSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotextypes.EndorsementSet.repeatedFields_, null);
};
goog.inherits(proto.iotextypes.EndorsementSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iotextypes.EndorsementSet.displayName = 'proto.iotextypes.EndorsementSet';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotextypes.EndorsementSet.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotextypes.EndorsementSet.prototype.toObject = function(opt_includeInstance) {
  return proto.iotextypes.EndorsementSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotextypes.EndorsementSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotextypes.EndorsementSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockhash: msg.getBlockhash_asB64(),
    round: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endorsementsList: jspb.Message.toObjectList(msg.getEndorsementsList(),
    proto.iotextypes.Endorsement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotextypes.EndorsementSet}
 */
proto.iotextypes.EndorsementSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotextypes.EndorsementSet;
  return proto.iotextypes.EndorsementSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotextypes.EndorsementSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotextypes.EndorsementSet}
 */
proto.iotextypes.EndorsementSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockhash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRound(value);
      break;
    case 3:
      var value = new proto.iotextypes.Endorsement;
      reader.readMessage(value,proto.iotextypes.Endorsement.deserializeBinaryFromReader);
      msg.addEndorsements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotextypes.EndorsementSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotextypes.EndorsementSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotextypes.EndorsementSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotextypes.EndorsementSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRound();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getEndorsementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.iotextypes.Endorsement.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes blockHash = 1;
 * @return {string}
 */
proto.iotextypes.EndorsementSet.prototype.getBlockhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes blockHash = 1;
 * This is a type-conversion wrapper around `getBlockhash()`
 * @return {string}
 */
proto.iotextypes.EndorsementSet.prototype.getBlockhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockhash()));
};


/**
 * optional bytes blockHash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockhash()`
 * @return {!Uint8Array}
 */
proto.iotextypes.EndorsementSet.prototype.getBlockhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.iotextypes.EndorsementSet.prototype.setBlockhash = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint32 round = 2;
 * @return {number}
 */
proto.iotextypes.EndorsementSet.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.iotextypes.EndorsementSet.prototype.setRound = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Endorsement endorsements = 3;
 * @return {!Array<!proto.iotextypes.Endorsement>}
 */
proto.iotextypes.EndorsementSet.prototype.getEndorsementsList = function() {
  return /** @type{!Array<!proto.iotextypes.Endorsement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.iotextypes.Endorsement, 3));
};


/** @param {!Array<!proto.iotextypes.Endorsement>} value */
proto.iotextypes.EndorsementSet.prototype.setEndorsementsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.iotextypes.Endorsement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iotextypes.Endorsement}
 */
proto.iotextypes.EndorsementSet.prototype.addEndorsements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.iotextypes.Endorsement, opt_index);
};


proto.iotextypes.EndorsementSet.prototype.clearEndorsementsList = function() {
  this.setEndorsementsList([]);
};


goog.object.extend(exports, proto.iotextypes);
