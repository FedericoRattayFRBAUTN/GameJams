gdjs.main_95menuCode = {};
gdjs.main_95menuCode.GDtitleObjects1= [];
gdjs.main_95menuCode.GDtitleObjects2= [];
gdjs.main_95menuCode.GDoptionsObjects1= [];
gdjs.main_95menuCode.GDoptionsObjects2= [];
gdjs.main_95menuCode.GDhelpObjects1= [];
gdjs.main_95menuCode.GDhelpObjects2= [];
gdjs.main_95menuCode.GDstartObjects1= [];
gdjs.main_95menuCode.GDstartObjects2= [];
gdjs.main_95menuCode.GDcreditsObjects1= [];
gdjs.main_95menuCode.GDcreditsObjects2= [];
gdjs.main_95menuCode.GDhelp_9595imageObjects1= [];
gdjs.main_95menuCode.GDhelp_9595imageObjects2= [];


gdjs.main_95menuCode.mapOfGDgdjs_9546main_959595menuCode_9546GDhelp_95959595imageObjects1Objects = Hashtable.newFrom({"help_image": gdjs.main_95menuCode.GDhelp_9595imageObjects1});
gdjs.main_95menuCode.asyncCallback14504804 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level0", true);
}}
gdjs.main_95menuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.main_95menuCode.asyncCallback14504804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main_95menuCode.asyncCallback14505844 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "options_menu", true);
}}
gdjs.main_95menuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.main_95menuCode.asyncCallback14505844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main_95menuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.main_95menuCode.GDhelp_9595imageObjects1.length = 0;

{gdjs.evtTools.sound.preloadSound(runtimeScene, "menu_select.wav");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_95menuCode.mapOfGDgdjs_9546main_959595menuCode_9546GDhelp_95959595imageObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.main_95menuCode.GDhelp_9595imageObjects1.length ;i < len;++i) {
    gdjs.main_95menuCode.GDhelp_9595imageObjects1[i].getBehavior("Resizable").setSize(1216, 685);
}
}{for(var i = 0, len = gdjs.main_95menuCode.GDhelp_9595imageObjects1.length ;i < len;++i) {
    gdjs.main_95menuCode.GDhelp_9595imageObjects1[i].setZOrder(10);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.main_95menuCode.GDstartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main_95menuCode.GDstartObjects1.length;i<l;++i) {
    if ( gdjs.main_95menuCode.GDstartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main_95menuCode.GDstartObjects1[k] = gdjs.main_95menuCode.GDstartObjects1[i];
        ++k;
    }
}
gdjs.main_95menuCode.GDstartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "menu_select.wav", 10, false, 40, gdjs.randomInRange(0.9, 1));
}
{ //Subevents
gdjs.main_95menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.main_95menuCode.GDoptionsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main_95menuCode.GDoptionsObjects1.length;i<l;++i) {
    if ( gdjs.main_95menuCode.GDoptionsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main_95menuCode.GDoptionsObjects1[k] = gdjs.main_95menuCode.GDoptionsObjects1[i];
        ++k;
    }
}
gdjs.main_95menuCode.GDoptionsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "menu_select.wav", 10, false, 40, gdjs.randomInRange(0.9, 1));
}
{ //Subevents
gdjs.main_95menuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("help"), gdjs.main_95menuCode.GDhelpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main_95menuCode.GDhelpObjects1.length;i<l;++i) {
    if ( gdjs.main_95menuCode.GDhelpObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main_95menuCode.GDhelpObjects1[k] = gdjs.main_95menuCode.GDhelpObjects1[i];
        ++k;
    }
}
gdjs.main_95menuCode.GDhelpObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main_95menuCode.GDhelpObjects1 */
gdjs.copyArray(runtimeScene.getObjects("help_image"), gdjs.main_95menuCode.GDhelp_9595imageObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "menu_select.wav", 10, false, 40, gdjs.randomInRange(0.9, 1));
}{for(var i = 0, len = gdjs.main_95menuCode.GDhelp_9595imageObjects1.length ;i < len;++i) {
    gdjs.main_95menuCode.GDhelp_9595imageObjects1[i].toggleVariableBoolean(gdjs.main_95menuCode.GDhelp_9595imageObjects1[i].getVariables().getFromIndex(0));
}
}{for(var i = 0, len = gdjs.main_95menuCode.GDhelpObjects1.length ;i < len;++i) {
    gdjs.main_95menuCode.GDhelpObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("help_image"), gdjs.main_95menuCode.GDhelp_9595imageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main_95menuCode.GDhelp_9595imageObjects1.length;i<l;++i) {
    if ( gdjs.main_95menuCode.GDhelp_9595imageObjects1[i].getVariableBoolean(gdjs.main_95menuCode.GDhelp_9595imageObjects1[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.main_95menuCode.GDhelp_9595imageObjects1[k] = gdjs.main_95menuCode.GDhelp_9595imageObjects1[i];
        ++k;
    }
}
gdjs.main_95menuCode.GDhelp_9595imageObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main_95menuCode.GDhelp_9595imageObjects1 */
gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.main_95menuCode.GDoptionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.main_95menuCode.GDstartObjects1);
{for(var i = 0, len = gdjs.main_95menuCode.GDhelp_9595imageObjects1.length ;i < len;++i) {
    gdjs.main_95menuCode.GDhelp_9595imageObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.main_95menuCode.GDoptionsObjects1.length ;i < len;++i) {
    gdjs.main_95menuCode.GDoptionsObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main_95menuCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.main_95menuCode.GDstartObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("help_image"), gdjs.main_95menuCode.GDhelp_9595imageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main_95menuCode.GDhelp_9595imageObjects1.length;i<l;++i) {
    if ( gdjs.main_95menuCode.GDhelp_9595imageObjects1[i].getVariableBoolean(gdjs.main_95menuCode.GDhelp_9595imageObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.main_95menuCode.GDhelp_9595imageObjects1[k] = gdjs.main_95menuCode.GDhelp_9595imageObjects1[i];
        ++k;
    }
}
gdjs.main_95menuCode.GDhelp_9595imageObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main_95menuCode.GDhelp_9595imageObjects1 */
gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.main_95menuCode.GDoptionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.main_95menuCode.GDstartObjects1);
{for(var i = 0, len = gdjs.main_95menuCode.GDhelp_9595imageObjects1.length ;i < len;++i) {
    gdjs.main_95menuCode.GDhelp_9595imageObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.main_95menuCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.main_95menuCode.GDstartObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main_95menuCode.GDoptionsObjects1.length ;i < len;++i) {
    gdjs.main_95menuCode.GDoptionsObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("help"), gdjs.main_95menuCode.GDhelpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main_95menuCode.GDhelpObjects1.length;i<l;++i) {
    if ( !(gdjs.main_95menuCode.GDhelpObjects1[i].IsActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.main_95menuCode.GDhelpObjects1[k] = gdjs.main_95menuCode.GDhelpObjects1[i];
        ++k;
    }
}
gdjs.main_95menuCode.GDhelpObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main_95menuCode.GDhelpObjects1 */
{for(var i = 0, len = gdjs.main_95menuCode.GDhelpObjects1.length ;i < len;++i) {
    gdjs.main_95menuCode.GDhelpObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.main_95menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main_95menuCode.GDtitleObjects1.length = 0;
gdjs.main_95menuCode.GDtitleObjects2.length = 0;
gdjs.main_95menuCode.GDoptionsObjects1.length = 0;
gdjs.main_95menuCode.GDoptionsObjects2.length = 0;
gdjs.main_95menuCode.GDhelpObjects1.length = 0;
gdjs.main_95menuCode.GDhelpObjects2.length = 0;
gdjs.main_95menuCode.GDstartObjects1.length = 0;
gdjs.main_95menuCode.GDstartObjects2.length = 0;
gdjs.main_95menuCode.GDcreditsObjects1.length = 0;
gdjs.main_95menuCode.GDcreditsObjects2.length = 0;
gdjs.main_95menuCode.GDhelp_9595imageObjects1.length = 0;
gdjs.main_95menuCode.GDhelp_9595imageObjects2.length = 0;

gdjs.main_95menuCode.eventsList2(runtimeScene);

return;

}

gdjs['main_95menuCode'] = gdjs.main_95menuCode;
