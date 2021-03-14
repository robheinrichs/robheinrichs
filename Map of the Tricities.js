(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A2DBD").s().p("EAIvAiHIgHmKIyIgOIgni3IhIhaIAPiJIhzgFIACh4IGAg9IATk2ID1gEIAHlkIhYijInpgDIAFrjIngAHIA7hgIgliCIC7kQIBYh1ICPksIBChwIA+heIAjhcIAAiuIAghtIBVhLICNjeITJE5ICbDjIhdHqIERCUIAIeMIhrFdIiGAAIgDFVIiMAAIhBI1g");
	this.shape.setTransform(121.525,218.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,243.1,436.6), null);


(lib.PortMoody = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10));

	// Port_Moody
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D0AC7").s().p("AoTZoQgMAAgJgJQgJgJAAgMIgIwCQABgMgKgJQgIgJgNAAItiADQgcAAgYgMQgZgNgRgVIiAirQgKgMgOAAIiwgEQgmgBgfgSQghgTgTghIgCgDQgFgHAAgJIAApvQAAgKAFgHIACgEQASgaAagQQAbgRAfgCIACgBIEOgGIAGgBIDTgzQAFAAAEgDICShaQAHgDAGgBIFRgqIAKAAIDnAvQAOAEAMgKICsiLQAIgHACgLQADgLgGgJIhdioIgEgGIhShZQgHgHgBgJQgBgIAEgKQgSgpALgLQAKgGAHgIQAGgIABgGIAugwQALgVgHgXQgIgXgWgKIi9hGIDkkGIQVAAQASAAAJAQIBKCHQAEAGAAAJIgIFJQAAAMgJAIQgJAJgNAAIi5AAQgMAAgKAIQgIAIgBAMIgOEFQAAALgIAIQgHAIgLABIlRAzQgKACgIAJQgHAJAAAKIAABFQAAAMAJAJQAJAJAMAAIA0AAQANAAAJALQAKAJgCAOIgIBCQgDAXAIAWQAIAWAQAQIAfAdQAGAHACAJIAjCfQACAKAJAHQAHAGALABIRDAIQAtgFAJAXQAFANgEAYIgBE8QAAAMAJAJQAJAJAMAAICYAAQAMAAAJgIQAJgIABgLIA3n/QABgMAKgIQAJgIAMABIBRAFQAOABAJgJQAKgJAAgNIAAkfQgBgMAKgJQAJgJAMAAIBPAAQALAAAHgGQAJgFACgKIBhkqQAGgUABBRIgBBwIAASgQAAANAJAJQAJAIAMABIAAAAQANAAAJAJQAJAIAAANIAAMfQAAANgJAIQgJAJgNAAIgJAAQgMAAgJAJQgJAIAAANIAAD+QAAAMgJAJQgIAJgNAAIiDAAQgNAAgJAJQgJAJAAAMIAAArQAAAMgJAJQgJAJgMAAg");
	this.shape.setTransform(201.6,164);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,403.2,328);


(lib.Port_Coquitlam = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		
	}
	this.frame_10 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(10));

	// Port_Coquitlam
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8021B").s().p("A3scHQgvABgrgPQgbgKgcgSIgaiHICQkCIAIiQIijhbIgqhtIAWiMIBvgnIA3hvIgWhWIBYgNIBFgeIAJhOIAjggIA9ABIAMgnIh0jGIAJhaIAkhAIgUiPIAjhNIBGhHICCgHIAAu3IOAAAIAAqKIE5AAIAADrIKXAAIAAGsIQBAIIgoDeQgkBbgzBlQgqBTg2BSQgsBFgaA8QgfBEgaBWQgQA0gfB5IgfB4QgNAvgYAoQgRAegeAmIhOBfQgtA1gzA5Qg4BCgyA/QgfAlggAYQg6AqhGAbQhBAahCAJQhmAmhfA0QguAagvAgIiDBeIkaDIQiKBjghAbQgtAlgZAmIgcAqQgXAigcAgQgoAvgzAqQhMA1hQAjQhJAhhMASIjfAwQhjAPhMAIIhbALQgcAEgXAJIgvASQgaALgaAGQgoAIglAAIgIAAg");
	this.shape.setTransform(174.075,179.9298);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,348.2,359.9);


(lib.PoMo_Label = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// PoMo_Label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2BQIAFgdQAGACAFAAQAIAAAEgEQAEgFAFgPIgthvIAlAAIAVA4IACAGIABAFIABAGIAAAHIACgNIADgKIAVg5IAlAAIg0B9IgDAHIgHAOQgBAEgEAEQgFAFgIADQgJADgJAAQgKAAgJgDg");
	this.shape.setTransform(70.875,58.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguBHQgPgRAAgcQAAgaAQgRQAPgSAYAAQAXAAALASIAAhGIAiAAIAACsIgiAAIAAgQQgJATgaAAQgYAAgPgRgAgTACQgIAKAAAOQAAAPAIAJQAJAJALAAQANAAAIgJQAIgJAAgPQAAgOgIgKQgIgIgNAAQgLAAgJAIg");
	this.shape_1.setTransform(57.975,53.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtAtQgSgSAAgbQAAgaASgSQASgRAbAAQAcAAASARQASASAAAaQAAAbgSASQgSASgcAAQgbAAgSgSgAgVgXQgJAJAAAOQAAAPAJAIQAJAKAMAAQANAAAJgKQAJgIAAgPQAAgNgJgKQgJgKgNAAQgMAAgJAKg");
	this.shape_2.setTransform(44.075,55.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtAtQgSgSAAgbQAAgaASgSQASgRAbAAQAcAAASARQASASAAAaQAAAbgSASQgSASgcAAQgbAAgSgSgAgVgXQgJAJAAAOQAAAPAJAIQAJAKAMAAQANAAAJgKQAJgIAAgPQAAgNgJgKQgJgKgNAAQgMAAgJAKg");
	this.shape_3.setTransform(30.025,55.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABBBWIgLhbIgBgTIAAgLQgBAQgFANIgjBcIgXAAIgjhcIgEgPIgDgOIABAHIAAAOIAAAJIgMBbIgjAAIAXisIAhAAIAnBnIADANIABAPIAAABIAAgBIABgPIAEgNIAmhnIAiAAIAXCsg");
	this.shape_4.setTransform(12.425,52.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQA+QgEgGgCgGQgBgFAAgNIAAgwIgSAAIAAgdIASAAIAAgdIAhAAIAAAdIAdAAIAAAdIgdAAIAAAqIAAAKQACAMANAAQAFAAAHgCIAFAZQgQAEgMAAQgTAAgLgNg");
	this.shape_5.setTransform(56.225,19.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmA8IAAh0IAiAAIAAATQADgKAIgHQAIgFANAAIAGAAIAFABIgFAhQgHgCgGAAQgNABgHAIQgCAFgBAEQgCAFAAAHIAAA5g");
	this.shape_6.setTransform(49,20.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAtQgSgRAAgcQAAgbASgRQASgRAbAAQAcAAASARQASARAAAbQAAAcgSARQgSARgcAAQgbAAgSgRgAgVgXQgJAKAAANQAAAOAJAJQAJAKAMAAQANAAAJgKQAJgJAAgOQAAgNgJgKQgJgJgNAAQgMAAgJAJg");
	this.shape_7.setTransform(36.975,20.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3BWIAAirIA0AAQAMgBAJACQARADALAOQAKAOAAAVQABAZgOAMQgPAOgaAAIgWAAIAABDgAgUgJIAOAAQANABAGgHQAIgHAAgLQAAgYgaAAIgPAAg");
	this.shape_8.setTransform(25.15,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PoMo_Label, new cjs.Rectangle(0,0,78.4,69.1), null);


(lib.PocoLabel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Poco_Label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA1A8IAAhBIAAgKQAAgHgFgDQgEgEgHAAQgJAAgGAHQgEAGAAANIAAA/IgiAAIAAhCIAAgJQgBgHgFgDQgEgEgGAAQgKAAgFAHQgFAHAAAMIAAA/IgjAAIAAh1IAjAAIAAARQAMgUAXABQAVAAAKASQAOgSAWAAQAUgBAMAOQADAGABAGIACAUIAABKg");
	this.shape.setTransform(102,55.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAtQgPgSAAgbQAAgaAPgRQAQgSAXAAQASAAAMAMIAEAHIAAgRIAjAAIAAB1IgjAAIAAgOQgLASgXAAQgYAAgPgRgAgUgXQgIAJAAAOQAAAOAIAKQAIAKANAAQANAAAIgKQAIgKAAgOQAAgNgJgKQgIgKgNAAQgLAAgJAKg");
	this.shape_1.setTransform(84.875,55.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQBWIAAisIAhAAIAACsg");
	this.shape_2.setTransform(75.175,52.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQA+QgEgGgCgGQgBgFAAgNIAAgwIgSAAIAAgdIASAAIAAgdIAhAAIAAAdIAdAAIAAAdIgdAAIAAArIAAAJQACALANAAQAFAAAHgBIAFAZQgQAEgMAAQgTAAgLgNg");
	this.shape_3.setTransform(68.575,54.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBVIAAh1IAiAAIAAB1gAgOg1QgFgFgBgHQABgIAFgFQAHgGAHAAQAJAAAFAGQAHAFAAAIQgBAHgFAFQgGAGgJAAQgHAAgHgGg");
	this.shape_4.setTransform(61.85,53.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmAwQgKgHgDgJQgDgJgBgQIAAhDIAjAAIAABAIAAAKQABAGAHAFQAFAEAHAAQAJAAAHgHQADgDABgDIABgMIAAhAIAiAAIAABDQAAANgCAIQgFAPgOAJQgOAJgUAAQgXAAgPgNg");
	this.shape_5.setTransform(52.35,55.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbBTIAAg8QgGAKgIAEQgKAFgLgBQgXABgPgSQgPgRAAgaQAAgbAPgTQAQgRAXAAQAWAAAMASIAAgPIAjAAIAACigAgTgrQgJAIAAAPQAAAPAJAJQAHAJANAAQANAAAIgJQAHgIAAgQQAAgOgHgJQgJgKgNAAQgMAAgHAKg");
	this.shape_6.setTransform(38.4,57.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAtQgSgSAAgbQAAgaASgSQASgRAbAAQAcAAASARQASASAAAaQAAAbgSASQgSASgcAAQgbAAgSgSgAgVgXQgJAJAAAOQAAAPAJAIQAJAKAMAAQANAAAJgKQAJgIAAgPQAAgNgJgKQgJgKgNAAQgMAAgJAKg");
	this.shape_7.setTransform(24.525,55.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwBAQgYgYAAgoQAAgmAZgZQAagaAlAAIAQABIAQAFIAMAEIANAJIgSAaIgHgEQgNgIgQAAQgXAAgQARQgQAPAAAYQAAAZAQAQQAQARAXAAIALgBIAKgEIAHgDIAIgGIASAaIgLAIIgJAEQgTAIgUAAQglAAgZgag");
	this.shape_8.setTransform(10.025,52.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQA+QgEgGgCgGQgBgFAAgNIAAgwIgSAAIAAgdIASAAIAAgdIAhAAIAAAdIAdAAIAAAdIgdAAIAAAqIAAAKQACAMANAAQAFAAAHgCIAFAZQgQAEgMAAQgTAAgLgNg");
	this.shape_9.setTransform(74.025,19.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnA8IAAh0IAjAAIAAATQAEgKAGgHQAJgFANAAIAFAAIAGABIgGAhQgGgCgGAAQgMABgIAIQgCAFgCAEQgBAFAAAHIAAA5g");
	this.shape_10.setTransform(66.8,20.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgtAtQgSgRAAgcQAAgbASgRQASgRAbAAQAcAAASARQASARAAAbQAAAcgSARQgSARgcAAQgbAAgSgRgAgVgXQgJAKAAANQAAAOAJAJQAJAKAMAAQANAAAJgKQAJgJAAgOQAAgNgJgKQgJgJgNAAQgMAAgJAJg");
	this.shape_11.setTransform(54.775,20.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag4BWIAAirIA1AAQAMgBAJACQASADAKAOQALAOgBAVQAAAZgOAMQgOAOgZAAIgXAAIAABDgAgUgJIAOAAQANABAGgHQAIgHAAgLQAAgYgaAAIgPAAg");
	this.shape_12.setTransform(42.95,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PocoLabel, new cjs.Rectangle(0,0,114,69.1), null);


(lib.Coquitlam_Label = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Coquitlam_Label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA1A8IAAhBIAAgLQAAgFgFgFQgEgDgHAAQgJAAgGAHQgEAHAAANIAAA+IgiAAIAAhCIAAgKQgBgFgFgFQgEgDgGAAQgKAAgFAHQgFAHAAAMIAAA/IgjAAIAAh0IAjAAIAAAQQAMgTAXAAQAVgBAKATQAOgTAWABQAUAAAMANQADAGABAFIACAVIAABKg");
	this.shape.setTransform(498.45,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAsQgPgRAAgbQAAgaAPgRQAQgSAXAAQASAAAMAMIAEAHIAAgQIAjAAIAAB0IgjAAIAAgPQgLATgXAAQgYAAgPgSgAgUgXQgIAKAAANQAAAOAIAKQAIAJANAAQANAAAIgJQAIgKAAgOQAAgNgJgKQgIgJgNAAQgLAAgJAJg");
	this.shape_1.setTransform(481.325,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_2.setTransform(471.625,17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQA+QgEgGgCgGQgBgFAAgNIAAgwIgSAAIAAgdIASAAIAAgdIAhAAIAAAdIAdAAIAAAdIgdAAIAAAqIAAAKQACAMANAAQAFAAAHgCIAFAZQgQAEgMAAQgTAAgLgNg");
	this.shape_3.setTransform(465.025,19.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBVIAAh1IAiAAIAAB1gAgOg1QgFgFgBgHQABgIAFgFQAHgGAHAAQAJAAAFAGQAHAFAAAIQgBAHgFAFQgGAGgJAAQgHAAgHgGg");
	this.shape_4.setTransform(458.3,18.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmAwQgKgHgDgJQgDgJgBgQIAAhDIAjAAIAABAIAAAKQABAGAHAFQAFAEAHAAQAJAAAHgHQADgDABgDIABgMIAAhAIAiAAIAABDQAAANgCAIQgFAPgOAJQgOAJgUAAQgXAAgPgNg");
	this.shape_5.setTransform(448.8,20.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbBTIAAg7QgGAJgIAEQgKAEgLABQgXgBgPgRQgPgRAAgaQAAgcAPgSQAQgRAXAAQAWAAAMASIAAgPIAjAAIAACigAgTgsQgJAKAAAOQAAAQAJAIQAHAJANAAQANAAAIgJQAHgIAAgQQAAgOgHgKQgJgJgNAAQgMAAgHAJg");
	this.shape_6.setTransform(434.85,22.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAtQgSgRAAgcQAAgbASgRQASgRAbAAQAcAAASARQASARAAAbQAAAcgSARQgSARgcAAQgbAAgSgRgAgVgXQgJAKAAANQAAAOAJAJQAJAKAMAAQANAAAJgKQAJgJAAgOQAAgNgJgKQgJgJgNAAQgMAAgJAJg");
	this.shape_7.setTransform(420.975,20.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwBAQgYgZAAgmQAAgnAZgZQAagaAlAAIAQABIAQAFIAMAEIANAJIgSAbIgHgFQgNgIgQAAQgXAAgQAQQgQARAAAXQAAAZAQAQQAQAQAXAAIALgBIAKgCIAHgFIAIgFIASAaIgLAIIgJAEQgTAIgUAAQglAAgZgag");
	this.shape_8.setTransform(406.475,17.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA1A8IAAhBIAAgLQAAgFgEgFQgFgDgHAAQgKAAgEAHQgGAHAAANIAAA+IghAAIAAhCIAAgKQgBgFgEgFQgFgDgGAAQgKAAgFAHQgFAHAAAMIAAA/IgiAAIAAh0IAiAAIAAAQQAMgTAXAAQAVgBAKATQAOgTAWABQAVAAAKANQAFAGABAFIAAAVIAABKg");
	this.shape_9.setTransform(101.95,372.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguAsQgPgRAAgbQAAgaAPgRQAQgSAXAAQASAAAMAMIAEAHIAAgQIAjAAIAAB0IgjAAIAAgPQgLATgXAAQgYAAgPgSgAgUgXQgIAKAAANQAAAOAIAKQAIAJANAAQANAAAIgJQAIgKAAgOQAAgNgJgKQgIgJgNAAQgLAAgJAJg");
	this.shape_10.setTransform(84.825,373.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_11.setTransform(75.125,370.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQA+QgEgGgCgGQgBgFAAgNIAAgwIgSAAIAAgdIASAAIAAgdIAhAAIAAAdIAdAAIAAAdIgdAAIAAAqIAAAKQACAMANAAQAFAAAHgCIAFAZQgQAEgMAAQgTAAgLgNg");
	this.shape_12.setTransform(68.525,371.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQBVIAAh1IAhAAIAAB1gAgNg1QgHgFABgHQgBgIAHgFQAFgGAIAAQAIAAAHAGQAFAFAAAIQABAHgGAFQgGAGgJAAQgIAAgFgGg");
	this.shape_13.setTransform(61.8,370.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnAwQgIgHgEgJQgEgJAAgQIAAhDIAjAAIAABAIAAAKQACAGAFAFQAGAEAHAAQAJAAAHgHQADgDABgDIABgMIAAhAIAjAAIAABDQgBANgCAIQgEAPgPAJQgOAJgUAAQgXAAgQgNg");
	this.shape_14.setTransform(52.3,373.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAbBTIAAg7QgFAJgKAEQgJAEgKABQgYgBgPgRQgPgRAAgaQAAgcAPgSQAPgRAYAAQAWAAAMASIAAgPIAjAAIAACigAgUgsQgHAKgBAOQABAQAHAIQAJAJAMAAQANAAAIgJQAIgIAAgQQAAgOgIgKQgJgJgNAAQgMAAgIAJg");
	this.shape_15.setTransform(38.35,375.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtAtQgSgRAAgcQAAgbASgRQASgRAbAAQAcAAASARQASARAAAbQAAAcgSARQgSARgcAAQgbAAgSgRgAgVgXQgJAKAAANQAAAOAJAJQAJAKAMAAQANAAAJgKQAJgJAAgOQAAgNgJgKQgJgJgNAAQgMAAgJAJg");
	this.shape_16.setTransform(24.475,373.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgwBAQgYgZAAgmQAAgnAZgZQAagaAlAAIAQABIAQAFIAMAEIANAJIgSAbIgHgFQgNgIgQAAQgXAAgQAQQgQARAAAXQAAAZAQAQQAQAQAXAAIALgBIAKgCIAHgFIAIgFIASAaIgLAIIgJAEQgTAIgUAAQglAAgZgag");
	this.shape_17.setTransform(9.975,370.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,510.6,386.5);


(lib.Coquitlam = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_10 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10));

	// Coquitlam
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A66C7").s().p("EgiRA1FQgtgDhJgKQhzgPhvgfQihgvhOgRQkQg8j4gHQilgFieAQIBgkHIgng0Il4hKIjjiDIhzidIAI99MAkMAAAIAAhnIDAAAIAAk6IBFAAIAAtbIg8AAMgABgq8MBeVAAFIhtBmIhaCBIgaBdIgeCDIgoA+IhEA2IhlC9IgeBrIAHA4IhKBCIAQBDIAJBfIhPChIilC/IiuCZIgiA5IA4DAIghA2IgsBeIBbDcIB2DjICJBsIDkBeIBIA5IgTBZIkTBXIrhDNIk/CUIi+C/Ih1DEIv7AFIAAmrIqYAAIAAjrIk6AAIAAKJIt/AAIAAO3IhBACIh1AjIg1B2IAVCQIgtCaIB0DGIhKAmIgjAgIgsBnIh6ASIAXBWIg3BvIhwAnIgeBcIAyCdICkBbIgWC7IhuCgIggBVIAqB4QgugBglADQg5AGg5ASQgXAIhBAaQgrARg0ARIiFAnQhjAehJAPQh7AZh2AEIgnABQgxAAgwgEg");
	this.shape.setTransform(428.1,340.1036);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,856.2,680.2);


(lib.Belcarra_Label = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Belcarra_Label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAsQgPgRAAgbQAAgaAPgRQAQgSAXAAQASAAAMAMIAEAHIAAgQIAjAAIAAB0IgjAAIAAgPQgLATgXAAQgYAAgPgSgAgUgXQgIAKAAANQAAAOAIAKQAIAJANAAQANAAAIgJQAIgKAAgOQAAgNgJgKQgIgJgNAAQgLAAgJAJg");
	this.shape.setTransform(83.025,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA8IAAh0IAjAAIAAATQAEgKAGgHQAJgFANAAIAFAAIAHABIgHAhQgGgCgGAAQgMABgIAIQgCAFgBAEQgCAFAAAHIAAA5g");
	this.shape_1.setTransform(73.25,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmA8IAAh0IAiAAIAAATQADgKAIgHQAIgFANAAIAGAAIAGABIgGAhQgHgCgGAAQgNABgHAIQgCAFgBAEQgCAFAAAHIAAA5g");
	this.shape_2.setTransform(64.95,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguAsQgPgRAAgbQAAgaAPgRQAQgSAXAAQASAAAMAMIAEAHIAAgQIAjAAIAAB0IgjAAIAAgPQgLATgXAAQgYAAgPgSgAgUgXQgIAKAAANQAAAOAIAKQAIAJANAAQANAAAIgJQAIgKAAgOQAAgNgJgKQgIgJgNAAQgLAAgJAJg");
	this.shape_3.setTransform(52.675,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAtQgRgSAAgaQAAgbASgRQASgSAbAAQARAAATAJIgLAbQgNgGgKAAQgNAAgIAJQgJAJAAANQAAAPAJAIQAHAJAOAAQAMAAALgGIALAYIgIAFQgOAHgSAAQgYAAgSgRg");
	this.shape_4.setTransform(40.75,20.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_5.setTransform(32.275,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrAtQgRgQAAgcQAAgaARgSQASgSAaAAQAbAAAQARQARASAAAcIAAAJIhXAAQABAMAIAHQAIAHAKAAQAJAAAJgFQAIgFAGgIIAYARQgLAOgNAGQgNAGgSAAQgbAAgSgRgAgagLIA1AAQgBgMgHgHQgIgGgLAAQgVAAgFAZg");
	this.shape_6.setTransform(22.725,20.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BWIAAirIA0AAIAVABQAQACAKAMQAKAMAAARQAAAZgWAKQARADAJAKQAKAMAAARQAAAYgQANQgQAOgbgBgAgZA6IAWAAQANAAAIgHQAIgFAAgMQAAgIgFgGQgFgGgJgCIgGAAIgGgBIgUAAgAgZgPIAPAAQALAAAHgGQAGgGAAgKQAAgJgHgHQgGgEgNAAIgNAAg");
	this.shape_7.setTransform(9.325,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Belcarra_Label, new cjs.Rectangle(0,0,92.4,34.2), null);


(lib.Belcarra = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10));

	// Belcarra
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7D22").s().p("AuTOkQgjgEgagYQgagYgHgjIgLg5QgJgrAIgqIAUh8QAIgwAfgpIBliCQAUgbAbgSIBlhDQAXgQARgVIBsiFQAPgTAHgTIA6iTQAJgYATgQQASgQAZgGIB6gfQAugLArAMICdAsQAlAKAYAaICnCsIEglSQAPgSALgTIAQgcQAMgUAWgHIBXgaIgFguIhdh4QgMgHgPgXQgOgYgBgNIgBg1QgEgPAJgYQAIgWANgLIAxgnIAAgnIgihnIHtgJIgFLkIo+AAIj2D8ID7BmQgwA6gaBDQgSAtgIAzIBqBUIBrDBIjVCxIjyg9IlRArIioBhIjZA0IiSADg");
	this.shape.setTransform(102.5742,95.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.2,190.5);


(lib.Anmore_Label = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Anmore_Label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAtQgRgQAAgcQAAgaARgSQASgSAaAAQAbAAAQARQARASAAAcIAAAJIhXAAQABAMAIAHQAIAHAKAAQAJAAAJgFQAIgFAGgIIAYARQgLAOgNAGQgNAGgSAAQgbAAgSgRgAgagLIA1AAQgBgMgHgHQgIgGgLAAQgVAAgFAZg");
	this.shape.setTransform(78.875,20.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA8IAAh0IAjAAIAAATQAEgKAGgHQAJgFANAAIAFAAIAHABIgHAhQgGgCgGAAQgMABgIAIQgCAFgCAEQgBAFAAAHIAAA5g");
	this.shape_1.setTransform(69.2,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtAtQgSgRAAgcQAAgbASgRQASgRAbAAQAcAAASARQASARAAAbQAAAcgSARQgSARgcAAQgbAAgSgRgAgVgXQgJAKAAANQAAAOAJAJQAJAKAMAAQANAAAJgKQAJgJAAgOQAAgNgJgKQgJgJgNAAQgMAAgJAJg");
	this.shape_2.setTransform(57.175,20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA1A8IAAhBIAAgLQgBgFgEgFQgEgDgHAAQgJAAgGAHQgEAHAAANIAAA+IgiAAIAAhCIAAgKQgBgFgFgFQgEgDgGAAQgKAAgFAHQgFAHAAAMIAAA/IgjAAIAAh0IAjAAIAAAQQAMgTAXAAQAVgBAKATQAOgTAWABQAUAAAMANQADAGABAFIABAVIAABKg");
	this.shape_3.setTransform(40.25,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUA8IAAhAIAAgMQgBgGgFgFQgFgDgIAAQgJAAgGAHQgFAIAAANIAAA+IgjAAIAAh0IAjAAIAAARQAEgKAKgFQAJgGANABQASAAALAMQAFAGADAHQABAIAAANIAABJg");
	this.shape_4.setTransform(23.8,20.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAtBWIgMglIhAAAIgOAlIglAAIBCirIAhAAIBCCrgAAAgwIgBAJIgDAJIgSA1IAtAAIgSg1IgDgJIgCgJIAAgHIAAAHgAAAg3IAAgDg");
	this.shape_5.setTransform(9.625,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Anmore_Label, new cjs.Rectangle(0,0,87.7,34.2), null);


(lib.Anmore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Anmore
	this.instance = new lib.Path();
	this.instance.setTransform(121.5,218.2,1,1,0,0,0,121.5,218.2);
	this.instance.alpha = 0.7891;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243.1,436.6);


// stage content:
(lib.MapoftheTricities = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.Belcarra_Label.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.Belcarra.play();
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.Anmore_Label.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.Anmore.play();
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.PoMo_Label.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.Port_Moody.play();
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.PocoLabel.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.Port_Coquitlam.play();
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.Coquitlam_Label.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.Coquitlam.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Coquitlam_Label
	this.Coquitlam_Label = new lib.Coquitlam_Label();
	this.Coquitlam_Label.name = "Coquitlam_Label";
	this.Coquitlam_Label.setTransform(566.6,648,1,1,0,0,0,255.2,193.2);
	new cjs.ButtonHelper(this.Coquitlam_Label, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Coquitlam_Label).wait(1));

	// Belcarra_Label
	this.Belcarra_Label = new lib.Belcarra_Label();
	this.Belcarra_Label.name = "Belcarra_Label";
	this.Belcarra_Label.setTransform(153,436.55,1,1,0,0,0,46.2,17.1);
	new cjs.ButtonHelper(this.Belcarra_Label, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Belcarra_Label).wait(1));

	// Anmore_Label
	this.Anmore_Label = new lib.Anmore_Label();
	this.Anmore_Label.name = "Anmore_Label";
	this.Anmore_Label.setTransform(390.7,420.8,1,1,0,0,0,43.9,17.1);
	new cjs.ButtonHelper(this.Anmore_Label, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Anmore_Label).wait(1));

	// PoMo_Label
	this.PoMo_Label = new lib.PoMo_Label();
	this.PoMo_Label.name = "PoMo_Label";
	this.PoMo_Label.setTransform(414.5,590.6,1,1,0,0,0,39.2,34.6);
	new cjs.ButtonHelper(this.PoMo_Label, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.PoMo_Label).wait(1));

	// PocoLabel
	this.PocoLabel = new lib.PocoLabel();
	this.PocoLabel.name = "PocoLabel";
	this.PocoLabel.setTransform(741.8,722,1,1,0,0,0,57,34.6);
	new cjs.ButtonHelper(this.PocoLabel, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.PocoLabel).wait(1));

	// Water_Labels
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF74CC").s().p("ArqT0QgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgArqSGQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgArqQYQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgArqOqQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgArqM8QgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgArqLOQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgArqJgQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgAS4IyQgDgDAAgEIAAgUQAAgFADgCQADgDAEAAQAEAAADADQADACAAAFIAAAUQAAAEgDADQgDACgEABQgEgBgDgCgAzFIYQgCgDgBgDQgBgEACgDIAkhBQADgDADgBQAEgCAEACQAEACABAEQABAEgCAEIgfA3IABAFQAAAEgDADQgDADgEAAIgFAAIAAAAQgEAAgDgCgAyiIWQgDgDAAgEQAAgEADgDQADgDAEAAIBQgBQAEAAADADQADADAAAEQAAAEgDADQgCADgFAAIhQABIAAAAQgEAAgDgDgAw0IUQgDgDAAgEQAAgEADgDQADgDAEAAIBQgBQAEAAADADQADADAAAEQAAAEgDADQgCADgFAAIhQABIAAAAQgEAAgDgDgAvGISQgDgDAAgEQAAgEADgDQADgDAEAAIBQgBQAEAAADADQADADAAAEQAAAEgDADQgCADgFAAIhQABIAAAAQgEAAgDgDgAtYIRQgDgDAAgEQAAgEADgDQADgDAEAAIBQgBQAEAAADADQADADAAAEQAAAEgDADQgCADgFAAIhQABIAAAAQgEAAgDgDgAS3IAQgDgDAAgEIgBhQQAAgEADgDQADgDAEAAQAEgBADADQADADAAAFIABBQQAAAEgDADQgDACgEABIAAAAQgEAAgDgDgAyQG+QgDgCgBgEQgBgEABgEIADgFIgYg8QgBgEABgDQACgEAEgCQAEgBAEABQADACACAEIAZBAIABAFIgBAEIgFAJQgCADgEACIgDAAIgFgBgAS1GSQgDgDAAgEIgBhQQAAgEADgDQADgDAEAAQAEgBADADQADADAAAFIABBQQAAAEgDADQgDACgEABIAAAAQgEAAgDgDgAyuFZQgEgCgCgEIgHgRIAAgEIABgEIAeg2QACgDAEgBQAEgCADACQAEACABAEQABAEgCAEIgbAxIAFANQACAEgCADQgCAEgEACIgDABIgEgBgAS0EkQgDgDAAgEIgBhQQAAgEACgDQADgDAFAAQAEgBADADQADADAAAFIABBQQAAAEgDADQgDACgEABIgBAAQgDAAgDgDgAyJD4QgDgCgCgEQgBgEACgDIAHgOIABgCIAmg0QADgDAEgBQAEAAADACQADACABAFQABAEgDADIgmAzIgGAOQgCADgEACIgDAAIgFgBgASzC2QgDgDAAgEIgBhQQAAgEACgDQADgDAFAAQAEgBADADQADADAAAFIABBQQAAAEgDADQgDACgEABIgBAAQgDAAgDgDgAxLCdQgDgCgBgEQAAgFACgDIAwhAQADgDAEgBQAEgBADADQAEACAAAFQABAEgDADIgwBAQgCADgEABIgCAAQgDAAgDgCgASyBIQgDgDAAgEIgBhPQAAgEACgDQADgDAFAAQAEgBADADQADADAAAFIABBPQAAAEgDADQgDACgEABIgBAAQgDAAgDgDgAwJBFQgDgCgBgEQAAgFACgDIAwg/QADgDAEgBQAEgBADADQAEACAAAFQABADgDADIgwBAQgCADgEABIgCAAQgDAAgDgCgAvHgSQgDgCgBgEQAAgEACgEIAvhBQADgDAEgBQAEAAADACQADACABAFQABADgDAEIgvBBQgCADgEABIgCAAQgDAAgDgCgASxglQgDgDAAgEIgBgxIgRgIQgDgCgCgEQgBgEACgDQACgEADgBQAEgCAEACIAWALIAEAEQACACAAADIABA2QAAAEgDAEQgDACgEABIAAAAQgEAAgDgDgAuJhsQgEgCgBgDQgBgEABgEIAhhJQACgEAEgBQAEgCADACQAEACABAEQACADgCAEIghBJQgBAEgEABIgEABIgEgBgASBhyIhHgkQgEgCgBgEQgCgEACgDQACgEAEgBQAEgCAEACIBHAkQAEACABAEQACAEgCAEQgCADgEACIgDAAIgFgBgAQfijIhIgkQgEgCgBgEQgCgEACgDQACgEAEgBQAEgCAEACIBIAkQADACACAEQABAEgCAEQgCADgEACIgDAAIgEgBgAtcjQQgEgCgBgEQgBgEABgDIAhhJQACgEAEgCQAEgBADACQAEABABAEQACAEgCAEIghBJQgBADgEACIgEAAIgEAAgAO8jUIgegPQgDgBgCgDQgBgEAAgDIAJgvQABgEAEgCQADgDAEABQAEABACAEQADADgBAEIgIAnIAYAMQADACACAEQABAEgCAEQgCADgEACIgDAAIgEgBgAOvkuQgEgBgCgDQgCgEAAgEIAPhOQABgEAEgCQADgDAEABQAEABACAEQADADgBAEIgPBOQgBAEgDACQgDACgDAAIgCAAgAsuk0QgDgCgCgEQgBgEACgEIAkhHQACgEAEgBQAEgCAEACQADACACAEQABAEgCAEIgkBHQgCAEgEABIgDABIgFgBgAr7mXQgEgCgBgEQgCgEACgDIAUgoIABgCIAUgcQACgDAEgBQAFAAADACQADACABAEQABAEgDAEIgTAbIgUAoQgCADgEACIgDAAIgEgBgAPEmZQgEgBgCgDQgCgEAAgEIAQhPQABgEAEgCQADgDAEABQAEABACAEQADADgBAEIgQBPQgBAEgDACQgDACgDAAIgCAAgArDn0QgDgCgBgEQAAgFACgDIAwhAQADgEAEAAQAEgBADADQAEACAAAEQABAEgDAEIgwBAQgCADgEABIgCAAQgDAAgDgCgAPaoFQgEgBgCgDQgCgEAAgEIAPhPQABgEAEgCQADgDAEABQAEABACAEQADADgBAEIgPBPQgBAEgDACQgDACgDAAIgCAAgAqGpOQgEgBgCgEQgCgEACgEQAQguAIgbQABgEAEgCQAEgCADABQAEABACAEQACADgBAEQgIAcgQAvQgCAEgEACIgEABIgDgBgAPvpxQgEgBgCgDQgCgEAAgEIAQhOQABgEAEgDQADgCAEABQAEABACADQADADgBAFIgQBOQgBAEgDACQgDACgDAAIgCAAgApqq3QgDgDAAgEIAAgCIAAgCQACgOgBg+QAAgEADgDQADgDAEAAQAEgBADADQADADAAAEQABBBgCAPIAAABQAAAEgDADQgDACgEABQgEgBgDgCgAQArcQgEAAgDgEIgvhBQgCgDAAgEQABgEADgCQAEgDAEABQAEAAACAEIAvBBQADADgBAEQgBAEgDADQgDABgDAAIgBAAgAppslQgDgDAAgEIgBguIAAgDIAKghQABgEAEgCQADgCAEABQAEABACAEQADADgCAEIgJAgIABAsQAAAEgDAEQgCACgFABIAAAAQgEAAgDgDgAO/s1QgEAAgDgEIgvhBQgDgDABgEQABgEADgCQADgDAEABQAEAAADAEIAvBBQADADgBAEQgBAEgDADQgDABgDAAIgBAAgAN9uOQgEAAgCgEIgVgcIgjgKQgEgBgCgDQgCgEABgEQABgEAEgCQADgCAEABIAmAKQAEABACADIAXAgQACADgBAEQAAAEgEADQgCABgDAAIgCAAgApUuPQgEgBgCgEQgCgDABgEIAOgvQABgDACgCIAXgUQADgDAEABQAFAAACADQADADAAAEQgBAEgDADIgVASIgNAsQgBAEgEACIgEABIgDAAgAMiu/IhOgUQgEgBgCgDQgCgEABgEQABgEAEgCQADgCAEABIBOAUQAEABACAEQACADgBAEQgBAEgDACQgDACgCAAIgDgBgAK3vbIhNgUQgEgBgCgDQgCgEABgEQABgEAEgCQADgCAEABIBNAUQAEABACAEQACADgBAEQgBAEgDACQgDACgCAAIgDgBgAoWvlQgEgBgDgDQgDgDABgEQAAgEADgDIAmghIAOgWQADgEAEgBQAEgBADADQAEACAAAEQABAEgCAEIgPAXIgCACIgnAiQgCADgEAAIgBAAgAJNv2IhOgUQgEgBgCgDQgCgEABgEQABgEAEgCQADgCAEABIBOAUQAEABACAEQACADgBAEQgBAEgDACQgDACgCAAIgDgBgAHiwRIhOgUQgEgBgCgEQgCgEABgDQABgEAEgCQADgDAEABIBOAUQAEABACAEQACAEgBAEQgBADgDADQgDABgCAAIgDAAgAF3wsIhNgUQgEgBgCgEQgCgEABgDQABgEAEgCQADgDAEABIBNAUQAEABACAEQACAEgBAEQgBADgDADQgDABgCAAIgDAAgAnVw5QgDgDgBgEQgBgEACgDIArhEQACgEAEgBQAEgBAEADQAEACAAAEQABAEgCADIgrBEQgCAEgEABIgCAAQgDAAgDgBgAENxHIhNgUQgEgBgCgEQgCgEABgDQABgEAEgCQADgDAEABIBNAUQAEABACAEQACAEgBAEQgBADgDADQgDABgCAAIgDAAgACjxiIhOgUQgEgBgCgEQgCgEABgDQABgEAEgCQADgDAEABIBOAUQAEABACAEQACAEgBAEQgBADgDADQgDABgCAAIgDAAgAA4x9IhNgUQgEgBgCgEQgCgEABgDQABgEAEgCQADgDAEABIBNAUQAEABACAEQACAEgBAEQgBADgDADQgDABgCAAIgDAAgAmayWQgDgDgBgEQgBgEACgDIArhEQACgEAEgBQAEgBAEADQAEACAAAEQABAEgCADIgrBEQgCAEgEABIgCAAQgDAAgDgBgAgyyYIhOgUQgEgBgCgEQgCgEABgDQABgEAEgCQADgDAEABIBOAUQAEABACAEQACAEgBAEQgBADgDADQgDABgCAAIgDAAgAidyzIhOgUQgEgBgCgEQgCgEABgDQABgEAEgCQADgDAEABIBOAUQAEABACAEQACAEgBAEQgBADgDADQgDABgCAAIgDAAgAkIzOIhOgUQgEgBgCgEQgCgEABgDQABgEAEgCQADgDAEABIBOAUQAEABACAEQACAEgBAEQgBADgDADQgDABgCAAIgDAAg");
	this.shape.setTransform(344.777,237.8983);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAuQgEgEgBgEIgBgOIAAgkIgNAAIAAgWIANAAIAAgVIAZAAIAAAVIAVAAIAAAWIgVAAIAAAgIAAAHQABAJAKAAIAJgCIADATQgLADgJAAQgOABgIgLg");
	this.shape_1.setTransform(310.125,567.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAiQgNgMAAgVQAAgTANgOQANgOAUAAQAUAAAMAOQANANAAAVIAAAGIhCAAQACAJAGAGQAGAFAHAAQAGAAAHgEQAHgEAEgGIASANQgJAKgJAFQgKAFgOAAQgUAAgNgNgAgUgHIAoAAQgBgJgFgGQgFgFgJAAQgQAAgEAUg");
	this.shape_2.setTransform(302.125,568.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBBIAAiBIAZAAIAACBg");
	this.shape_3.setTransform(294.925,566.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAtIAAgwIAAgIQgBgFgEgEQgDgDgGAAQgHAAgEAGQgFAGAAAKIAAAuIgZAAIAAhXIAZAAIAAANQAEgIAHgDQAHgEAJAAQAOAAAJAJQADAEACAGQABAGAAAJIAAA3g");
	this.shape_4.setTransform(287.875,568.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMBBIAAiBIAZAAIAACBg");
	this.shape_5.setTransform(280.775,566.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA1QgLgNAAgUQAAgUAMgNQAMgNARAAQASAAAIAOIAAg1IAaAAIAACBIgaAAIAAgMQgHAOgTAAQgSAAgMgNgAgOACQgGAHAAALQAAALAGAHQAGAHAJAAQAJAAAGgHQAHgHAAgLQAAgLgHgHQgGgGgJAAQgJAAgGAGg");
	this.shape_6.setTransform(267.975,566.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAtIAAhXIAaAAIAAAPQACgIAGgFQAHgEAJAAIAEAAIAFABIgFAZIgJgCQgJAAgGAHQgCADgBAEIgBAIIAAArg");
	this.shape_7.setTransform(260.65,568.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAiQgMgNAAgVQAAgSAMgOQAMgNARAAQANgBAJAKIAEAEIAAgMIAaAAIAABYIgaAAIAAgLQgIAOgSgBQgSABgLgNgAgOgRQgHAIABAJQgBALAHAHQAGAHAIAAQALAAAFgHQAHgHAAgLQgBgJgGgIQgGgHgKAAQgIAAgGAHg");
	this.shape_8.setTransform(251.45,568.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAtIAAhXIAbAAIAAAPQACgIAFgFQAGgEAKAAIAEAAIAFABIgFAZIgJgCQgKAAgFAHQgBADgCAEIAAAIIAAArg");
	this.shape_9.setTransform(244.15,568.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAtIAAhXIAaAAIAAAPQADgIAFgFQAHgEAJAAIAEAAIAFABIgFAZIgJgCQgKAAgFAHQgBADgCAEIgBAIIAAArg");
	this.shape_10.setTransform(237.95,568.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAkQgHgFgCgHQgCgHgBgLIAAgzIAaAAIAAAwIAAAHQACAGAEACQAEADAFAAQAHAAAEgEIAEgFIAAgJIAAgwIAaAAIAAAzQAAAJgCAGQgDALgKAHQgLAGgPAAQgQAAgNgJg");
	this.shape_11.setTransform(229.25,568.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtBBIAAiBIAmAAIAPABQANACAHAJQAIAJAAAMQAAATgQAIQAMACAHAIQAHAIAAAOQAAARgMAKQgLAKgVAAgAgTArIARAAQAJABAGgFQAGgFAAgIQAAgHgEgEQgDgFgHgBIgEAAIgFAAIgPAAgAgTgMIAMAAQAHAAAGgDQAFgFAAgIQAAgGgGgFQgEgEgKABIgKAAg");
	this.shape_12.setTransform(219.325,566.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVArQgFgBgFgCQgDgCgHgHIgZgZIgKAJIgQgPIAKgIIgQgQIASgSIAQAPIAPgPIAPAPIgOAPIAWAWIAFAFQAHAFAHgHIAFgIIAQALQgFAKgHAHQgKAKgLAAIgCAAg");
	this.shape_13.setTransform(143.75,335.3042);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAiQgOgOgBgTQgBgTAOgOQAPgPASABQARAAAQAPIAEAFIgtAvQAHAFAHgBQAIAAAGgGQAFgFABgHQACgHgBgHIAWgEQABANgDAKQgEAKgJAKQgPAPgSAAIAAAAQgSAAgOgNgAgHgZQgIABgGAGQgMAMAMAPIAbgcQgGgGgGAAIgBAAg");
	this.shape_14.setTransform(138.6716,341.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3gjIASgTIBcBaIgSASg");
	this.shape_15.setTransform(132,345.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag7gFIASgSIAJAJQgDgIACgIQADgIAGgHQAKgKANABQAEAAAFADIANAKIAnAnIgSARIgkghIgGgGQgDgDgEABQgFAAgEAEQgFAGAAAHQACAHAHAGIAhAhIgSATg");
	this.shape_16.setTransform(128.6,352.6488);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag3gjIATgTIBcBaIgTATg");
	this.shape_17.setTransform(122.175,355.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHBHQgRgBgPgOQgOgOgCgSQgBgSAMgLQANgNAPADIgmglIASgSIBcBZIgSATIgIgJQAGAQgPAOQgLAMgPAAIgCAAgAgYAEQgHAHABAJQABAKAIAHQAIAIAJAAQAIAAAGgGQAHgHAAgJQgBgKgIgHQgIgHgIAAIgBAAQgJAAgGAFg");
	this.shape_18.setTransform(115.5212,364.2286);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgogIIASgTIALAKQgEgHABgIQABgHAHgHIADgDIADgDIAOAVIgHAGQgGAGAAAKIACAHIAHAFIAfAfIgSATg");
	this.shape_19.setTransform(108.475,371.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHA4QgSgBgOgOQgOgOgCgRQgCgRAMgMQAKgLANAAIAGABIgJgIIATgTIA+A9IgSASIgIgIQAEAQgNAOQgLAMgPAAIgCgBgAgZgJQgGAHAAAIQACAKAHAHQAIAIAJAAQAJABAGgHQAHgHgBgJQAAgJgIgHQgIgIgJAAIgBAAQgJAAgGAGg");
	this.shape_20.setTransform(104.0167,377.5037);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgogIIASgTIALALQgEgIABgIQABgHAHgHIADgDIADgCIAOAUIgHAGQgGAHAAAIIACAHIAHAHIAfAdIgSATg");
	this.shape_21.setTransform(96.975,383.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgogIIASgTIALAKQgEgHABgIQABgHAHgHIADgDIADgDIAOAVIgHAGQgGAGAAAKIACAHIAHAFIAfAfIgSATg");
	this.shape_22.setTransform(92.625,387.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCA0QgGgDgJgIIgkgjIASgSIAiAhIAFAFQAEADAGgBQAEgBAFgEQAEgFAAgIQAAgDgBgCQgBgCgFgEIghghIARgTIAkAjIAKAMQAGAKgDAMQgDANgKAKQgMANgPACIgFAAQgGAAgEgCg");
	this.shape_23.setTransform(87.1,393.5875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhGgVIAbgcIAMgLQAKgHALAAQALABAJAJQAOANgGARQAKgHALABQALABAJAJQANAMgBAOQgBAQgOAOIgiAjgAASgHIgEADIgDAEIgLAKIAZAYIALgMQAIgHABgIQABgHgGgFQgFgEgGgBQgGAAgFADgAgRgoQgFAAgHAHIgHAIIAWAVIAIgIQAGgGAAgHQAAgHgEgFQgEgEgFAAIgEABg");
	this.shape_24.setTransform(78.5787,400.9483);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCAuQgUgCgNgOQgMgOABgTQACgUAOgMQAOgLAVABIAGABIgFBBQAJAAAGgGQAGgGABgIQAAgFgDgHQgDgHgGgEIAOgSQAKAKAEAKQADAKgBAMQgBAVgOAMQgMALgRAAIgEAAgAgVgOQgGAFAAAIQgCAQAUAFIADgoQgJAAgGAGg");
	this.shape_25.setTransform(345.3031,205.1747);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhDAkIACgaIBPAGIgkgeIADgfIAnAjIAwggIgCAgIguAaIAsAEIgDAag");
	this.shape_26.setTransform(342.55,214.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCAwQgUgBgNgNQgMgMABgRQABgOAKgIIAFgDIgMgBIACgaIBXAHIgCAaIgLgBQANAJgBARQgCASgNALQgNAIgQAAIgEAAgAgPgPQgIAGgBAJQAAAJAGAHQAHAGALABQAJABAIgFQAHgGABgKQABgIgHgHQgGgHgLgBIgCAAQgJAAgGAFg");
	this.shape_27.setTransform(343.792,224.6348);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhDAYIADgaIBoAHIAEgmIAXACIgFBBg");
	this.shape_28.setTransform(341.05,233.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AguAlIACgaIANABQgHgFgEgHQgDgGABgKQABgOAKgIQAFgDAFgBIAPAAIA3AEIgCAaIgwgEIgIAAQgFAAgEAEQgDADgBAGQAAAGAFAFQAFAFALABIAuAEIgCAag");
	this.shape_29.setTransform(341.975,247.1875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCAuQgUgCgNgOQgMgOABgTQACgUAOgMQAOgLAVABIAGABIgFBBQAJAAAGgGQAGgGABgIQAAgFgDgHQgDgHgGgEIAOgSQAKAKAEAKQADAKgBAMQgBAVgOAMQgMALgRAAIgEAAgAgVgOQgGAFAAAIQgCAQAUAFIADgoQgJAAgGAGg");
	this.shape_30.setTransform(341.2531,257.0747);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAdAsIgtgsIgBgBIgCgCIgDgEIgDgEIACAOIgCAgIgVgCIAGhNIALABIAtArIAEAEIADAEIADAEIgBgDIgCgGIAAgGIADghIAVABIgHBQg");
	this.shape_31.setTransform(340.5,266.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgjAdIABgNIgWgBIACgZIAWABIABgVIAVACIgBAVIAgADIAHAAQAIAAABgKIgBgJIATgCQADALgBAJQgBAOgKAIQgFADgEAAQgEACgKgBIgkgDIgBANg");
	this.shape_32.setTransform(338.9375,273.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AguAlIACgaIANABQgHgFgEgHQgDgGABgKQABgOAKgIQAFgDAFgBIAPAAIA3AEIgCAaIgwgEIgIAAQgFAAgEAEQgDADgBAGQAAAGAFAFQAFAFALABIAuAEIgCAag");
	this.shape_33.setTransform(339.325,281.4875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AADArIgxgEIACgaIAvAEIAHABQAGgBADgEQADgEABgGQAAgGgEgFIgFgEIgJgBIgvgEIACgaIAyAEQAKABAFACQALAEAGALQAGAMgBAOQgCARgKAMQgGAGgHACQgFACgHAAIgHgBg");
	this.shape_34.setTransform(338.5077,291.1643);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhCAmIADgmIADgQQADgNAJgGQAJgHANABQATABAGARQADgMAJgGQAJgHANABQARACAJAMQAJANgBAUIgEAwgAASgRQgFADgCAHIAAAEIgBAEIgCAPIAjADIACgQQABgKgEgGQgEgHgJAAIgBAAQgGAAgEADgAglgLQgDAEgBAJIgBAKIAfADIABgMQABgHgFgGQgDgFgIgBIgBAAQgGAAgFAFg");
	this.shape_35.setTransform(335.5357,301.3683);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgsAaIACgaIAPACQgIgDgEgGQgEgHABgKIABgDIAAgFIAZAHIgCAJQgBAJAHAHIAGACIAIACIArAEIgCAZg");
	this.shape_36.setTransform(636.65,375.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCAuQgUgCgNgOQgMgOABgTQACgUAOgMQAOgLAVABIAGABIgFBBQAJAAAGgGQAGgGABgIQAAgFgDgHQgDgHgGgEIAOgSQAKAKAEAKQADAKgBAMQgBAVgOAMQgMALgRAAIgEAAgAgVgOQgGAFAAAIQgCAQAUAFIADgoQgJAAgGAGg");
	this.shape_37.setTransform(636.1031,384.0747);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgrAUIArgNIAGgCIAFAAIAFgBIgEAAIgFgBIgHgDIgogTIACgbIBUAsIgBATIhaAeg");
	this.shape_38.setTransform(635.225,392.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgZAMIACgZIBXAHIgCAZgAgyAMQgGAAgDgFQgEgFAAgFQABgHAEgEQAEgEAGAAQAGABADAFQAEAEgBAHQAAAFgEAFQgEADgFAAIgBAAg");
	this.shape_39.setTransform(632.9722,399.3225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhEAlIAEgoQAAgLACgGQAEgNALgGQALgIAOACQAbACAFAdIA7ggIgDAfIg9AfIA6AEIgCAbgAgrABIgBAKIAmAEIABgKQABgKgEgGQgFgGgKgBIgCAAQgRAAgBATg");
	this.shape_40.setTransform(632.3,406.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgwA9IACgaIAMABQgOgKABgRQACgPAOgHQgNgLABgRQACgPALgIQAEgCAFgBIAPABIA3AEIgCAaIgxgEIgHgBQgFAAgDADQgDADgBAFQAAAHAFAFQAFAEAJABIAvAEIgCAYIgxgEIgHAAQgFAAgDADQgEADAAAFQAAAHAFAEQAFAFAJAAIAvAEIgCAag");
	this.shape_41.setTransform(632.925,424.2417);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgCAwQgUgBgNgNQgMgMABgRQABgOAKgIIAFgDIgMgBIACgaIBXAHIgCAaIgLgBQANAJgBARQgCASgNALQgNAIgQAAIgEAAgAgPgPQgIAGgBAJQAAAJAGAHQAHAGALABQAJABAIgFQAHgGABgKQABgIgHgHQgGgHgLgBIgCAAQgJAAgGAFg");
	this.shape_42.setTransform(631.992,436.7348);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhBAIIACgZICBAKIgCAZg");
	this.shape_43.setTransform(629.275,444.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgjAdIABgNIgWgBIACgZIAWABIABgVIAVACIgBAVIAgADIAHAAQAIAAABgKIgBgJIATgCQADALgBAJQgBAOgKAIQgFADgEAAQgEACgKgBIgkgDIgBANg");
	this.shape_44.setTransform(629.9875,448.975);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgZAMIACgZIBXAHIgCAZgAgyAMQgGAAgDgFQgEgFAAgFQABgHAEgEQAEgEAGAAQAGABADAFQAEAEgBAHQAAAFgEAFQgEADgFAAIgBAAg");
	this.shape_45.setTransform(628.7222,453.9225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AADArIgxgEIACgaIAvAEIAHABQAGgBADgEQADgEABgGQAAgGgEgFIgFgEIgJgBIgvgEIACgaIAyAEQAKABAFACQALAEAGALQAGAMgBAOQgCARgKAMQgGAGgHACQgFACgHAAIgHgBg");
	this.shape_46.setTransform(630.0077,461.1143);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgTAwQgUgCgNgMQgMgMABgSQACgQAOgIIgLgBIACgaIB4AJIgCAaIgsgDQAHAFACAHQADAFgBAJQgBASgOAKQgMAJgQAAIgFAAgAgggPQgIAGgBAJQAAAJAGAHQAHAGALABQALABAHgGQAHgFABgKQABgJgHgGQgGgHgLgBIgDAAQgJAAgGAFg");
	this.shape_47.setTransform(630.942,471.4598);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgCAwQgVgCgMgPQgMgNABgVQACgUAOgMQAPgNATABQAUACAMAOQAMAPgBATQgCAWgOAMQgNALgRAAIgDAAgAgPgRQgIAGgBAKQAAAJAGAHQAHAHALABQAJABAIgGQAHgGABgKQABgJgHgHQgGgHgLgBIgCAAQgJAAgGAFg");
	this.shape_48.setTransform(628.425,482.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgEA5QgdgDgSgUQgRgVACgbIACgMIAEgLIAEgJIAIgKIASAPIgEAFQgHAJAAANQgCARAMANQALANASABQARACAOgLQANgLABgRIAAgJIgCgIIgCgFIgEgHIAVgLIAFAIIADAHQAEAOgBAQQgCAbgUARQgSAPgYAAIgHAAg");
	this.shape_49.setTransform(625.6238,492.541);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgEAtQgUgCgMgPQgMgOADgTQACgUAPgLQAOgLAVADIAGAAIgIBBQAKAAAFgFQAHgFABgJQAAgFgDgHQgDgHgFgFIAOgQQAKAJADALQAEAKgCANQgCAVgPALQgLAJgQAAIgGgBgAgUgPQgGAEgBAIQgCAQASAGIAFgnQgIAAgGAFg");
	this.shape_50.setTransform(594.7752,74.916);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhFAgIADgaIBPAKIgiggIAEgeIAlAkIAygdIgEAfIgvAYIAsAGIgEAZg");
	this.shape_51.setTransform(591.6,83.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgGAxQgTgDgMgNQgMgNACgRQACgNAKgIIAGgDIgNgBIADgaIBXALIgDAaIgLgCQANAKgDASQgCARgOAKQgMAHgPAAIgHAAgAgQgOQgIAFgBAJQgBAJAGAHQAGAHALABQAKACAIgGQAHgFACgKQABgJgGgGQgGgHgLgCIgCAAQgJAAgHAFg");
	this.shape_52.setTransform(592.4607,94.176);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhDATIADgaIBpAMIAEgnIAYADIgJBCg");
	this.shape_53.setTransform(589.3,102.825);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgzA6IADgaIAMACQgNgKACgSQACgPAPgGQgNgMADgQQACgQALgHQAFgCADAAQAFgBALACIA3AHIgDAZIgxgGIgHgBQgFAAgDADQgDADgBAFQgBAHAEAFQAGAEAJABIAuAGIgDAZIgxgGIgGgBQgGAAgCADQgEACgBAFQAAAHAEAFQAFAEAJABIAvAGIgDAag");
	this.shape_54.setTransform(589.3,119.2188);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgGAxQgTgDgMgNQgMgNACgRQACgNAKgIIAGgDIgNgBIADgaIBXALIgDAaIgLgCQANAKgDASQgCARgOAKQgMAHgPAAIgHAAgAgQgOQgIAFgBAJQgBAJAGAHQAGAHALABQAKACAIgGQAHgFACgKQABgJgGgGQgGgHgLgCIgCAAQgJAAgHAFg");
	this.shape_55.setTransform(587.8607,131.576);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhBAFIADgZICAAQIgDAZg");
	this.shape_56.setTransform(584.8,138.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AglAdIACgNIgWgDIADgYIAWACIACgWIAWADIgDAWIAgAEIAHABQAJAAABgKQABgEgCgFIAUgCQACAMgBAJQgCAPgLAGIgJAEIgOgBIgkgEIgBANg");
	this.shape_57.setTransform(585.2917,143.625);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgaAKIADgYIBXALIgDAYgAgzAKQgGgBgDgFQgDgEAAgGQABgGAFgEQAEgEAGAAQAFABAEAFQADAFgBAHQAAAFgFAEQgEADgEAAIgCAAg");
	this.shape_58.setTransform(583.7719,148.6472);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AACAsIgxgGIADgaIAvAGIAHABQAGgBADgEQAEgDAAgGQABgGgEgFIgEgFIgJgBIgvgGIADgaIAxAHQAKABAGACQALAFAFALQAFAMgCAOQgCARgLALQgGAGgHABQgEACgGAAIgJgBg");
	this.shape_59.setTransform(584.6517,155.8281);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgWAwQgVgCgLgNQgMgNACgRQACgQAPgIIgLgCIADgZIB4APIgDAZIgsgFQAGAFACAHQADAHgBAIQgCASgOAJQgMAIgOAAIgIgBgAghgPQgHAFgBAKQgCAJAHAHQAGAHALABQALABAIgFQAGgGACgJQABgJgGgGQgFgHgMgCIgDAAQgJAAgHAEg");
	this.shape_60.setTransform(585.2852,166.101);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgFAvQgUgCgMgPQgLgPADgUQACgUAPgMQAPgMATADQAVACALAPQALAPgCAUQgDAVgPALQgMAKgQAAIgGgBgAgOgRQgJAFgBAKQgBAJAGAHQAGAIALABQAKACAIgGQAHgGACgKQABgJgGgHQgGgIgLgBIgDAAQgIAAgGAFg");
	this.shape_61.setTransform(582.2492,176.7258);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgHA5QgdgDgRgVQgRgVAEgcIACgMIAFgLIAFgIIAIgKIASAQIgFAFQgHAJgBAMQgCARAKANQALAOASACQASACANgKQAOgLACgQIAAgJIgBgIIgDgGIgDgGIAVgLIAFAJIACAHQAFAPgCAOQgEAcgVAQQgRANgWAAIgKgBg");
	this.shape_62.setTransform(579.0009,186.9822);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgggWIAWgNIAIANQgDgIAEgHQABgIAJgEIADgDIAFgBIAIAYQgEACgEACQgIAEgCAKIAAAHIAFAIIAVAlIgWAMg");
	this.shape_63.setTransform(764.125,851.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgMAuQgSgFgKgSQgLgRAFgSQAFgSARgKQASgKAQAFQASAFAKATIAEAGIg5AgQAGAHAIACQAHACAHgFQAGgDADgHQAEgGABgHIAWABQgCAOgGAJQgGAJgMAHQgNAHgMAAIgKgBgAgOgYQgPAJAGASIAigUQgFgHgGgCIgEAAQgFgBgFADg");
	this.shape_64.setTransform(758.0944,855.7092);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgtgFIAXgNIAhAbIAHAGIACADIAEAEIgDgEIgBgFIgCgIIgHgrIAYgNIALBdIgRAKg");
	this.shape_65.setTransform(748.3,859.375);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgYgQIAWgNIAsBMIgXAMgAgegfQgGAAgCgFQgDgFABgGQACgGAGgDQAFgDAGABQAGABADAFQACAFgBAFQgCAGgGAEQgEACgEAAIgDgBg");
	this.shape_66.setTransform(743.65,861.9775);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AhIgoIAjgVQAKgGAGgBQAMgEALAFQALAFAIAMQAOAZgVAUIA7AdIgbAQIg8ghIAdAzIgWANgAgdgpIgJAGIATAiIAJgFQAJgFABgIQADgIgEgIQgGgKgJAAQgGAAgHAEg");
	this.shape_67.setTransform(737.775,865.7861);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAHAxQgFgCgCgDQgDgDgFgJIgSggIgLAHIgLgSIALgGIgLgTIAXgNIALATIASgLIAKASIgSALIAQAcIADAGQAGAHAIgFQAEgCADgEIANAOQgJAJgIAFQgIAEgIAAQgEAAgFgBg");
	this.shape_68.setTransform(727.075,872.3844);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAHAxQgFgCgCgDIgIgMIgSggIgLAHIgLgSIALgGIgLgTIAXgNIALATIASgLIAKASIgSALIAQAcIADAGQAGAHAIgFQAEgCADgEIANAOQgJAJgIAFQgIAEgIAAQgEAAgFgBg");
	this.shape_69.setTransform(722.075,875.2844);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgYgQIAWgNIArBMIgWAMgAgfgfQgFAAgDgFQgDgFACgGQACgGAGgDQAFgDAGABQAGABADAFQACAFgCAFQgBAGgGAEQgEACgEAAIgEgBg");
	this.shape_70.setTransform(716.95,877.3775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgxgpIAigUIAPgHQAMgEAMAFQAMAFAHANQAKARgEAOQgFAOgQAJIgQAIIAaAsIgXAOgAgFgpIgKAGIARAfIAJgGQAJgEACgHQACgHgEgIQgFgJgJAAQgFAAgGAEg");
	this.shape_71.setTransform(709.1593,880.9684);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgcAtIAAhXIAaAAIAAAPQACgIAFgFQAHgEAJAAIAEAAIAEABIgEAZIgJgCQgJAAgGAHQgBADgBAEIgBAIIAAArg");
	this.shape_72.setTransform(631.95,977.925);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AggAiQgNgMAAgVQAAgTANgOQANgOAUAAQAUAAAMAOQANANAAAVIAAAGIhCAAQACAJAGAGQAGAFAHAAQAGAAAHgEQAHgEAEgGIASANQgJAKgJAFQgKAFgOAAQgUAAgNgNgAgUgHIAoAAQgBgJgFgGQgFgFgJAAQgQAAgEAUg");
	this.shape_73.setTransform(623.125,978.025);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgJAsIglhXIAbAAIAQAqIACAGIABAFIAAAFIAAgFIABgFIADgGIAQgqIAbAAIglBXg");
	this.shape_74.setTransform(613.875,978.025);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgMA/IAAhXIAZAAIAABXgAgKgnQgEgEAAgGQAAgFAEgFQAFgEAFAAQAHAAAEAEQAFAFgBAFQABAGgFAEQgEADgHABQgFgBgFgDg");
	this.shape_75.setTransform(607.6,976.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAQBBIgkg7IAAA7IgaAAIAAiBIApAAQAKAAAGABQANAEAHAJQAIAKAAAOQAAAdgdAGIAlA4gAgUgDIAKAAQAKgBAGgFQAGgFAAgJQgBgUgUABIgLAAg");
	this.shape_76.setTransform(601.1,975.95);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgdAtIAAhXIAaAAIAAAPQACgIAGgFQAGgEAKAAIAEAAIAEABIgEAZIgJgCQgJAAgGAHQgBADgCAEIgBAIIAAArg");
	this.shape_77.setTransform(587.9,977.925);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AggAiQgNgMAAgVQAAgTANgOQANgOAUAAQAUAAAMAOQANANAAAVIAAAGIhCAAQACAJAGAGQAGAFAHAAQAGAAAHgEQAHgEAEgGIASANQgJAKgJAFQgKAFgOAAQgUAAgNgNgAgUgHIAoAAQgBgJgFgGQgFgFgJAAQgQAAgEAUg");
	this.shape_78.setTransform(579.075,978.025);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgiAeIANgPQAIANAMAAQAEgBADgCQADgDAAgDQAAgFgDgCIgDgCIgHgCQgJgEgGgDQgJgGAAgMQAAgNAJgIQAJgIAOAAQATAAALAOIgNAPQgGgJgJAAQgEAAgCACQgDACAAAEQAAADADACIADABIAHAEQALADAEADQAKAFAAAOQAAANgKAIQgKAJgPAAQgWAAgMgRg");
	this.shape_79.setTransform(570.125,978.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgiAhQgLgNAAgUQAAgSALgOQAMgNARAAQANAAAJAJIADAEIAAgLIAaAAIAABXIgaAAIAAgMQgIAOgRABQgSgBgLgNgAgPgRQgFAHAAAKQAAALAFAHQAGAHAJAAQAKAAAHgHQAFgHABgLQAAgKgHgGQgHgIgJAAQgIAAgHAHg");
	this.shape_80.setTransform(561.2,978.05);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgcAtIAAhXIAaAAIAAAPQACgIAFgFQAGgEAKAAIAEAAIAEABIgEAZIgJgCQgKAAgFAHQgCADAAAEIgBAIIAAArg");
	this.shape_81.setTransform(553.9,977.925);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AghBBIAAiBIBDAAIAAAWIgpAAIAAAdIAkAAIAAAUIgkAAIAAA6g");
	this.shape_82.setTransform(547.1,975.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Municipal_Boarders
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF74CC").s().p("A6pY/QgEgCgBgEQgCgEACgEQACgDAEgCIAdgKQAEgBADACQAEACACADQABAEgCAEQgCAEgEABIgdAKIgDABIgEgBgA5wYrQgEgCgBgEQgCgEACgEQACgDAEgCIBLgaQAEgBADACQAEACACADQABAEgCAEQgCAEgEABIhLAaIgDABIgEgBgA4JYHQgEgCgBgEQgCgEACgEQACgDAEgCIBMgbQAEgBADACQAEACACADQABAEgCAEQgCAEgEABIhMAbIgDABIgEgBgA2hXiQgEgCgBgEQgCgEACgEQACgDAEgCIBMgaQAEgBAEACQADACACADQABAEgCAEQgCAEgEABIhMAaIgDABIgEgBgA05W+QgEgCgBgEQgCgEACgEQACgDAEgCIBLgaQAEgBADACQAEACACADQABAEgCAEQgCAEgEABIhLAaIgDABIgEgBgAzSWaQgEgCgBgEQgCgEACgEQACgDAEgCIBMgbQAEgBADACQAEACACADQABAEgCAEQgCAEgEABIhMAbIgDABIgEgBgAxqV1QgEgCgBgEQgCgEACgEQACgDAEgCIBLgaQAEgBADACQAEACACADQABAEgCAEQgCAEgEABIhLAaIgDABIgEgBgAwDVRQgEgCgBgEQgCgEACgEQACgDAEgCIBLgaQAEgBADACQAEACACADQABAEgCAEQgCAEgEABIhLAaIgDABIgEgBgAucUtQgEgCgBgEQgCgEACgEQACgDAEgCIBMgaQAEgCAEACQADACACAEQABAEgCAEQgCADgEACIhMAaIgDABIgEgBgAs0UIQgEgCgBgEQgCgDACgEQACgEAEgBIBMgaQAEgCAEACQADACACAEQABAEgCAEQgCADgEACIhMAaIgDAAIgEgBgArMTkQgEgBgBgEQgCgEACgEQACgEAEgBIAZgJIAAAAQAZgJATgRQADgDAEABQAFAAACADQADADAAAEQgBAFgDACQgWAUgcAKIgZAJIgEAAIgEgBgApxSrQgDgDgBgEQAAgEADgDIA1g8QACgDAEgBQAFAAADADQADACAAAEQAAAFgCADIg1A8QgDADgEAAIgBAAQgDAAgDgCgAooRYQgDgDgBgEQAAgEADgDIA1g8QACgDAEgBQAFAAADADQADACAAAEQAAAFgCADIg1A8QgDADgEAAIgBAAQgDAAgDgCgAnfQFQgDgDgBgEQAAgEADgDIAmgrIAAgBIAQgQQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIgPAQIgBAAIglArQgDADgEAAIgBAAQgDAAgDgCgAmNO4QgEgBgDgDQgCgEAAgEQABgEADgCIAQgMIAAAAIAyghQAEgCAEABQAEABACADQACAEgBAEQAAAEgEACIgyAhIAAAAIgPALQgDACgDAAIgBAAgAkzN6QgEAAgDgEQgCgDABgEQABgEADgDIBDgsQAEgCAEABQAEABACADQACAEgBAEQAAAEgEACIhDAsQgCACgDAAIgCgBgAjXM+QgEAAgDgEQgCgDABgEQABgEADgDIBDgsQAEgCAEABQAEABACADQACAEgBAEQAAAEgEACIhDAsQgCACgDAAIgCgBgAh7MBQgEAAgDgEQgCgDABgEQABgEADgDIBDgsQAEgCAEABQAEABACADQACAEgBAEQAAAEgEACIhDAsQgCACgDAAIgCgBgAgfLFQgEAAgDgEQgCgDABgEQABgEADgDIBCgsQAEgCAEABQAEABACADQACAEgBAEQAAAEgEACIhCAsQgCACgDAAIgCgBgAA8KIQgEAAgDgEQgCgDABgEQABgEADgDIBDgsQAEgCAEABQAEABACADQACAEgBAEQAAAEgEACIhDAsQgCACgDAAIgCgBgACYJLQgEAAgDgEQgCgDABgEQABgEADgDIBDgsQAEgCAEABQAEABACADQACAEgBAEQAAAEgEACIhDAsQgCACgDAAIgCgBgAD0IPQgEAAgDgEQgCgDABgEQABgEADgDIBDgsQAEgCAEABQAEABACADQACAEgBAEQAAAEgEACIhDAsQgCACgDAAIgCgBgAFQHTQgEAAgDgEQgCgDABgEQABgEADgDIBDgsQAEgCAEABQAEABACADQACAEgBAEQAAAEgEACIhDAsQgCACgDAAIgCgBgAGsGWQgEAAgDgEQgCgDABgEQABgEADgDIBDgsQAEgCAEABQAEABACADQACAEgBAEQAAAEgEACIhDAsQgCACgDAAIgCgBgAIIFaQgEAAgDgEQgCgDABgEQABgEADgDIBDgsQAEgCAEABQAEABACADQACAEgBAEQAAAEgEACIhDAsQgCACgDAAIgCgBgAJkEdQgEAAgDgEQgCgDABgEQABgEADgDIBDgsQAEgCAEABQAEABACADQACAEgBAEQAAAEgEACIhDAsQgCACgDAAIgCgBgALADgQgEAAgDgEQgCgDABgEQABgEADgDIBDgsQAEgCAEABQAEABACADQACAEgBAEQAAAEgEACIhDAsQgCACgDAAIgCgBgAMbCjQgEAAgCgDQgDgDAAgFQABgEADgCIAHgGIAxgxQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIgxAxIgBAAIgHAHQgDACgEAAIgBAAgANjBUQgDgDAAgEQAAgEADgDIA5g5QADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIg5A5QgDADgEAAQgEAAgDgDgAOxAGQgDgDAAgDQAAgEADgDIA4g5QADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIg4A4QgDADgEAAQgEAAgDgDgAP+hHQgDgDAAgEQAAgEADgDIA5g5QADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIg5A5QgDADgEAAQgEAAgDgDgARMiVQgDgDAAgEQAAgEADgDIA4g5QADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIg4A5QgDADgEAAQgEAAgDgDgASZjjQgDgDAAgEQAAgEADgDIAFgFQAUgUALgbIAAAAIAGgNQACgEAEgBQAEgCADACQAEACACAEQABAEgCADIgGANQgMAfgXAWIgFAFQgDADgEAAQgEAAgDgDgATTlBQgDgBgCgEQgCgEACgEIAfhKQACgDADgCQAEgCAEACQAEACABADQACAEgCAEIgfBKQgBAEgEABIgEABIgEgBgAT9mnQgDgBgCgEQgCgEACgEIAfhKQACgDADgCQAEgCAEACQAEACABADQACAEgCAEIgfBKQgBAEgEABIgEABIgEgBgAUnoNQgDgBgCgEQgCgEACgEIAfhKQACgDADgCQAEgCAEACQAEACABADQACAEgCAEIgfBKQgBAEgEABIgEABIgEgBgAVRpzQgDgBgCgEQgCgEACgEIAehKQACgDADgCQAEgCAEACQAEACABADQACAEgCAEIgeBKQgBAEgEABIgEABIgEgBgAV6rZQgDgBgCgEQgCgEACgEIAehKQACgDADgCQAEgCAEACQAEACABADQACAEgCAEIgeBKQgBAEgEABIgEABIgEgBgAWjs/QgDgBgCgEQgCgEACgEIAehKQACgDADgCQAEgCAEACQAEACABADQACAEgCAEIgeBKQgBAEgEABIgEABIgEgBgAXMulQgDgBgCgEQgCgEACgEIAehKQACgDADgCQAEgCAEACQAEACABADQACAEgCAEIgeBKQgBAEgEABIgEABIgEgBgAX1wLQgDgBgCgEQgCgEACgEIAehKQACgDADgCQAEgCAEACQAEACABADQACAEgCAEIgeBKQgBAEgEABIgEABIgEgBgAYexxQgDgBgCgEQgCgEACgEIAehKQACgDADgCQAEgCAEACQAEACABADQACAEgCAEIgeBKQgBAEgEABIgEABIgEgBgAZHzXQgDgBgCgEQgCgEACgEIAehKQACgDADgCQAEgCAEACQAEACABADQACAEgCAEIgeBKQgBAEgEABIgEABIgEgBgAZw09QgDgBgCgEQgCgEACgEIAehKQACgDADgCQAEgCAEACQAEACABADQACAEgCAEIgeBKQgBAEgEABIgEABIgEgBgAaa2jQgEgBgCgEQgBgDABgEIADgIIAAgBQAJgVgHgVIAAAAQgDgJgGgHQgCgDABgFQABgEADgCQADgCAEAAQAFABACADQAHAKAEAMIAAAAQAJAcgMAcIAAAAIgDAIQgBAEgEABIgEABIgDgBgAZ84DIhFgpQgDgCgBgEQgBgEACgEQACgEAEgBQAEAAAEACIBEApQAEACABAEQABAEgCADQgCAEgEABIgDAAQgCAAgDgBg");
	this.shape_83.setTransform(708.9256,818.1264);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF74CC").s().p("ABUF1IhFgpQgDgCgBgEQgBgEACgDQACgEAEgBQAEgBADACIBFApQAEACABAEQABAEgCAEQgCADgEABIgCABQgDAAgDgCgAgKE9IhFgoQgDgCgBgEQgBgEACgDQACgEAEgBQAEgBADACIBFAoQADACABAEQABAEgCAEQgCADgDABIgDABIgFgCgAhpEGIgOgJIAAAAQgTgLgLgUQgHgPgCgPQAAgFADgDQACgDAEAAQAFgBADADQADACAAAFQACAMAFALQAIAPAOAIIABAAIAOAJQADACABAEQABAEgCAEQgCADgEABIgDABQgCAAgDgCgAiTCqQgEgBgDgDQgDgDAAgEIAFhQQABgEADgDQADgDAEABQAEAAADADQADADgBAEIgFBQQAAAEgDADQgDADgEAAIAAAAgAiMA8QgEgBgDgDQgDgDAAgEIAFhPQABgEADgDQADgDAEABQAEAAADADQADADgBAEIgFBPQAAAEgDADQgDADgEAAIAAAAgAiFgxQgEgBgDgDQgDgDAAgEIAFhQQAAgEADgDQADgDAEABQAFAAACADQADADAAAEIgFBQQAAAEgDADQgDADgDAAIgBAAgAh/ifQgEgBgDgDQgCgDAAgEIAEhQQAAgEADgDQADgDAEABQAFAAACADQADADAAAEIgEBQQAAAEgDADQgDADgEAAIgBAAgAh/kQQgDgDAAgEIAAgEQABgXAQgQQAPgRAWgDIAAAAIAGgBQAEAAADACQAEACAAAEQABAEgDAEQgCADgEABIgGABIAAAAQgPACgLALQgKALgBAPIAAAEQAAAEgDADQgDACgEABQgEgBgDgCgAgtlJQgDgDgBgEQAAgEACgDQADgDAEgBIBOgLQAEgBADADQAEADAAAEQABAEgDADQgCADgEABIhOALIgBAAQgEAAgDgCgAA/lYQgDgCgBgEQAAgFACgDQADgDAEgBIBPgLQAEgBADADQAEACAAAEQABAEgDAEQgCADgEABIhPALIgBAAQgEAAgDgCg");
	this.shape_84.setTransform(205.4022,327.547);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF74CC").s().p("AplJJQgEAAgDgDQgDgDAAgEIABhQQABgEACgDQADgDAEAAQAFAAADADQADADgBAEIgBBQQAAAEgDADQgCADgEAAIgBAAgApjHbQgEAAgDgDQgDgDAAgEIABhQQABgEACgDQADgDAEAAQAFAAADADQADADgBAEIgBBQQAAAEgDADQgCADgEAAIgBAAgAphFtQgEAAgDgDQgDgDAAgEIABhQQABgEACgDQADgDAEAAQAFAAADADQADADgBAEIgBBQQAAAEgDADQgCADgEAAIgBAAgApfD/QgEAAgDgDQgDgDAAgEIABhQQABgEACgDQADgDAEAAQAFAAADADQADADgBAEIgBBQQAAAEgDADQgCADgEAAIgBAAgApeCRQgEAAgDgDQgDgDAAgEIABgfQABgcANgYQACgEAEgBQAEgBAEACQADACABAEQACADgCAEQgLAUgBAYIgBAeQAAAEgDADQgDADgDAAIgBAAgApFAoQgDgDAAgEQAAgEACgDIA2g6QADgEAEAAQAFAAADADQADADAAAEQAAAEgDADIg2A6QgCADgFAAIAAAAQgEAAgDgCgAn7goQgDgDAAgEQAAgEACgDIA2g7QADgEAEAAQAFAAADADQADADAAAEQAAAEgDADIg2A7QgCADgFAAIAAAAQgEAAgDgCgAmxh5QgDgDAAgEQAAgEACgDIA2g7QADgEAEAAQAFAAADADQADADAAAEQAAAEgDADIg2A7QgCADgFAAIAAAAQgEAAgDgCgAlnjKQgDgDAAgEQAAgEACgDIA2g7QADgEAEAAQAFAAADADQADADAAAEQAAAEgDADIg2A7QgCADgFAAIAAAAQgEAAgDgCgAkdkbQgDgDAAgEQAAgEACgDIA2g7QADgEAEAAQAFAAADADQADADAAAEQAAAEgDADIg2A7QgCADgFAAIAAAAQgEAAgDgCgAJhkpIhIgiQgEgCgCgDQgBgEACgEQACgEAEgBQAEgCADACIBJAiQAEACABAEQABAEgCAEQgBADgEACIgDAAIgFgBgAH+lYIhIgjQgEgCgCgDQgBgEACgEQACgEAEgBQAEgCADACIBIAjQAEACABAEQACAEgCAEQgCADgEACIgDAAIgEgBgAjTlsQgDgDAAgEQAAgEACgDIA2g7QADgEAEAAQAFAAADADQADADAAAEQAAAEgDADIg2A7QgCADgFAAIAAAAQgEAAgDgCgAGbmIIhIgiQgEgCgCgDQgBgEACgEQACgEAEgBQAEgCADACIBIAiQAEACABAEQACAEgCAEQgCADgEACIgDAAIgEgBgAE4m3IhIgiQgEgCgCgEQgBgEACgDQACgEAEgCQAEgBADACIBIAiQAEACABAEQACAEgCAEQgCADgEACIgDAAIgEgBgAiIm9QgDgDgBgEQAAgEADgDIA2g6QADgEAEAAQAEAAADADQADADAAAEQABAEgDADIg2A6QgDADgEAAIgBAAQgDAAgDgCgADVnmIhIgjQgEgCgCgEQgBgEACgDQACgEAEgCQAEgBADACIBIAjQAEACABAEQACADgCAEQgCAEgEABIgDABIgEgBgAg/oOQgCgDgBgEQABgEACgDIAIgIIAAABQAZgcAlgHIgBAAIAEgBQAEgBAEACQAEACABAEQABAEgDADQgCAEgEABIgEABIAAAAQgeAGgVAXIgBAAIgIAIQgCADgFAAQgEAAgDgDgAByoWIgsgVQgOgHgPgCQgEAAgDgDQgCgEAAgEQABgEADgDQAEgCAEAAQARADARAIIAsAVQAEACABAEQACADgCAEQgCAEgEABIgDABIgEgBg");
	this.shape_85.setTransform(131.6531,421.0706);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF74CC").s().p("Eg6EA10QgDgDgBgDQgBgDABgDIAFgNQACgEAEgCQADgBAEABQAEACACAEQABADgBAEIA2AAQAEAAADADQACACABAFQgBAEgCACQgDADgEABIhEAAIgBAAQgDAAgCgCgEgQ6A12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIAlAAIgFgOQgCgEACgEQACgDAEgCQADgBAEACQAEABACAEIAKAbQABADgBADQgBADgDADQgDABgDABgEgSoA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgUWA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgWEA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgXyA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgZgA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgbOA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgc8A12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgeqA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEggYA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgiGA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgj0A12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgliA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgnQA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgo+A12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgqsA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgsaA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEguIA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgv2A12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgxkA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEgzSA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEg1AA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEg2uA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEg4cA12QgFgBgCgDQgDgCAAgEQAAgFADgCQACgDAFAAIBQAAQAEAAADADQACACABAFQgBAEgCACQgDADgEABgEg5zA1MQgEgCgBgDQgCgEABgEIAchLQABgEAEgBQAEgCAEABQADACACADQACAEgCAEIgbBLQgCAEgDABIgEABIgEAAgEgQfA0+QgEgCgBgEIgchLQgCgEACgEQACgDAEgCQADgBAEABQAEACABAEIAcBLQACAEgCAEQgCADgDACIgEAAIgEAAgEg5NAzlQgEgBgCgEQgCgEACgEIAbhLQABgEAEgCQAEgBAEABQADABACAEQACAEgBAEIgbBLQgCAEgEACIgEABIgDgBgEgRGAzWQgDgBgCgEIgchLQgBgEACgEQABgDAEgCQAEgBAEACQADABACAEIAcBLQABAEgBAEQgCADgEACIgEAAIgEgBgEg4oAx+QgEgBgCgEQgCgEACgEIAbhLQABgEAEgBQAEgCAEABQADABACAEQACAEgBAEIgbBLQgCAEgEABIgEACIgDgBgEgRrAxvQgEgBgCgEIgIgUIAAgBIgOg5QgBgDADgEQACgEAEgBQADgBAEACQAEADABAEIANA3IAIATQABAEgBAEQgCAEgEABIgEABIgDgBgEg4DAwXQgEgBgCgEQgCgEACgEIAbhLQABgEAEgCQAEgBAEABQADABACAEQACAEgBAEIgbBLQgCAEgEACIgEABIgDgBgEgSJAwGQgEgDgBgEIgOg9QgBgDACgDIAIgQQACgEAEgCQAEgBAEACQADACACAEQABAEgCAEIgGAMIANA6QABAEgCADQgDAEgEABIgCAAQgDAAgCgBgEg3eAuwQgEgBgCgEQgCgEACgEIAWg+IgCgCQgDgDAAgEQAAgEAEgDQADgDAEAAQAEABADADIAGAHIACAFIAAAFIgYBDQgCAEgEABIgEACIgDgBgEgSBAueQgEgCgBgEQgBgEACgDIAcg3IAAgBIAKgQQADgDAEgBQAEgBADADQADACABAEQABAEgCADIgKAQIABgBIgcA3QgCADgEABIgEABIgEgBgEg3cAtPQgFgBgCgEIgMgRIgygHQgFgBgCgDQgDgDABgFQABgEADgCQADgDAFABIA2AIQAEABACADIAPAVQADADgBAEQgBAEgDACQgDADgDAAIgBAAgEgRLAs+QgDgCgBgEQgBgEACgEIAthBQACgEAEgBQAEgBAEADQADACABAEQABAEgDADIgsBCQgCAEgEABIgDAAQgCAAgDgCgEg4/AstIhPgMQgEgBgCgDQgDgDABgFQAAgEAEgCQADgDAEABIBPAMQAEABADADQACADAAAFQgBAEgDACQgDACgEAAIgBAAgEg6tAscIhOgTQgEgBgCgDQgCgEABgEQABgEADgCQAEgCAEABIBKASIAAAAIAEABQAEABACADQACAEgBAEQgBAEgDACQgDACgDAAIgCgBgEg8YAsCIhMgSQgCgBgCgCIgBgBQgDgDAAgEQAAgEADgDQACgDAFAAQADAAACACIBKASQAEABACADQACAEgBAEQgBAEgDACQgDACgCAAIgDgBgEgQPArjQgDgCgBgEQgBgEADgEIANgTIADg0QAAgEADgDQADgCAFAAQAEAAADADQACADAAAEIgDA2IgCAGIgPAWQgCADgEABIgCAAQgDAAgDgCgEg+CArhIhIgkQgEgBgBgEQgBgEACgEQABgEAEgBQAEgBAEABIBIAkQAEACABAEQABAEgBADQgCAEgEABIgDABIgFgBgEg/lAqxIhIgkQgEgBgBgEQgBgEACgEQABgEAEgBQAEgBAEABIBIAjQAEACABAEQABAEgBAEQgCAEgEABIgDABIgFgBgEgP2Ap7QgEAAgDgDQgDgDABgEIADhBIgCgBQgEgCgBgEQgBgEACgEQABgDAEgBQAEgCAEACIAIAEQADABABADQACADAAACIgEBHQgBAFgDADQgDACgDAAIgBAAgEhA+Ap5QgEgBgCgEIgvhAQgDgDABgEQAAgEAEgCQADgDAEAAQAEABADAEIAvA/QACAEAAAEQgBAEgDADQgDACgEAAIgBAAgEgQYAogIhGgnQgEgCgBgEQgBgEACgEQACgDAEgBQAEgCADACIBGAnQAEACABAEQABAEgCAEQgCADgEABIgDABIgEgBgEhB/AogQgEAAgCgDIgvhBQgDgDABgEQAAgFAEgCQADgDAEABQAEABADADIAvBAQACAEAAAEQgBAEgDADQgDACgEAAIgBgBgEgR4AnqIgggSQgEgCgBgEIgMgpQgCgEACgDQACgEAEgCQAEgBAEACQADACACAEIALAlIAdAQQADACABAEQABAEgCAEQgCADgEABIgDABIgEgBgEhC4AnGQgEgBgDgCQgDgDAAgEIABhQQAAgFADgDQADgDAEABQAEAAADACQADAEAAAEIgBBQQAAAEgDADQgDADgEAAIAAAAgEgSuAmSQgDgCgBgEIgXhNQgCgEACgDQACgEAEgBQAEgBAEACQADACACAEIAXBMQABAEgCAEQgCADgEABIgDABIgFgBgEhC+AlUQgDgCAAgEIAAhQQAAgFADgCQADgDAEAAQAEAAADADQADACAAAFIAABQQAAAEgDACQgDADgEABQgEgBgDgDgEgTIAkpQgEgCgCgDQgCgEACgEIAchJQABgDADgCQACgCAEAAIABAAQAEAAADADQACADABAEQgBAEgCADIgBAAIgbBGQgBAEgEABIgEABIgDAAgEhC3AjpQgEAAgDgDQgDgCAAgFIABhQQAAgEADgDQADgDAEAAQAEABADADQADADAAAEIgBBQQAAAEgDADQgDACgEAAIAAAAgEgSQAjVQgDgCgCgDQgBgEACgEQABgEAEgBIBLgcQAEgBAEABQADACACAEQABAEgBAEQgCADgEACIhLAbIgEABIgEgBgEgQ0AijQgEgCgBgEQgBgEACgEIAkhIQABgEAEgBQAEgBAEACQAEABABAEQABAEgBAEIgkBIQgCAEgEABIgEABIgEgBgEhC2Ah7QgEAAgDgCQgDgDAAgFIABhQQAAgEADgDQADgDAEAAQAEABADACQADAEAAAEIgBBQQAAAEgDADQgDADgEAAIAAgBgEgQJAg+QgEgCAAgEIgNhPQAAgEACgEQACgDAFgBQADAAAEACQADACABAFIAMBPQABAEgCADQgDAEgEAAIgCAAQgDAAgCgCgEhC8AgLQgDgDAAgEIAAhQQAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAABQQAAAEgDADQgDACgEABQgEgBgDgCgAwFfjQgDgDAAgEQAAgEADgDQADgDAEAAIBQgDQAEAAADADQADADAAAEQAAAEgDADQgCADgEAAIhQADIgBAAQgEAAgDgDgAuVfaQgEgBgCgDQgDgEABgEQABgEADgCIAcgTIAAgkQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAApIgBAFIgDADIggAWQgDACgDAAIgCAAgEhC8AecQgDgCAAgEIAAhQQAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAABQQAAAEgDACQgDADgEABQgEgBgDgDgAt6d6QgDgDAAgEIAAgCIABgFIACgDIAjggIAFgCIAEAAIAdAHQAEABADAEQACADgBAEQgBAEgEADQgDACgEgBIgYgHIgcAaQgBADgCACQgDADgEAAQgEAAgDgDgAsadmQgEgBgCgDQgCgEACgEIAPguIgLgTQgCgEABgEQABgEAEgCQADgCAEABQAEABACAEIANAWIACAFIgBADIgQAzQgCAEgDACIgFABIgDgBgEhC8AcuQgDgCAAgFIAAhPQAAgFADgCQADgDAEgBQAEABADADQADACAAAFIAABPQAAAFgDACQgDADgEABQgEgBgDgDgAslcDQgEgBgCgDIgphGQgCgDABgEQABgEAEgCQADgCAEABQAEABACADIApBGQACADgBAEQgBAEgDACQgDACgDAAIgCgBgEhC8AbAQgDgCAAgFIAAhQQAAgEADgCQADgDAEgBQAEABADADQADACAAAEIAABQQAAAFgDACQgDADgEAAQgEAAgDgDgAtdakQgEgBgCgEIggg2QgCgCABgEIACgRQAAgEADgCQAEgDAEABQAEAAACADQADAEAAAEIgCAOIAeAyQACAEgBAEQgBAEgDACQgDACgDAAIgCgBgEhC8AZTQgDgDAAgEIAAhRQAAgEADgDQADgCAEAAQAEAAADACQADADAAAEIAABRQAAAEgDADQgDACgEAAQgEAAgDgCgAt2ZAQgEgBgCgEQgDgDABgEIAHgvIAAgBIAIgfQABgEAEgCQAEgCAEABQADABADADQACAEgBAEIgIAeIgHAvQgBAEgDACQgDADgEAAIgBAAgEhC8AXlQgDgDAAgEIAAhQQAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAABQQAAAEgDADQgDACgEABQgEgBgDgCgAtgXUQgEgBgCgEQgCgDABgEIAOgwIgEgaQgBgEADgEQACgDAFAAQAEgBADACQADADABAEIAEAcIAAAEIgOAyQgBAEgEACIgFABIgDAAgEhC8AV2QgDgCAAgEIAAhQQAAgFADgCQADgDAEAAQAEAAADADQADACAAAFIAABQQAAAEgDACQgDADgEABQgEgBgDgDgAtdVnQgDgDgBgEIgHg6IAAgFIAJgVQABgEAEgBQAEgCAEACQAEABABAEQACAEgCAEIgHASIAHA3QABAEgDADQgDAEgEABIgBAAQgDAAgDgCgEhC8AUIQgDgCAAgFIAAhQQAAgEADgCQADgDAEgBQAEABADADQADACAAAEIAABQQAAAFgDACQgDADgEAAQgEAAgDgDgAtOT9QgEgCgBgEQgCgEACgEQATgpANgJIAAAAQAIgGAQgIQAEgBAEABQADABACAEQACAEgBAEQgCAEgEABQgNAHgHAFIAAAAQgKAIgQAjQgCAEgEABIgDABIgEgBgAsAS2QgEgCgBgEQgCgDACgEQACgEAEgBIAfgLIACAAIAzgBQAEgBADADQADADAAAEQAAAEgDADQgDADgEABIgxABIgcAKIgEAAIgEgBgAqUSoQgDgDAAgEQAAgEADgDQACgDAFgBIAMAAIAAgwQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA6QAAAEgDADQgDADgDAAIgWABIgBAAQgEAAgDgDgEhC8ASbQgDgDAAgFIAAhQQAAgEADgDQADgCAEgBQAEABADACQADADAAAEIAABQQAAAFgDADQgDACgEAAQgEAAgDgCgAp+RPQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgEhC8AQtQgDgDAAgEIAAhQQAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAABQQAAAEgDADQgDACgEABQgEgBgDgCgAp+PhQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgEhC8AO+QgDgCAAgEIAAhQQAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAABQQAAAEgDACQgDADgEABQgEgBgDgDgAp+NzQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgEhC8ANQQgDgCAAgFIAAhPQAAgFADgCQADgDAEgBQAEABADADQADACAAAFIAABPQAAAFgDACQgDADgEABQgEgBgDgDgAp+MFQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgEhC8ALiQgDgCAAgFIAAhQQAAgEADgCQADgDAEgBQAEABADADQADACAAAEIAABQQAAAFgDACQgDADgEAAQgEAAgDgDgAp+KXQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgAp+IpQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgAp+G7QgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgAp+FNQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgEAjbAEKIgPAAQgFAAgCgDQgDgDAAgEQAAgEADgDQACgDAFAAIAKAAQAJgKAGgJIAAAAIALgSIACgKQABgEAEgCQADgCAEABQAEACACADQACAEgBAEIgBAHIAAABQgBAEgOAVIABAAQgJAMgLANIgDACIgEABIAAAAgEAiuAEJIhQgBQgFAAgDgDQgDgDABgEQAAgEADgDQADgDAEAAIBQABQAEAAADADQADADAAAEQgBAEgCADQgDADgEAAIAAAAgEAhAAEIIhQgBQgFAAgDgDQgDgDABgEQAAgEADgDQADgDAEAAIBQABQAEAAADADQADADAAAEQgBAEgCADQgDADgEAAIAAAAgAfSEHIhQgBQgFAAgDgDQgDgDABgEQAAgEADgDQADgDAEAAIBQABQAEAAADADQADADAAAEQgBAEgCADQgDADgEAAIAAAAgAdkEGIhQgBQgFAAgDgDQgDgDABgEQAAgEADgDQADgDAEAAIBQABQAEAAADADQADADAAAEQgBAEgCADQgDADgEAAIAAAAgAb2EFIhQgBQgFAAgDgDQgDgDABgEQAAgEADgDQADgDAEAAIBQABQAEAAADADQADADAAAEQgBAEgCADQgDADgEAAIAAAAgAaIEEIhQgBQgFAAgDgDQgDgDABgEQAAgEADgDQADgDAEAAIBQABQAEAAADADQADADAAAEQgBAEgCADQgDADgEAAIAAAAgAYaEDIhQgBQgFAAgDgDQgDgDABgEQAAgEADgDQADgDAEAAIBQABQAEAAADADQADADAAAEQgBAEgCADQgDADgEAAIAAAAgAWsECIhQgBQgFAAgDgDQgDgDABgEQAAgEADgDQADgDAEAAIBQABQAEAAADADQADADAAAEQgBAEgCADQgDADgEAAIAAAAgAU+EBIhQgBQgFAAgDgDQgDgDABgEQAAgEADgDQADgDAEAAIBQABQAEAAADADQADADAAAEQgBAEgCADQgDADgEAAIAAAAgATTDyQgDgDAAgEIAAhQQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABQQgBAEgCADQgDADgEAAQgFAAgCgDgAEBDwQgDgDAAgEIAAhQQAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAABQQAAAEgDADQgDACgEABQgEgBgDgCgACbDzQgEgBgDgCQgDgDAAgEQAAgFADgDQADgCAEAAIBQAAQAEAAADACQADADAAAFQAAAEgDADQgDACgEABgAAtDzQgEgBgDgCQgDgDAAgEQAAgFADgDQADgCAEAAIBQAAQAEAAADACQADADAAAFQAAAEgDADQgDACgEABgAhADzQgEgBgDgCQgDgDAAgEQAAgFADgDQADgCAEAAIBPAAQAEAAADACQADADAAAFQAAAEgDADQgDACgEABgAiuDzQgEgBgDgCQgDgDAAgEQAAgFADgDQADgCAEAAIBQAAQAEAAADACQADADAAAFQAAAEgDADQgDACgEABgAkcDzQgEgBgDgCQgDgDAAgEQAAgFADgDQADgCAEAAIBQAAQAEAAADACQADADAAAFQAAAEgDADQgDACgEABgAmKDzQgEgBgDgCQgDgDAAgEQAAgFADgDQADgCAEAAIBQAAQAEAAADACQADADAAAFQAAAEgDADQgDACgEABgAn4DzQgEgBgDgCQgDgDAAgEQAAgFADgDQADgCAEAAIBQAAQAEAAADACQADADAAAFQAAAEgDADQgDACgEABgApmDzQgEgBgDgCQgDgDAAgEQAAgFADgDQADgCAEAAIBQAAQAEAAADACQADADAAAFQAAAEgDADQgDACgEABgEAkCAC3QgEgCgBgEQgCgEACgDQAMgeAZgsQACgEAEgBQAEgBAEACQAEACABAEQABAEgCAEQgYAqgNAeQgBADgEACIgEABIgEgBgATTCEQgDgDAAgEIAAhQQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABQQgBAEgCADQgDADgEAAQgFAAgCgDgAEBCBQgDgCAAgEIAAhQQAAgFADgCQADgDAEAAQAEAAADADQADACAAAFIAABQQAAAEgDACQgDADgEABQgEgBgDgDgEAk2ABRQgEgCgBgEQgBgEADgEQAUghATgeIABgBIAEgDQADgDAEAAQAEAAADADQADACAAAEQAAAEgDADIgDADIgmA+QgDADgDABIgDABQgDAAgCgCgATTAWQgDgDAAgEIAAhPQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABPQgBAEgCADQgDADgEAAQgFAAgCgDgAEBATQgDgCAAgFIAAhPQAAgEADgCQADgDAEgBQAEABADADQADACAAAEIAABPQAAAFgDACQgDADgEAAQgEAAgDgDgEAlzgAHQgDgDAAgEQAAgEADgDIA2g3QADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIg2A3QgDADgEAAQgEAAgDgDgEAm+gBSQgDgDAAgEQAAgFADgDIAfgeIgBABIAfgSQAEgCAEABQAEABACAEQACADgBAEQgCAEgDACIgcAQIgBABIgcAcQgDACgEAAQgFAAgCgCgATThXQgDgDAAgEIAAhQQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABQQgBAEgCADQgDADgEAAQgFAAgCgDgAEBhZQgDgDAAgFIAAhQQAAgEADgDQADgCAEgBQAEABADACQADADAAAEIAABQQAAAFgDADQgDACgEAAQgEAAgDgCgEAoYgCNQgEgBgCgEQgCgDACgEQABgEADgCIA7ggIAOgIQAEgCAEABQAEABACADQACAEgBAEQgBAEgEACIgPAIIg6AgIgFABIgDAAgARzirQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIBQAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAQFirQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIBQAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAOXirQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIBQAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAMpirQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIBQAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAK7irQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIBQAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAJNirQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIBQAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAI7jBQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgEAp8gDEQgEgBgCgDQgCgEABgEQABgEAEgCIBDgkQAEgCAEABQAEABACAEQACADgBAEQgCAEgDACIhEAlIgEABIgDgBgAEBjHQgDgDAAgEIAAhRQAAgEADgDQADgCAEAAQAEAAADACQADADAAAEIAABRQAAAEgDADQgDACgEAAQgEAAgDgCgEAragDzQgEgCgBgEQgCgEACgEQABgDAEgCIBKgdQAEgBAEABQAEACABAEQACAEgCAEQgBADgEACIhKAdIgEABIgEgBgEAtAgEbQgEgCgBgEQgCgEACgDQABgEAEgCIBKgdQAEgBAEABQAEACABAEQACAEgCAEQgBADgEACIhKAdIgEABIgEgBgAI7kvQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgAEBk2QgDgCAAgEIAAhQQAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAABQQAAAEgDACQgDADgEABQgEgBgDgDgEAumgFDQgEgCgBgEQgCgEACgDQABgEAEgCIAMgFIABAAIBCgUQAEgBAEACQADACACAEQABAEgCADQgCAEgEABIhCAUIgLAFIgEABIgEgBgEAwQgFmQgDgCgBgEQgCgEACgDQACgEAEgBIBNgXQAEgBAEACQADACACAEQABAEgCADQgCAEgEABIhNAXIgDAAIgFgBgEAx7gGGQgEgCgBgDQgCgEACgEQACgEAEgBIBMgXQAEgCAEACQADACACAEQABAEgCADQgCAEgEACIhMAXIgDAAIgEgBgAHumWQgEgBgDgDQgDgCAAgEQAAgFADgCQADgDAEgBIBQAAQAEABADADQADACAAAFQAAAEgDACQgDADgEABgAGAmWQgEgBgDgDQgDgCAAgEQAAgFADgCQADgDAEgBIBQAAQAEABADADQADACAAAFQAAAEgDACQgDADgEABgAESmWQgEgBgDgDQgDgCAAgEQAAgFADgCQADgDAEgBIBQAAQAEABADADQADACAAAFQAAAEgDACQgDADgEABgEAzogGlQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIBLgPQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIhMAPIgCAAgEA1NgG8QgEgCgBgEQgBgEADgDQACgEAEgBIBOgPQAEgBAEACQADACABAFQABAEgDADQgCADgEABIhOAQIgCAAQgDAAgCgCgEA24gHRQgEgCgBgFQgBgEADgDQACgDAEgBIBPgQQAEgBAEACQADADABADQABAFgDADQgCADgEABIhPAQIgCAAQgDAAgCgBgEA4kgHnQgEgDgBgEQgBgEADgDQACgDAEgBIBPgPQAEgBAEACQADADABAEQABAEgDADQgCADgEABIhPAPIgCAAQgDAAgCgBgEA6QgH8QgEgDgBgDQgBgFADgDQACgDAEgBIBOgPQAEgBAEACQADADABAEQABAEgDADQgCADgEABIhOAPIgCAAQgDAAgCgBgEA77gIRQgEgDgBgEQgBgEADgDQACgDAEgBIATgEQANgKAKgNIAAAAQAGgIAFgJQABgEAEgBQAEgBAEACQAEABABAEQABAEgBAEQgFAKgIAKIAAAAQgMAQgRANIgEABIgVAEIgCAAQgDAAgCgBgEA89gJiQgDgDAAgEIAAgGIAAAAQgBgWgPgWIgMgPQgDgEAAgEQAAgEAEgDQADgCAEAAQAEAAADAEIANARQAUAbAAAcIAAAAIAAAGQAAAEgDADQgDADgEAAQgEAAgDgDgEA8JgK9QgWgRgdgOIgRgHQgEgCgCgEQgBgEABgDQACgEAEgCQAEgBADABIASAIQAgAPAYATQADACABAEQAAAEgDAEQgCADgEAAIgCABQgDAAgDgDgEA6pgLuIg7gVIgRgGQgEgCgBgDQgCgEABgEQACgEAEgCQADgBAEABIARAGIA7AVQAEACACADQABAEgBAEQgCAEgDABIgFABIgDAAgEA5BgMUIhHgaQgEgCgBgDQgCgEACgEQABgEAEgCQAEgBAEABIBGAaQAEACACAEQABAEgBAEQgBADgEACIgFABIgDgBgEA3egM7QgigSgZgUIAAAAIgJgIQgDgDAAgEQgBgEADgDQADgDAEAAQAEgBADADIAJAHIAAAAQAXATAgARQAEABABAFQABADgBAEQgCAEgEABIgEABIgEgBgEA2MgN9QgFgBgCgDQgQgVgMgcIgLgZQgBgDABgEQACgEAEgCQADgBAEABQAEACACADIAKAZQAMAZAOAUQADADgBAFQgBAEgDACQgDACgDAAIgBAAgEA1YgPgQgEgBgBgEIghhIQgCgEABgEQABgDAEgCQAEgCAEACQAEABACAEIAhBIQABAEgBAEQgCADgDACIgFABIgDgBgEA0rgRCQgEgCgCgEIgWgrIAAAAIgMgZQgCgEABgEQABgEAEgBQAEgCAEABQAEABACAEIAMAZIAAAAIAWArQACAEgBAEQgCAEgDACIgFABIgDAAgEAz7gShQgEgBgCgDIgihFQgCgEABgEQABgEAEgCQAEgCAEABQAEACACAEIAiBFQACADgBAEQgCAEgDACIgFABIgDgBgEAzMgT+QgEgCgBgEIgIgOIAAgBQgPglgCgbQgBgEADgDQACgEAFAAQAEAAADACQADADABAEQACAZAOAiIAAAAIAHANQABAEgBAEQgBAEgEACIgEABIgEAAgEAy4gVoQgFgBgCgDQgCgEABgEQADgJAFgHIAAgBQAXgiAPgQQADgCAEgBQAEAAAEADQACADABAEQAAAEgDAEQgPAPgWAgIAAgBQgDAFgBAGQgBAEgEACIgFACIgCgBgEAzzgW+QgEgCgBgEQgBgEACgDQAIgOADgPIAAABQACgSgGgZQgBgEACgEQACgDAEgBQAEgBAEACQADACABAEQAIAegDAUIgBABQgDASgJAQQgCAEgEABIgDABIgFgCgEAzygYpQgEgBgBgEQgJgWgNgWQgIgOgEgOQgCgDACgEQACgEAEgBQAEgBAEACQADACACADQADAMAHALQAOAXAJAYQACAEgCAEQgBAEgEABIgEABIgEgBgEAzRgaNQgEAAgDgDQgDgDAAgEQABghAPgcIAAAAQADgHAKgLIABgCIADgDQACgCAFAAQAEAAADACQACADABAFQgBAEgCADIgCACQgIAKgDAFIAAAAQgOAZAAAbQAAAEgDADQgDADgEAAIAAAAgEA0EgbtQgEgBgDgDQgDgDABgEQAAgEADgDIA7g2QADgDAEABQAEAAADADQADADAAAEQgBAEgDADIg7A2QgDADgDAAIgBAAgEA1Vgc4QgEAAgDgDQgDgDABgEQAAgEADgDIAfgdIABgBIAcgXQADgCAFAAQAEAAACAEQADADAAAEQgBAEgDADIgdAXIgfAcQgDADgDAAIgBAAgEA2ogd/QgFgBgCgDQgDgDAAgEQAAgEADgDQAegbAcgbQADgDAEgBQAEAAADADQADADAAAEQAAAFgDACQgbAdgfAbQgDADgEAAIAAAAgEA3wgfPQgDgCAAgFQgBgEADgDQAbgeAZgfQADgDAEgBQAEgBADADQAEADAAAEQABAEgDADQgZAhgcAeQgDADgEAAIAAAAQgEAAgDgDgEA43ggjQgEgCAAgEQgBgFADgDIAVgfIAAAAIAXgiQACgDAEgBQAEgBADACQAEACABAEQABAEgCAEIgXAjIAAAAIgWAfQgDADgEABIgBAAQgEAAgCgCgEgbigguQgDgDAAgEIAAgrQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAAArQgBAEgCADQgDADgEAAQgFAAgCgDgEgbigh3QgDgDAAgEIAAhQQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABQQgBAEgCADQgDADgEAAQgFAAgCgDgEA5zgh9QgDgCgBgEQgCgEACgEQATgjAHgaIACgIQABgEAEgCQAEgCAEABQADABADAEQACADgBAEIgCAIIAAAAQgIAdgUAlQgCADgEABIgDABIgFgBgEA6SgjkQgEgCAAgFQgBgNgFgMIgMgTIABABQgIgMgDgNQgBgEADgDQACgEAEgBQAEgBADACQAEADABAEQACAJAGAJIAAAAIALAUIABAAQAHAPABASQAAAEgCAEQgDADgEAAIgBAAQgEAAgCgDgEgbigjlQgDgDAAgEIAAhQQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABQQgBAEgCADQgDADgEAAQgFAAgCgDgEA54glGQgEAAgDgDQgDgDABgEQABglAbgpIABgCIABgBQADgCAEAAQAEAAADACQADADAAAFQAAADgCADQgYAkgBAgQgBAEgDADQgDADgEAAIAAgBgEgbiglTQgDgDAAgEIAAhQQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABQQgBAEgCADQgDADgEAAQgFAAgCgDgEA6wgmhIgHgBQgEgBgCgDQgDgDABgEQAAgFAEgCQADgDAEABIAGABQAHgBAEgDIAAAAQAIgIgBgYIAAgBIgBgNQAAgEADgEQACgDAEAAQAEAAAEACQADADAAAEIABAOIAAABQACAkgQANIgBAAQgJAHgOABIgBAAIgBAAgEgbignBQgDgDAAgEIAAhQQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABQQgBAEgCADQgDADgEAAQgFAAgCgDgEA7Egn9QgEgDAAgEIgCgSIAAAAQgFgbABgJIAAgBQAAgOAHgNQACgEAEgCQAEgBAEACQADACACAEQABAEgCAEQgFAJAAAKIAAAAQAAAJAEAYIgBAAIADATQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgEgbigovQgDgDAAgEIAAhQQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABQQgBAEgCADQgDADgEAAQgFAAgCgDgEA7VgpiQgDgDAAgEQAAgEADgDQAXgaAOgbIAFgKQABgEAEgBQAEgCAEACQADACACADQABAEgBAEIgFALQgPAdgZAcQgDADgEABIgBAAQgEAAgDgDgEgbigqdQgDgDAAgEIAAhQQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABQQgBAEgCADQgDADgEAAQgFAAgCgDgEA8Pgq/QgEgBgCgDQgCgEABgEIAFgUIAAAAQAIgeAPgVIAAAAIAEgFQADgEAEAAQAEAAADACQAEADAAAEQAAAEgCADIgEAFIAAAAQgNASgGAaIgGAVQgBAEgEACIgEABIgDgBgEgbigsLQgDgDAAgEIAAhQQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABQQgBAEgCADQgDADgEAAQgFAAgCgDgEA9EgsbQgEgBgDgDQgDgDABgEQAAgEADgDQAUgRAZgLIASgUQACgDAFgBQAEAAADADQADADAAAEQAAAEgCADIgTAVIgEADQgXALgTAPQgDADgDAAIgBAAgEA+SgtkQgEgDgBgEQgBgEADgDIAig2IAAgBIAIgNQACgEAEgBQADgBAEABQAEACACAEQABAEgCAEQgEAIgFAIIgiA1QgDAEgEABIgCAAQgDAAgCgBgEgbigt5QgDgDAAgEIAAhQQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABQQgBAEgCADQgDADgEAAQgFAAgCgDgEA/LgvGQgFgBgDgCQgDgDABgEIABhQQAAgFADgDQADgDAEABQAEAAADACQADAEAAAEIgBBQQgBAEgCADQgDADgEAAIAAAAgEgbigvnQgDgDAAgEIAAhQQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABQQgBAEgCADQgDADgEAAQgFAAgCgDgEA/Jgw1QgDgCgBgEQgCgEACgEIAmhGQACgDAEgBQAEgCAEACQADACACAEQABAEgCAEIgmBGQgCADgEACIgDAAIgFgBgEgbigxVQgDgDAAgEIAAhQQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABQQgBAEgCADQgDADgEAAQgFAAgCgDgEA/+gyVQgEgCgBgEQgBgEACgEIAOgbIABgBIAfgnQACgEAEAAQAEAAAEACQADADABAEQAAAEgDADIgeAmIgNAaQgCAEgEABIgDABIgFgBgEgbigzDQgDgDAAgEIAAhQQAAgEADgDQACgDAFAAQAEAAADADQACADABAEIAABQQgBAEgCADQgDADgEAAQgFAAgCgDgEBA9gzvQgEgDAAgEQgBgEADgEIAKgMIABgCIAugrQADgDAEABQAEAAADADQADADAAAEQgBAEgDADIgsApIgKAOQgDADgEAAIgCABQgDAAgCgCgEgbig0xQgDgDAAgEIAAgRIABgFIARghIAEgEIAFgCIAZAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAIgTAAIgNAaIAAAPQgBAEgCADQgDADgEAAQgFAAgCgDgEBCQg06QgEgBgDgDQgDgDABgEQAAgEADgDIAWgVQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIAZAAQADABADABQACACABADQABADAAADQgBADgCACIgoAmQgDADgEAAIgBAAgEBAyg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEA/Eg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEA9Wg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEA7og1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEA56g1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEA4Mg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEA2eg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEA0wg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAzCg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAxUg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAvmg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAt4g1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAsKg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAqcg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAoug1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAnAg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAlSg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAjkg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAh2g1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAgIg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAeag1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAcsg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAa+g1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAZQg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAXig1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAV0g1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAUGg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEASYg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAQqg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAO8g1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEANOg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEALgg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAJyg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAIEg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAGWg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAEog1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEAC6g1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEABMg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgAhg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBPAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgCPg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgD9g1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgFrg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgHZg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgJHg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgK1g1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgMjg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgORg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgP/g1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgRtg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgTbg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgVJg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgW3g1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgYlg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAgEgaTg1hQgEAAgDgDQgDgCAAgFQAAgEADgDQADgCAEgBIBQAAQAEABADACQADADAAAEQAAAFgDACQgDADgEAAg");
	this.shape_86.setTransform(641.9491,633.55);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF74CC").s().p("AAwBmQgDgDAAgEQAAgFADgDQACgDAFAAIBQgCQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIhQACIAAAAQgEAAgDgCgAAYBoIhPgCQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAFAAIBPACQAEAAADADQACADAAAFQAAAEgDADQgDACgEAAIAAAAgACeBjQgDgDAAgEQAAgFADgDQACgDAFAAIBQgCQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIhQACIAAAAQgEAAgDgCgAhVBlIhQgBQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAFAAIBQABQAEAAADADQACADAAAEQAAAFgDADQgDACgDAAIgBAAgAjDBkIhQgBQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAFAAIBQABQAEAAADADQACADAAAEQAAAEgDADQgDADgDAAIgBAAgAEMBgQgDgDAAgEQAAgFADgDQACgDAFAAIBQgCQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIhQACIAAAAQgEAAgDgCgAkxBiIghgBQgZgBgWgLIgCgCIgBgBQgDgDAAgEQAAgEADgDQADgDAEAAQADAAADADQASAIAUABIAhABQAEAAADADQACADAAAEQAAAEgDADQgDADgEAAIAAAAgAF6BdQgDgDAAgEQAAgFADgDQACgDAFAAIBQgCQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIhQACIAAAAQgEAAgDgCgAHoBaQgDgDAAgEQAAgEADgDQACgEAEAAIAYgBQAEAAAEADQADADAAAEQAAAEgDADQgDADgEAAIgYABIAAAAQgEAAgDgCgAmcBBQgFgFgFgHIAAAAIgng1QgCgCAAgEQABgEADgDQAEgCAEAAQAEABACADIAnA0IABABIAHAJQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAnYgTQgEAAgDgEIgvhAQgCgEAAgEQABgEADgCQAEgDAEABQAEAAACAEIAvBAQADAEgBAEQAAAEgEACQgCACgEAAIgBAAg");
	this.shape_87.setTransform(156.7206,575.3704);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FF74CC").ss(2).p("AgjgNIAnAAIAYAf");
	this.shape_88.setTransform(100.2302,561.618);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF74CC").s().p("AnnH7QgEAAgDgDQgDgDAAgEQAAgFADgCQADgDAEAAIBQAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAgAouH7QgYAAgUgLQgDgCgBgEQgBgEABgEQACgDAEgBQAEgCAEACQAPAJATAAIApAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAgAptHfQgEgBgDgDQgUgZAAghIAAgXQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAXQAAAaAQATQADADgBAEQAAAFgDACQgDADgDAAIgCAAgAqFFzQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgAqFEFQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgAqFCXQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgAqFApQgDgDAAgEIAAhPQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABPQAAAEgDADQgDADgEAAQgEAAgDgDgAqFhEQgDgDAAgEIAAhQQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgEAAgDgDgAqFiyQgDgDAAgEIAAgnQAAgZAMgTQADgDAEgBQAEgBADACQAEACAAAFQABAEgCADQgJAPAAASIAAAnQAAAEgDADQgDADgEAAQgEAAgDgDgApgkTQgEgBgCgDQgCgDAAgEQABgEAEgDQATgNAYAAIAmgBQAFgBACADQAEADAAAEQAAAEgDADQgDADgEABIgmABQgTAAgOAKQgDACgDAAIgCgBgAn6kiQgDgDAAgEQAAgFACgCQADgDAFAAIBQgBQAEgBADADQADADAAAFQAAAEgDADQgDADgEAAIhQABIAAAAQgEAAgDgDgAmMkkQgDgDAAgEQAAgEACgDQADgDAEAAIBQgCQAFgBADADQADADAAAEQAAAEgDAEQgDACgEABIhQACIAAAAQgEAAgDgDgAkeknQgDgDAAgEQAAgEACgDQADgDAEAAIAYgBIA2gNQAEgBADACQAEACABAEQABAEgCAEQgCADgFABIg2ANIgCABIgZABIAAAAQgEAAgDgDgAiwk7QgEgCgBgEQAAgEACgEQACgDAEgBIBOgTQAEgBADADQAEACABAEQABAEgCADQgCAEgFABIhOASIgCABQgDAAgCgCgAhFlUQgDgDgCgDQAAgEACgEQACgEAEgBIAagGIApgZQAEgDAEABQAEABACAEQACADgBAFQgBADgEADIgqAaIgCABIgcAHIgDAAQgCAAgDgBgAAemEQgEgBgCgEQgCgDAAgEQABgEAEgCIBEgqQAEgDADABQAFABACAEQACADgBAEQgBAEgEADIhEAqQgCABgDAAIgCAAgAJ9m6IhNgUQgEgBgCgEQgCgDAAgEQACgEADgCQAEgDAEABIBNAUQAEABACAEQACAEgBAEQgBADgEADQgCABgDAAIgCAAgAB5m9QgDgDgBgEQAAgEACgDQADgDAEgBIBQgJQAEAAADACQAEADAAAEQABAEgDADQgDAEgEAAIhQAJIgBAAQgDAAgDgCgADnnKQgDgDgBgEQAAgEACgDQADgDAEgBIBPgJQAEgBADADQAEACAAAEQABAEgDAEQgCADgFABIhPAJIgBAAQgDAAgDgCgAITnVIg+gQIgMACQgEAAgEgCQgDgDgBgEQAAgEACgDQADgEAEAAIAOgCIAEAAIBAAQQAEABACAEQACAEgBAEQgBAEgEACIgFABIgCAAgAFUnXQgDgDgBgEQAAgEACgDQADgEAEAAIBPgKQAEgBADADQAEACAAAEQABAEgDAEQgCADgFABIhPAKIgBAAQgDAAgDgCg");
	this.shape_89.setTransform(133.1268,510.545);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FF74CC").ss(2).p("AAhgNIgfAYIgmgK");
	this.shape_90.setTransform(203.6632,465.908);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF74CC").s().p("Ag2A2QgFAAgCgDQgDgDABgFQAAgEADgCIAvglQADgDAEAAQAFABABACQADADgBAEQAAAFgCACIgvAmQgDADgDAAIgBgBgAAIAEQgFgBgCgDQgCgCABgEQAAgFACgCIAugmQADgDAFAAQAEABACADQADADAAAFQgBAEgDACIguAlQgDADgDAAIgBAAg");
	this.shape_91.setTransform(214.9499,458.0001);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FF74CC").ss(2).p("AgDggIAQAkIgfAZ");
	this.shape_92.setTransform(224.075,449.1827);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF74CC").s().p("AA6BaQgEgBgCgEIgkhSQgCgDACgEQACgEADgBQAEgCAEACQAEABACAEIAkBRQABAEgBAEQgCADgEACIgEABIgDgBgAAEgRIhGg3QgEgCAAgEQgBgFADgDQACgDAFgBQAEAAADACIBGA3QAEACAAAFQABAEgDADQgCADgEABIgCAAQgDAAgDgCg");
	this.shape_93.setTransform(215.9226,434.1227);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FF74CC").ss(2).p("AgHgiIgGAmIAfAY");
	this.shape_94.setTransform(205.2141,421.156);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF74CC").s().p("AgUAyQgEAAgDgEQgCgDAAgEIACgQIACgEIAkg/QACgEAEgBQAEgBADACQAEACABAFQABADgCAEIgjA9IgCAOQAAAEgDADQgDACgDAAIgCAAg");
	this.shape_95.setTransform(206.9011,410.0487);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FF74CC").ss(2).p("AgWgWIAjAQIgTAh");
	this.shape_96.setTransform(211.2374,400.3178);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF74CC").s().p("AAxCTIhJggQgEgBgCgEQgBgEABgEQACgEAEgBQAEgCADACIBJAfQAEACACAEQABADgBAEQgCAEgEACIgDABIgEgBgAg1BnIgGgDQgVgJgGgXQgGgYAQgSIABgBIADgDQADgCAEgBQAEABADACQADADAAAEQAAAFgDACIgDADQgJALADANQAEAOAMAFIABAAIAGADQAEACABAEQABAEgBADQgCAEgEABIgDABIgFgBgAg0AOQgDgDAAgEQgBgEADgDIA0g8QACgDAEgBQAEAAADADQADADABAEQAAAEgDADIgzA8QgDADgEAAIAAABQgEAAgDgDgAAThFQgDgDAAgEQgBgEADgDIA1g8QADgDAEgBQAEAAADADQADADABAEQAAAEgDADIg1A8QgDADgEAAIAAABQgEAAgDgDg");
	this.shape_97.setTransform(200.8393,383.0512);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FF74CC").ss(2).p("AAlgMIgnAAIgbAd");
	this.shape_98.setTransform(213.6503,365.331);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF74CC").s().p("AGQAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBGAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAE2AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBGAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgADcAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBGAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgACCAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBGAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAAoAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBGAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAgxAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBFAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAiLAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBGAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAjlAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBGAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAk/AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBGAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAmZAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBGAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAnVAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAjvAAIAAAAgAmjAAIAAAAg");
	this.shape_99.setTransform(265.775,364);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FF74CC").ss(2).p("AAZAUIgTgiIgnAA");
	this.shape_100.setTransform(319.0894,365.4885);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF74CC").s().p("AAXDVQgEAAgDgDQgDgDAAgEIAChGQAAgEADgDQADgDAEAAQgEAAgDgDQgDgDAAgEIAChGQAAgEADgDQADgDAEAAQgEAAgDgDQgDgDAAgEIAChFQAAgEADgDQADgDAEAAQgEAAgDgDQgDgDAAgEIABgYIgUgkQAAgDAAgEQABgEADgCQAEgCAEABQAEABACAEIAVAmIABAFIgBAaQAAAEgDADQgDADgEAAQAFAAACADQADADAAAEIgCBFQAAAEgDADQgDADgEAAQAFAAACADQADADAAAEIgCBGQAAAEgDADQgDADgEAAQAFAAACADQADADAAAEIgCBGQAAAEgDADQgDADgEAAIAAAAgAgDiLQgDgBgDgDIgdg2QgCgEABgEQABgEAEgCQAEgCADABQAEACACADIAdA2QACAEgBAEQgBAEgEACIgEABIgDgBg");
	this.shape_101.setTransform(325.3775,389.1022);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FF74CC").ss(2).p("AgYAPIAnAAIABgn");
	this.shape_102.setTransform(326.0998,414.8875);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF74CC").s().p("AgsAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBZAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_103.setTransform(315.1,416.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FF74CC").ss(2).p("AgPAZIACgnIAnAA");
	this.shape_104.setTransform(304.5006,417.925);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FF74CC").ss(2).p("AgYASIAmgGIADgn");
	this.shape_105.setTransform(299.9239,446.5631);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF74CC").s().p("AiMAcQgDgCgBgEQgBgEADgEQACgDAEgBIA8gJQAEAAADACQADADABAEQABAEgDADQgCAEgFAAIg6AJIgCAAQgDAAgDgCgAg9AQQgDgCgBgEQgBgEADgEQACgCAEgBIA7gJQAEAAADACQADADABAEQABADgDADQgCAEgFAAIg6AJIgBAAQgDAAgDgCgAARAEQgDgCgBgDQgBgEADgEQACgDAFgBIA6gIQAFgBADADQADACABAEQgBgEADgDQACgEAFAAIAggFQAFgBADADQADACABAEQABAEgDAEQgCADgEABIgiAFQgEAAgDgCQgDgDgBgEQABAEgDAEQgCADgEABIg8AHIgBAAQgDAAgDgCg");
	this.shape_106.setTransform(282.6,450.625);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FF74CC").ss(2).p("AgPAcIAAgnIAngG");
	this.shape_107.setTransform(264.1501,454.8557);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FF74CC").ss(2).p("AAZAPIgnAAIAAgn");
	this.shape_108.setTransform(264.1,464.65);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FF74CC").ss(2).p("AAKAYIAEgmIgnAA");
	this.shape_109.setTransform(272.8602,467.6816);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FF74CC").ss(2).p("AAQAfIgcgcIAFgn");
	this.shape_110.setTransform(273.801,480.6751);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF74CC").s().p("AAZBYQgDgCgBgEIgNg6QgBgEACgEQACgDAEgBQAFgBADACQAEACAAAEIANA7QABAEgCADQgCAEgEABIgCAAQgDAAgDgCgAAIAKQgDgCgBgEIgKguIgEgFQgDgCAAgFQAAgEADgDQADgCAEgBQADABADACIAHAHQACACAAADIALAxQABADgCAEQgCADgEABIgCABQgDAAgDgCgAgZg9IgMgLQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADIAMALQADADAAAEQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_111.setTransform(279.4266,492.7016);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FF74CC").ss(2).p("AAdAQIgngBIgIgm");
	this.shape_112.setTransform(284.9927,505.6185);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF74CC").s().p("AIGAOIhGgBQgEAAgDgDQgCgDAAgEQAAAFgDADQgDACgFAAIhGgBQgEAAgDgDQgCgDAAgDQAAADgDADQgDADgEAAIhGAAQgEAAgDgDQgDgDAAgDQAAAEgDADQgDACgFAAIhGgBQgEAAgDgDQgCgDAAgDQAAAEgDADQgDACgFAAIhGgBQgEAAgDgDQgCgDAAgDQAAADgDADQgDADgEAAIhFAAQgEAAgDgDQgDgDAAgDQAAAEgDADQgDACgFAAIhGgBQgEAAgDgDQgCgDAAgDQAAAEgDACQgDADgFAAIhGgBQgEAAgDgDQgCgDAAgCQAAACgDADQgDADgEAAIhGAAQgEAAgDgDQgDgDAAgCQAAADgDACQgDADgFAAIhGgBQgEAAgDgDQgCgDAAgDQAAAEgDACQgDADgFAAIhGgBQgEAAgDgDQgCgDAAgDQAAADgDADQgDADgEAAIgwAAQgEAAgDgDQgDgDAAgDQAAgEADgDQADgDAEAAIAwAAQAEAAADADQADADAAAEQAAgEADgDQADgDAEAAIBGABQAEAAADADQADADAAAEQAAgEADgDQADgDAEAAIBGABQAEAAADADQADADAAAEQAAgEADgDQADgDAEAAIBGAAQAEAAADADQADADAAAEQAAgEADgDQADgDAEAAIBGABQAEAAADADQADADAAAEQAAgEADgDQADgDAEAAIBGABQAEAAADADQADADAAADQAAgDADgDQADgDAEAAIBFAAQAEAAADADQADADAAADQAAgDADgDQADgDAEAAIBGABQAEAAADADQADADAAADQAAgDADgDQADgDAEAAIBGABQAEAAADADQADADAAADQAAgDADgDQADgDAEAAIBGAAQAEAAADADQADADAAADQAAgDADgDQADgDAEAAIBGABQAEAAADADQADADAAADQAAgDADgDQADgDAEAAIBGABQAEAAADADQADACAAAEQAAAEgDADQgDADgEAAIgBAAg");
	this.shape_113.setTransform(341.2252,507.575);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FF74CC").ss(2).p("AAPAZIAAgnIgnAA");
	this.shape_114.setTransform(398.525,509.5062);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF74CC").s().p("AgDCUQgDgDAAgEIgBhGQAAgEADgDQADgDADAAQgDAAgDgDQgDgDAAgEIgChFQAAgEADgDQADgDADAAQgDAAgDgDQgDgDAAgEIgChGQAAgEADgDQACgDAEAAQgEAAgDgDQgDgDAAgEIAAgMQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAAMQAAAEgDADQgDACgCABQADAAADACQADADAAAEIACBGQAAAFgDADQgDADgEAAQAEAAADACQADADAAAEIACBFQAAAFgDADQgDADgEAAQAEAAADACQADADAAAEIABBGQAAAFgDADQgDADgEAAIAAAAQgDAAgDgDg");
	this.shape_115.setTransform(400.4002,527.4252);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FF74CC").ss(2).p("AAZAPIgnAAIgBgn");
	this.shape_116.setTransform(402.3002,546.6375);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF74CC").s().p("AgiAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBFAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_117.setTransform(411.2,548.15);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FF74CC").ss(2).p("AARgXIgEAmIgnAA");
	this.shape_118.setTransform(420.1218,546.6184);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF74CC").s().p("AgfDkQgDgDAAgEIAAgDQAAgFADgCQADgDAEAAQAEAAADADQADACAAAFIAAADQAAAEgDADQgDACgEABQgEgBgDgCgAgVDGQgEgBgDgDQgDgDABgEIAJhQQAAgFADgCQAEgDAEABQAEAAACADQADADAAAFIgJBQQgBAEgDACQgDADgDAAIgBAAgAgJBYQgEgBgCgDQgDgEABgEIAJhOQAAgEADgCQAEgDADABQAEAAACADQADAEAAADIgJBPQgBAEgCACQgDADgDAAIgCAAgAADgUQgDgBgDgDQgCgDAAgEIAIhQQABgFADgCQADgDAEABQAEAAADADQADADgBAFIgJBQQAAAEgEACQgCADgEAAIgBAAgAAPiCQgEgBgDgDQgCgEAAgEIAJhPQABgEADgCQADgDAEABQAEAAADADQADAEgBAEIgJBPQAAAEgEACQgCADgEAAIgBAAg");
	this.shape_119.setTransform(424.5776,520.5974);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FF74CC").ss(2).p("AAbgOIgnAAIgEAm");
	this.shape_120.setTransform(429.1782,492.9816);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FF74CC").ss(2).p("AAPgYIAAAnIgnAA");
	this.shape_121.setTransform(440.65,489.95);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF74CC").s().p("AgGBmQgDgDAAgEIAAhQQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgDAAgDgDgAgGgHQgDgDAAgEIAAhQQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABQQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_122.setTransform(442.15,474.05);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FF74CC").ss(2).p("AAZgOIgnAAIAAAn");
	this.shape_123.setTransform(443.65,458.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FF74CC").ss(2).p("AAVgVIgMAlIgnAA");
	this.shape_124.setTransform(454.9768,455.8494);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF74CC").s().p("AgkB1QgEgBgBgEQgCgEACgEIACgFQABgDAEgCQAEgCAEACQAEABABAEQACAEgCAEIgCAFQgBAEgEABIgEABIgEgBgAgYBUQgEgBgCgEQgCgEACgEIAXhMQABgEADgCQADgBAEABQAEABACADQACAEgBADIgWBNQgCAEgDACIgFABIgDAAgAAHgVQgEgBgCgEQgBgEABgEIAXhMQABgEADgCQAEgCAEABQAEABACAEQACAEgBAEIgXBMQgCAEgDACIgFABIgDAAg");
	this.shape_125.setTransform(460.8457,441.1793);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FF74CC").ss(2).p("AAGA2IAAgoIgLAm");
	this.shape_126.setTransform(465.7459,421.9972);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF74CC").s().p("AgGKKQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDgAgGIwQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQgDAAgDgDQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDgAgGF8QgDgDAAgEIAAhGQAAgEADgDQADgDADAAQgDAAgDgDQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDgAgGDIQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQgDAAgDgDQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDgAgGAUQgDgDAAgEIAAhFQAAgEADgDQADgDADAAQgDAAgDgDQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQgDAAgDgDQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQAEAAADADQADADAAAEIAABFQAAAEgDADQgDADgEAAQgDAAgDgDgAgGj5QgDgDAAgEIAAhGQAAgEADgDQADgDADAAQgDAAgDgDQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDgAgGmtQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDgAgGoHQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQgDAAgDgDQgDgDAAgEIAAgaQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAaQAAAEgDADQgDADgEAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_127.setTransform(466.3,493.125);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FF74CC").ss(2).p("AAeAoIAAgoIg8AAIAAgn");
	this.shape_128.setTransform(469.35,564.35);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF74CC").s().p("AgGF3QgDgDAAgEIAAhGQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDgAgGEdQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDgAgGDDQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDgAgGBpQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDgAgGAPQgDgDAAgEIAAhFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABFQAAAEgDADQgDADgEAAQgDAAgDgDgAgGhKQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDgAgGikQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDgAgGj+QgDgDAAgEIAAhGQAAgEADgDQADgDADAAQgDAAgDgDQgDgDAAgEIAAgQQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAQQAAAEgDADQgDADgEAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_129.setTransform(472.4,606.575);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FF74CC").ss(2).p("AgiAoIAAgoIBFAAIAAgn");
	this.shape_130.setTransform(468.925,650.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF74CC").s().p("AgGBnQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABGQAAAEgDADQgDADgEAAQgDAAgDgDgAgGANQgDgDAAgEIAAhFQAAgEADgDQADgDADAAQgDAAgDgDQgDgDAAgEIAAgMQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAMQAAAEgDADQgDADgEAAQAEAAADADQADADAAAEIAABFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_131.setTransform(465.45,665.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FF74CC").ss(2).p("AgYAPIAnAAIAAgn");
	this.shape_132.setTransform(463.95,680.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF74CC").s().p("AgdAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA7AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_133.setTransform(455.65,681.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FF74CC").ss(2).p("AgOAZIAAgnIAnAA");
	this.shape_134.setTransform(447.75,683.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#FF74CC").ss(2).p("AgYAPIAnAAIAAgn");
	this.shape_135.setTransform(444.75,690.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF74CC").s().p("APtAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAN/AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAMRAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAKjAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAI1AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAHHAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAFZAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgADrAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAB9AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAAPAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAheAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAjMAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAk6AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAmoAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAoWAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAqEAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAryAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAtgAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAvOAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAw8AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBQAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_136.setTransform(330.15,692);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FF74CC").ss(2).p("AgOgYIAAAnIAnAA");
	this.shape_137.setTransform(216.15,690.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF74CC").s().p("AgEHoQgDgCAAgFIgBg+QAAgEADgDQADgDADAAQgDAAgDgDQgDgDAAgEIAAhGQAAgEADgDQADgDADAAQgDAAgDgDQgDgDAAgEIgBhGQAAgEADgDQADgDADAAQgDAAgDgDQgDgDAAgEIgBhGQAAgEADgDQADgDAEAAQgEAAgDgDQgDgDAAgEIAAhGQAAgEADgDQADgDAEAAQgEAAgDgDQgDgDAAgEIgBhFQAAgEADgDQADgDAEAAQgEAAgDgDQgDgDAAgEIAAhGQAAgEADgDQADgDAEAAQgEAAgDgDQgDgDAAgEIAAhGQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAABGQAAAEgDADQgDADgDAAQADAAADADQADADAAAEIAABGQAAAEgDADQgDADgDAAQADAAADACQADADAAAEIABBFQAAAFgDADQgCADgEAAQADAAADADQADADAAAEIAABGQAAAEgDADQgDADgDAAQADAAADACQADADAAAEIABBGQAAAFgDADQgCADgEAAQADAAADACQADADAAAEIABBGQAAAFgDADQgCADgEAAQADAAADADQADADAAAEIAABGQAAAEgDADQgDADgDAAQADAAADACQADADAAAEIABA/QAAAEgCADQgDADgEAAIgBAAQgDAAgDgDgAgIjfQgDgDAAgEIAAhGQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAABGQAAAEgDADQgDADgDAAQgEAAgDgDgAgIk5QgDgDAAgEIAAhGQAAgEADgDQADgDAEAAQgEAAgDgDQgDgDAAgEIAAhGQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAABGQAAAEgDADQgDADgDAAQADAAADADQADADAAAEIAABGQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_138.setTransform(214.4252,638.4252);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FF74CC").ss(2).p("AgYgMIAngCIAAAn");
	this.shape_139.setTransform(212.6562,584.7874);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]}).wait(1));

	// Roads
	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FEE196").ss(4).p("AofjoQBrAbBvAIQBLAGAmAAQArAAAngGQAngGAygNQAkgHAZAMQAIAEAUAKQAWALAXAHQAkAKATgEQAPgEANgLQANgLAJgCQAZgEA7BFQAvA4AiA3QAWAfAQAWQAHAIALANQALAOAPAVQAfAsBIBy");
	this.shape_140.setTransform(496.5944,691.5908);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FEE196").ss(4).p("AuSpDQBDgDA8gGQBfgIALAAQAjAAAKAOQADAEAAAMQgBANgDA6QgCAnAAALQABAQAIAFQAFAEAJgCQAGgBAOgGIBhgkQAogSAPgFQAVgHAOAAQAPABAPAHQAMAFAYAPQA3AjA+AvQA3ArAwAlQAXASAIATQAIAUACAZQABAPABAqQAAAWgFAvQgDAYAIAPQAKATAZANQAQAIAvASQARAHB6BPQBhBAB9BmQCqCMFlDQ");
	this.shape_141.setTransform(642.8525,773.7385);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FEE196").ss(4).p("AHt37QhzgPgLAbQgCAFAGANQAGAOgBAMQgBAUgPATQgQATgUAGQgRAGgdgKQgfgLgZAEQgkAFgUAVQgLANgFASQgDALgEAWQgFAYgRAaQgMARgkArQhsCDmTHVQgVAVgLAlQgIAfAGAjQADARAIAYQAPAogCA9QgCAogIB/QgEBVADE0QAEGOgGHiQgEETgECy");
	this.shape_142.setTransform(261.7052,820.8039);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#FEE196").ss(4).p("A4/INQClgrBJA8QANALAXAdQAXAcAcAXQAxAmBHAOQAvALAigFQAcgEAbgSQAngbAigVQA0ggAYgMQAjgRAjgGQAagFAcACQASAAApAGQAwAGAvAPQA0ARAeAGQBdAOBYgRQAigHAlgRQBug0AOgGQBLghBugqQBMgeBJgaQAngPAYgXQAbgYARgkQASgmAiggQArgqBthIQAmgYAJgHQANgKAGgLQAQgcgJgxQgJgxAOgYQAJgPAWgKQAngRAagRQAZgQAXgVQAjgiATgQQAUgRAXgQQA9gpAkgZQBahBAUgNQAXgRAVgHQAPgFAZgCQAwgEA/gJQA+gJAdgHQAUgEAOgGQAggOAdgVQAUgPAbgaQA9g7A6hI");
	this.shape_143.setTransform(615.8951,879.6502);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FEE196").ss(4).p("AqnUBQDSiUC2iLQBKg4BghMQA6gtA6gqQBOg5CChRQBDgrAugwQBGhJA0hZQAfg0AfhHQAWg1AOhKQAfigAoipQAZhnAFgdQAMg9ACg8QACgxgGguQgKhIgDg8QgJiQAFiPIAGhzQAMhoAUhf");
	this.shape_144.setTransform(488.079,797.0183);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#FEE196").ss(4).p("EggagMOQA5AAAiAXQATANAlAaQAGADCRBGQBEAhBDAWQBAAWAgAIQAuAMAvACQAgACAsgEQA6gGAxgBQBLgCBbAIQBSAHCfAiQBJAPA+ARQA4AOA7AMQA/ANCtAiQBFAOAbAIQAbAHAWALQAnAUAiAgQAVAUAxA1QAfAhAuAoQAiAeBWBIQA8AzA7AqQA4AoA3AuQAeAaBLBFQAmAiAoAaQArAbAyAYQAdAOBDAcQBxAuBnAcIAOAEQCQAnDZBOQBtAmBQAfQEABkFFA5");
	this.shape_145.setTransform(207.2965,845.95);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#FEE196").ss(4).p("EArlATXQAAgTg/hKQhNhWgdgkQhxiLg4hGQhQhjgVgcQgdgogTgoQgVgvgJg0QgLhIgLg8QgeirgThBQgdhlgyhEQgyhFhOgxQgwgfhnguQhGgfhjgWQhFgPi4geQg9gLhHgJQh1gQh4gRQlIgthQgNQhlgQhXgRQiSgeipgeQjSgmgngJQhCgQgzgeQgagQg6g4Qgkgjh5h7QidiggDgDQg+g7hCgrQhYg4hZgfQhKgagigGQg1gMgxAJQgqAHgqAYQgbAQhFAxQgjAZhjBZQgjAfgvArQglAjgjAeQhXBLgsAbQg8Alg5AVQgkANgoAIQg1AJhKACIgGAAQg1ABg5gDQhqgFhOgQQhTgSiyg7Qihg2gGAAIgQAA");
	this.shape_146.setTransform(280.275,957.7024);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#FEE196").ss(4).p("AAxJoQAAhBgDggQgDgfgIgkQgGgagehaQgSg3ACgyQACgiAOggQARgpAHgmQANhCgGhJQgEgsgRhiQgJgvgQhAQgNg0gIg1QgNhfAChZ");
	this.shape_147.setTransform(1016.4121,1020.1578);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FEE196").ss(4).p("EhefgcXQBKABAugrQAVgWAJgJQAQgPAOgCQAWgEAzABQAqAAAmgLQAhgJAhgTQAlgVAagKQAvgRA0gEQAegCA2ADQA1ADA2AQQAlALB8ApQB6AkAuALQBHARBDAFQA2AFA0gFQAwgFA3AFQA2AGBOATQBSATBKAJQBFAIAZACQAjACAUgDQBIgOBFhKQBMhSA+gWQAsgRA2ANQBHARBXgJQAqgECQggQBdgVBRAOQA7ALAoATQBJAiA2BCQAjArAWAxQAQAkAHAvQAFAeAHBYQgSBpAGBoQABAkgBAwQACAhAPARQAgAiBRgIQBlgKCeAFQDYAIArgBQBrAACEABQDKACBqAGQAmACAcgDQA1gGAugVQAVgKASgOQAUgPAPgIQAtgXA+AEQAlACBcAIQA1ACAxgIQA8gJBBgCQCngGCKAXQBOANA0AOQBXAXBQAmQAyAXA0AkQCbBrAHAEQAtAdDEB7QJSFzBxBLQBQA0ETC5QB7BUCDBZQBRA2BLArQBZAyBVA2QAxAgAwAiQBEAxAUANQBJAxBGAoQBNAsAuAeQBKAxBBA3QBgBRAkAcQA2ApBBApQBBAoDFByQCcBbDtCJQCFBMBjA8QELCfBkBAQByBJCIBdQBoBEBnA0QBWAsA6AZQBaAnBeAcQBIAVBMANQBTAOCRAQQE1AhDlAKQDLAKA0ACQCXAGCzAB");
	this.shape_148.setTransform(604.8171,792.02);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140}]}).wait(1));

	// Coquitlam_River
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#12B3FD").s().p("ArIELIEpiaQA8gfBqg6QA9ggA/gdQAygXB/g4QB9g1BcgkIBggjICdg7QArgPAkgCQANgBAZAAIA6gBIArgEIAzgCQAOAAAMAEIgBDUQgYAHglAIQhJAOg+ADQgmABgigCQgZgCgXADQgtAGgtAYQg7AjgxAZQg9AghBAXQg9AWg6AgQgyAdhqBKQhiBEghAcIpCAAIgHADQgFAABsg6g");
	this.shape_149.setTransform(1127.9977,1049.413);

	this.timeline.addTween(cjs.Tween.get(this.shape_149).wait(1));

	// Fraser
	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#12B3FD").ss(3).p("EAFmg6kQCvA0ABA1QABAPgVAUQgWAXgEAVQgDAWAVAeQAOAUA1BIQApA7AMAWQARAggEAYQgDASgQATQgdAggSAdQgbAtgIATQgMAcACAaQACAYATAYQAXAdAIAcQAJAegFAmQgGAkAJAbQAIAZAXAWQAhAhAVAfQAfAvALAaQATArgJAjQgEAPgOAOQgsAugDADQgoAtgSAWQgaAkgPAjQgiBSAPBEQAHAhAaAmQAZAlAHAkQAFAbgFAaQgHAjABAeQABAzAWA3QAZA7AEAzQAEAqgFAuQgDAZgJAsQgJAtgGAVQgJAfgPAbQgMAWgYAdQgRAUgGAVQgHAZAHAcQALAqACAXQADAzgYA/QgTAyAOAaQAIAQAbAOQAeAQAUAaQAbAjAMA4QAHAfgEAjQgIBKgBAYQgDAxAAA2QgBAhgQAVQgdAmgrAIQgdAFglgOQgfgLgIAHQgNAKAKAnQAGAUARAqQARApAdArQAYAjAIAgQAEAPAAAVQAAAnADAxQABAaAHBCQADAWgFARQgFAUgSAVQgiAkgiAoQhZBogJAoQgEANAAAdQABARADA7QACAnAGA6QAEAtABApQABBCgIAtQgEAagPA1QgWBKgDAIQgJAfgGALQgUAqgrAhQgmAdgKAhQgJAbAGAmQAHAkgLAeQgGAVgQAUQgTAXgsApQhBA9gaAWQgiAdgYAMQg+AfhkgBQhTAAglAkQgcAbgOArQgIAWgCATQgEAhAQAtQAOAqgGAfQgHAfgbAeQgYAagBAYQgBAbAfAjQAuA0AWArQAPAdAKAfQASA3gRAQQgKAJgigKQgigKgOALQgOALAFApQAEAsgOAPQgSAUg9gIQg8gJgMARQgIALANAkQAPArgHAiQgDARgIAQQgPAggaAUQgYASgkAEQgkAEgPAOQghAcACBCQACAmAJAfQAaBeBCAlQAWANAsAIQAgAHANASQALAPAAAXQABAQgGAmQgJBJgrBAQgIAMg5BDQgbAggHALQgJALgDALQgKAdAQBFQAOA6AaA8IG9Fh");
	this.shape_150.setTransform(592.2388,612.7876);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#12B3FD").s().p("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");
	this.shape_151.setTransform(683.1825,605.9475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_151},{t:this.shape_150}]}).wait(1));

	// Sasamat
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#12B3FD").s().p("ABDEyQgMAAgMggQgGgTgOg6QgGgYgGghQgEgYgGgTQgJgegGgOQgMgbgQgVQgUgagsgcQgngagTggQgagsANgRQAIgMAcgEQANgCAMAAQgHgNgFgSQgLgkAKgUQAIgQAUgJQATgKATAEQAOADAPATQARAWASAJQAOAHAQAAQASABANAFQAXAIAUAVQALALAZAiQAbAlAGANQAMAWgGAPQgFAOgZALQgYALgDAMQgCAMAQASQAUAXAFAUQAEAOgDAUQgDAOgLAoQgOAygZA2QgTApgHAMQgKARgHAAIAAAAg");
	this.shape_152.setTransform(225.3112,430.2914);

	this.timeline.addTween(cjs.Tween.get(this.shape_152).wait(1));

	// Burrard_Inlet
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#12B3FD").s().p("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");
	this.shape_153.setTransform(210.7093,325.1542);

	this.timeline.addTween(cjs.Tween.get(this.shape_153).wait(1));

	// Coquitlam_Lake
	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#12B3FD").s().p("AFFTlIgdgKQgngPgygDQglgCgSgPQgMgLgFgTQgHgYgPgUQgPgVgZgQQgkgYgYgWQgcgagKgMQgPgRgHgTQgIgVABgZQACgcgEgSQgHgegbgZQgggfgNgXQgJgTgEgnQgCgZgChPQABhfgBgaQgBgkgQgWQgEgFgUgVQgQgSgNgVQgIgOgMgZIgKgWIgogWQgagPgcguQgKgQgkhDQgeg5gcgnQgQgWgFgWQgIghAIgpQAJgwgEgqQgFgqgOgrQgJgZgUgvQgOgggqhHQgVglADgfQACgdARgfQAJgRAUgbQAQgXAdgZQAVgTAIgVQAEgLAAgSQgBgWgIg+QgOhggDgsQgFg7ABgVQACgfALgPQAKgPAagLQAfgNAYgWQAlghAQglQAPgkgCgbIJlAAQgBAUglASQg+AdgnAfQhgBNgrBZQgTApgGAXQgKAmAKAhQALAmAeAdQAfAbASgIQAKgEAFgaQAFgZALgFQAOgFATAMQATANAJATQAFANgBARQgBAPAGAHQANARAggBQAhgBAWgTQAMgKAHgVQAHgRAJgEQAVgJAgAXQAeAWgFAQQgCAHgPADQgWAEgNAIQgtAdgHBZQgCAdAJAfQAJAegDAcQgDAagPAgQgLAZADAVQAEAbASAZQASAYAZAMQAlARA5gMIAygKQABACgZAQQgbARgBASQgBAKAKALQAOARADAFQANAbgVAuQgSApg9BXQgjAygcAiQgSAXgLATQg6BfgZB2QgOBBAEBDQAFBNgLBJQgJBFgVBUQgLA4AWAYQAMANAgAKQArANAoAZQAdATANAKQATAOANATQAQAXAJAiQAIAbAPAMQALAIAVACQAtAFAgAGQAqAJAPAHQALAFACAGQAEANgVAUQgLAKgZASQgeAVgRAHQgeAOgbgDQgYgDgegSQgXgOgGAEQgGAFAEAZQAFAZgIAGQgDAEgHAAIgJgCg");
	this.shape_154.setTransform(578.4636,125.4063);

	this.timeline.addTween(cjs.Tween.get(this.shape_154).wait(1));

	// Buntzen
	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#12B3FD").s().p("AAISPQgNgRgYgsQgZgsgKgWQgRgjgJghIgJgcQgHgRgLgNQgHgIgNgLQgKgHgEgJQgHgOAFgTQAFgWgDgMQgFgPgUgMQgXgOgLgRQgPgYgBgeQAAgcAKgFQAEgCAKAGQAKAGAIgCQANgCAKgQQAEgHAGgPQACgHABgKIACgnQADgoADgJQAFgRAHgOQAHgOAEABQACABAAARQAAARAHAGQAIAGAPgFQAOgFAKgLQANgOAEgsQACgYgCgVQgCgRACgNQAEgXAPgcQAMgUgFgOQgEgMgMgKQgLgKgNgDQgKgCgLADQgLACgGgDQgJgDgGgOIgRgpQgQgjgNgRQgLgPgRgNQgNgLgGgLQgJgSgBgVQgBgXALgKQAKgJAgAJQAmALAZgJQAggKAXgmQAOgYADgcQABgRgDgYQgDgSgYhAIgTgxQgGgQgEgQQgFgbAAgOQAAgWALgNQAKgLAWgGQASgEAWAHQARAHAGgEQAFgEABgNQAAgUgJgwIgJguIgEgaQgCgWACgWQAGgiACgYQACgjgEguQgCgZAJgNIAOgWQAKgRAAgRIgCgMQgFgbgWgQQgIgGgNgBQgVgCgNgDQgagGgKgEQgQgHgGgMQgFgJAFgUQAEgSgHgLQgCgEgGgEQgLgGgHgGQgUgQgGgHQgKgKgCgLQgBgJAEgKQAEgKAIgGQAIgGATAFQAXAFARgEQAcgGAGgOQAEgIgDgMQgDgJgMgYQgLgVgSggQgIgOACgCQAGgHAnAZQAnAZAlAjQA9A3gDAeQgBAMgKANQgPASgGAPQgSAtANAzQAIAgAXAcQAOAQAeAaQAaAWAeAMQAXAJALAPQANAQAFAqQADAeADBWQACBFgCAhIgGA2QgEAegCAbQgBAZABA7QACA8AGAsQADAbgCARQgFAhgWAfQgaAlgOAvQgFASgDAXQgDAjgMA8QgHAlgBALQgCAUAHARQAGARAQAMQAWASAIALQAYAgAFAvQACAbgFAqQgFArgEAQQgJAcgSALQgLAGgXgBQgigCggAEQgtAGgTAOQgJAHgGAKIgTAbQgPASgaAVQgQANgEAPQgCAGgBAMQAAATAIAPQAGAKALAHQALAIAEAHQAHANgFAVQgGAcABAOQACAPALAOIAZAjQAPAZAHAcQAJAiAPAdQAPAeAXAkQAOAZgGARQgDAKgHAJQgJAJgKABIgDABQgRAAgUgbg");
	this.shape_155.setTransform(332.0239,260.418);

	this.timeline.addTween(cjs.Tween.get(this.shape_155).wait(1));

	// Belcarra
	this.Belcarra = new lib.Belcarra();
	this.Belcarra.name = "Belcarra";
	this.Belcarra.setTransform(168.6,385.2,1,1,0,0,0,102.5,95.2);

	this.timeline.addTween(cjs.Tween.get(this.Belcarra).wait(1));

	// Anmore
	this.Anmore = new lib.Anmore();
	this.Anmore.name = "Anmore";
	this.Anmore.setTransform(344.75,329.6,1,1,0,0,0,121.5,218.2);

	this.timeline.addTween(cjs.Tween.get(this.Anmore).wait(1));

	// Port_Moody
	this.Port_Moody = new lib.PortMoody();
	this.Port_Moody.name = "Port_Moody";
	this.Port_Moody.setTransform(270.9,528,1,1,0,0,0,201.6,164);

	this.timeline.addTween(cjs.Tween.get(this.Port_Moody).wait(1));

	// Port_Coquitlam
	this.Port_Coquitlam = new lib.Port_Coquitlam();
	this.Port_Coquitlam.name = "Port_Coquitlam";
	this.Port_Coquitlam.setTransform(693.5,773.7,1,1,0,0,0,174.1,179.9);

	this.timeline.addTween(cjs.Tween.get(this.Port_Coquitlam).wait(1));

	// Coquitlam
	this.Coquitlam = new lib.Coquitlam();
	this.Coquitlam.name = "Coquitlam";
	this.Coquitlam.setTransform(642.45,631.1,1,1,0,0,0,428.1,340.1);

	this.timeline.addTween(cjs.Tween.get(this.Coquitlam).wait(1));

	// Layer_8
	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#006565").s().p("EhedhUfMC87AAAMAAACo+Mi87AABg");
	this.shape_156.setTransform(605.8,540.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_156).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(597.8,540,613.9000000000001,543.8);
// library properties:
lib.properties = {
	id: '97645AD48A93ED4E9592EC7D263BA204',
	width: 1200,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['97645AD48A93ED4E9592EC7D263BA204'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;