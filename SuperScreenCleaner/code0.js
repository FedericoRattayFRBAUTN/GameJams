gdjs.menuCode = {};
gdjs.menuCode.GDmenuObjects1= [];
gdjs.menuCode.GDmenuObjects2= [];
gdjs.menuCode.GDplayObjects1= [];
gdjs.menuCode.GDplayObjects2= [];
gdjs.menuCode.GDhowtoObjects1= [];
gdjs.menuCode.GDhowtoObjects2= [];
gdjs.menuCode.GDbackgroundObjects1= [];
gdjs.menuCode.GDbackgroundObjects2= [];
gdjs.menuCode.GDcreditsObjects1= [];
gdjs.menuCode.GDcreditsObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "game");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.menuCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDplayObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDplayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDplayObjects1[k] = gdjs.menuCode.GDplayObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDplayObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "game");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", true);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDmenuObjects1.length = 0;
gdjs.menuCode.GDmenuObjects2.length = 0;
gdjs.menuCode.GDplayObjects1.length = 0;
gdjs.menuCode.GDplayObjects2.length = 0;
gdjs.menuCode.GDhowtoObjects1.length = 0;
gdjs.menuCode.GDhowtoObjects2.length = 0;
gdjs.menuCode.GDbackgroundObjects1.length = 0;
gdjs.menuCode.GDbackgroundObjects2.length = 0;
gdjs.menuCode.GDcreditsObjects1.length = 0;
gdjs.menuCode.GDcreditsObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
