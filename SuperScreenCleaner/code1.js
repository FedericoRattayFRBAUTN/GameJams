gdjs.gameCode = {};
gdjs.gameCode.GDenemyObjects1_1final = [];

gdjs.gameCode.GDwallObjects1_1final = [];

gdjs.gameCode.forEachIndex3 = 0;

gdjs.gameCode.forEachObjects3 = [];

gdjs.gameCode.forEachTemporary3 = null;

gdjs.gameCode.forEachTotalCount3 = 0;

gdjs.gameCode.GDplayerObjects1= [];
gdjs.gameCode.GDplayerObjects2= [];
gdjs.gameCode.GDplayerObjects3= [];
gdjs.gameCode.GDplayerObjects4= [];
gdjs.gameCode.GDplayerObjects5= [];
gdjs.gameCode.GDenemyObjects1= [];
gdjs.gameCode.GDenemyObjects2= [];
gdjs.gameCode.GDenemyObjects3= [];
gdjs.gameCode.GDenemyObjects4= [];
gdjs.gameCode.GDenemyObjects5= [];
gdjs.gameCode.GDfloorObjects1= [];
gdjs.gameCode.GDfloorObjects2= [];
gdjs.gameCode.GDfloorObjects3= [];
gdjs.gameCode.GDfloorObjects4= [];
gdjs.gameCode.GDfloorObjects5= [];
gdjs.gameCode.GDhealth_9595barObjects1= [];
gdjs.gameCode.GDhealth_9595barObjects2= [];
gdjs.gameCode.GDhealth_9595barObjects3= [];
gdjs.gameCode.GDhealth_9595barObjects4= [];
gdjs.gameCode.GDhealth_9595barObjects5= [];
gdjs.gameCode.GDbulletObjects1= [];
gdjs.gameCode.GDbulletObjects2= [];
gdjs.gameCode.GDbulletObjects3= [];
gdjs.gameCode.GDbulletObjects4= [];
gdjs.gameCode.GDbulletObjects5= [];
gdjs.gameCode.GDenemy_9595spawnerObjects1= [];
gdjs.gameCode.GDenemy_9595spawnerObjects2= [];
gdjs.gameCode.GDenemy_9595spawnerObjects3= [];
gdjs.gameCode.GDenemy_9595spawnerObjects4= [];
gdjs.gameCode.GDenemy_9595spawnerObjects5= [];
gdjs.gameCode.GDwallObjects1= [];
gdjs.gameCode.GDwallObjects2= [];
gdjs.gameCode.GDwallObjects3= [];
gdjs.gameCode.GDwallObjects4= [];
gdjs.gameCode.GDwallObjects5= [];
gdjs.gameCode.GDscoreObjects1= [];
gdjs.gameCode.GDscoreObjects2= [];
gdjs.gameCode.GDscoreObjects3= [];
gdjs.gameCode.GDscoreObjects4= [];
gdjs.gameCode.GDscoreObjects5= [];
gdjs.gameCode.GDcameraAnchorObjects1= [];
gdjs.gameCode.GDcameraAnchorObjects2= [];
gdjs.gameCode.GDcameraAnchorObjects3= [];
gdjs.gameCode.GDcameraAnchorObjects4= [];
gdjs.gameCode.GDcameraAnchorObjects5= [];
gdjs.gameCode.GDdebugObjects1= [];
gdjs.gameCode.GDdebugObjects2= [];
gdjs.gameCode.GDdebugObjects3= [];
gdjs.gameCode.GDdebugObjects4= [];
gdjs.gameCode.GDdebugObjects5= [];
gdjs.gameCode.GDexplosionObjects1= [];
gdjs.gameCode.GDexplosionObjects2= [];
gdjs.gameCode.GDexplosionObjects3= [];
gdjs.gameCode.GDexplosionObjects4= [];
gdjs.gameCode.GDexplosionObjects5= [];
gdjs.gameCode.GDExplosion1Objects1= [];
gdjs.gameCode.GDExplosion1Objects2= [];
gdjs.gameCode.GDExplosion1Objects3= [];
gdjs.gameCode.GDExplosion1Objects4= [];
gdjs.gameCode.GDExplosion1Objects5= [];
gdjs.gameCode.GDDebriObjects1= [];
gdjs.gameCode.GDDebriObjects2= [];
gdjs.gameCode.GDDebriObjects3= [];
gdjs.gameCode.GDDebriObjects4= [];
gdjs.gameCode.GDDebriObjects5= [];
gdjs.gameCode.GDDebri_9595smallObjects1= [];
gdjs.gameCode.GDDebri_9595smallObjects2= [];
gdjs.gameCode.GDDebri_9595smallObjects3= [];
gdjs.gameCode.GDDebri_9595smallObjects4= [];
gdjs.gameCode.GDDebri_9595smallObjects5= [];


gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.gameCode.GDbulletObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.gameCode.GDbulletObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.gameCode.GDplayerObjects1});
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects2);
gdjs.gameCode.GDbulletObjects2.length = 0;

{for(var i = 0, len = gdjs.gameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.gameCode.GDplayerObjects2[i].getCenterXInScene()) - 8, (gdjs.gameCode.GDplayerObjects2[i].getCenterYInScene()) - 40, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbulletObjects2Objects, -(90), 2000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.gameCode.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbulletObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects, 980, true);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDbulletObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects2});
gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.gameCode.GDenemyObjects3, gdjs.gameCode.GDenemyObjects4);

{for(var i = 0, len = gdjs.gameCode.GDenemyObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects4[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(1, 2));
}
}}

}


{

gdjs.copyArray(gdjs.gameCode.GDenemyObjects3, gdjs.gameCode.GDenemyObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects4.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects4[i].getVariableNumber(gdjs.gameCode.GDenemyObjects4[i].getVariables().getFromIndex(4)) <= 45 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects4[k] = gdjs.gameCode.GDenemyObjects4[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects4 */
{for(var i = 0, len = gdjs.gameCode.GDenemyObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects4[i].returnVariable(gdjs.gameCode.GDenemyObjects4[i].getVariables().getFromIndex(2)).setNumber(0);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects4[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{

gdjs.copyArray(gdjs.gameCode.GDenemyObjects3, gdjs.gameCode.GDenemyObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects4.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects4[i].getVariableNumber(gdjs.gameCode.GDenemyObjects4[i].getVariables().getFromIndex(4)) > 45 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects4[k] = gdjs.gameCode.GDenemyObjects4[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects4.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects4[i].getVariableNumber(gdjs.gameCode.GDenemyObjects4[i].getVariables().getFromIndex(4)) <= 70 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects4[k] = gdjs.gameCode.GDenemyObjects4[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects4 */
{for(var i = 0, len = gdjs.gameCode.GDenemyObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects4[i].returnVariable(gdjs.gameCode.GDenemyObjects4[i].getVariables().getFromIndex(2)).setNumber(1);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects4[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{

gdjs.copyArray(gdjs.gameCode.GDenemyObjects3, gdjs.gameCode.GDenemyObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects4.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects4[i].getVariableNumber(gdjs.gameCode.GDenemyObjects4[i].getVariables().getFromIndex(4)) > 70 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects4[k] = gdjs.gameCode.GDenemyObjects4[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects4.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects4[i].getVariableNumber(gdjs.gameCode.GDenemyObjects4[i].getVariables().getFromIndex(4)) <= 85 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects4[k] = gdjs.gameCode.GDenemyObjects4[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects4 */
{for(var i = 0, len = gdjs.gameCode.GDenemyObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects4[i].returnVariable(gdjs.gameCode.GDenemyObjects4[i].getVariables().getFromIndex(2)).setNumber(2);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects4[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{

gdjs.copyArray(gdjs.gameCode.GDenemyObjects3, gdjs.gameCode.GDenemyObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects4.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects4[i].getVariableNumber(gdjs.gameCode.GDenemyObjects4[i].getVariables().getFromIndex(4)) > 85 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects4[k] = gdjs.gameCode.GDenemyObjects4[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects4.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects4[i].getVariableNumber(gdjs.gameCode.GDenemyObjects4[i].getVariables().getFromIndex(4)) <= 95 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects4[k] = gdjs.gameCode.GDenemyObjects4[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects4 */
{for(var i = 0, len = gdjs.gameCode.GDenemyObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects4[i].returnVariable(gdjs.gameCode.GDenemyObjects4[i].getVariables().getFromIndex(2)).setNumber(3);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects4[i].getBehavior("Animation").setAnimationIndex(2);
}
}}

}


{

/* Reuse gdjs.gameCode.GDenemyObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects3[i].getVariableNumber(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(4)) > 95 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects3[k] = gdjs.gameCode.GDenemyObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects3[i].getVariableNumber(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(4)) <= 100 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects3[k] = gdjs.gameCode.GDenemyObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects3 */
{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].returnVariable(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(2)).setNumber(4);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].getBehavior("Animation").setAnimationIndex(3);
}
}}

}


};gdjs.gameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDenemyObjects2, gdjs.gameCode.GDenemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects3[i].getVariableBoolean(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(3), true) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects3[k] = gdjs.gameCode.GDenemyObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects3 */
{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].setColor("54;33;43");
}
}}

}


{

gdjs.copyArray(gdjs.gameCode.GDenemyObjects2, gdjs.gameCode.GDenemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects3[i].getVariableBoolean(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(3), false) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects3[k] = gdjs.gameCode.GDenemyObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects3 */
{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].returnVariable(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(4)).setNumber(gdjs.randomInRange(0, 100));
}
}
{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.gameCode.GDenemyObjects2, gdjs.gameCode.GDenemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects3[i].getVariableNumber(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects3[k] = gdjs.gameCode.GDenemyObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects3 */
{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].getBehavior("Scale").setScaleX(gdjs.randomInRange(0, 1) * 3);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].setColor("255;215;149");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.gameCode.GDenemyObjects2, gdjs.gameCode.GDenemyObjects3);

{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].activateBehavior("Physics2", true);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].getBehavior("Physics2").applyForce(gdjs.randomInRange(-(1), 1) * gdjs.randomInRange(-(90), 90), gdjs.randomInRange(0, 1) * gdjs.randomInRange(1, 30) + 3, (gdjs.gameCode.GDenemyObjects3[i].getCenterXInScene()) + gdjs.randomInRange(-(3), 3), (gdjs.gameCode.GDenemyObjects3[i].getCenterYInScene()) + gdjs.randomInRange(-(3), 3));
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.gameCode.GDenemyObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects2[i].returnVariable(gdjs.gameCode.GDenemyObjects2[i].getVariables().getFromIndex(0)).setNumber(Math.round(0.5 + (gdjs.gameCode.GDenemyObjects2[i].getBehavior("Scale").getScaleX())));
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects3});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects3});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects3});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects3});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects3});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDExplosion1Objects3Objects = Hashtable.newFrom({"Explosion1": gdjs.gameCode.GDExplosion1Objects3});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDexplosionObjects3Objects = Hashtable.newFrom({"explosion": gdjs.gameCode.GDexplosionObjects3});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects3});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects4Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects4});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDexplosionObjects4Objects = Hashtable.newFrom({"explosion": gdjs.gameCode.GDexplosionObjects4});
gdjs.gameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDenemyObjects3, gdjs.gameCode.GDenemyObjects4);

gdjs.copyArray(gdjs.gameCode.GDexplosionObjects3, gdjs.gameCode.GDexplosionObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects4Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDexplosionObjects4Objects, 400, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects4 */
{for(var i = 0, len = gdjs.gameCode.GDenemyObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.gameCode.GDexplosionObjects3 */
{for(var i = 0, len = gdjs.gameCode.GDexplosionObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDexplosionObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDDebri_95959595smallObjects2Objects = Hashtable.newFrom({"Debri_small": gdjs.gameCode.GDDebri_9595smallObjects2});
gdjs.gameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDenemyObjects2, gdjs.gameCode.GDenemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects3[i].getVariableNumber(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects3[k] = gdjs.gameCode.GDenemyObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects3 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects3Objects, (( gdjs.gameCode.GDenemyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects3[0].getCenterXInScene()) + gdjs.randomInRange(-(32), 32), (( gdjs.gameCode.GDenemyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects3[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].setVariableBoolean(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(3), true);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].returnVariable(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(2)).setNumber(0);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects3Objects, (( gdjs.gameCode.GDenemyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects3[0].getCenterXInScene()) + gdjs.randomInRange(-(32), 32), (( gdjs.gameCode.GDenemyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects3[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].setVariableBoolean(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(3), true);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].returnVariable(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(2)).setNumber(0);
}
}}

}


{

gdjs.copyArray(gdjs.gameCode.GDenemyObjects2, gdjs.gameCode.GDenemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects3[i].getVariableNumber(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(2)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects3[k] = gdjs.gameCode.GDenemyObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects3[i].getVariableBoolean(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(3), false) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects3[k] = gdjs.gameCode.GDenemyObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects3 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects3Objects, (( gdjs.gameCode.GDenemyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects3[0].getCenterXInScene()) + gdjs.randomInRange(-(32), 32), (( gdjs.gameCode.GDenemyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects3[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].setVariableBoolean(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(3), true);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].returnVariable(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(2)).setNumber(2);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects3Objects, (( gdjs.gameCode.GDenemyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects3[0].getCenterXInScene()) + gdjs.randomInRange(-(32), 32), (( gdjs.gameCode.GDenemyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects3[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].setVariableBoolean(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(3), true);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].returnVariable(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(2)).setNumber(2);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects3Objects, (( gdjs.gameCode.GDenemyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects3[0].getCenterXInScene()) + gdjs.randomInRange(-(32), 32), (( gdjs.gameCode.GDenemyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects3[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].setVariableBoolean(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(3), true);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects3[i].returnVariable(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(2)).setNumber(2);
}
}}

}


{

gdjs.copyArray(gdjs.gameCode.GDenemyObjects2, gdjs.gameCode.GDenemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects3[i].getVariableNumber(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(2)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects3[k] = gdjs.gameCode.GDenemyObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects3 */
gdjs.gameCode.GDExplosion1Objects3.length = 0;

gdjs.gameCode.GDexplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDExplosion1Objects3Objects, (( gdjs.gameCode.GDenemyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects3[0].getCenterXInScene()), (( gdjs.gameCode.GDenemyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects3[0].getCenterYInScene()), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDexplosionObjects3Objects, (( gdjs.gameCode.GDenemyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects3[0].getCenterXInScene()), (( gdjs.gameCode.GDenemyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects3[0].getCenterYInScene()), "");
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects3Objects);
}
{ //Subevents
gdjs.gameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.gameCode.GDenemyObjects2, gdjs.gameCode.GDenemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects3[i].getVariableNumber(gdjs.gameCode.GDenemyObjects3[i].getVariables().getFromIndex(2)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects3[k] = gdjs.gameCode.GDenemyObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects3);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects3[i].getBehavior("FireBullet").SetBulletQuantityOp((gdjs.gameCode.GDplayerObjects3[i].getBehavior("FireBullet").BulletQuantity((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.gameCode.GDenemyObjects2 */
gdjs.gameCode.GDDebri_9595smallObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDDebri_95959595smallObjects2Objects, (( gdjs.gameCode.GDenemyObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects2[0].getCenterXInScene()), (( gdjs.gameCode.GDenemyObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects2[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfloorObjects2Objects = Hashtable.newFrom({"floor": gdjs.gameCode.GDfloorObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDDebriObjects2Objects = Hashtable.newFrom({"Debri": gdjs.gameCode.GDDebriObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.gameCode.GDbulletObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects1});
gdjs.gameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.gameCode.GDenemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("enemy_spawner"), gdjs.gameCode.GDenemy_9595spawnerObjects2);
{for(var i = 0, len = gdjs.gameCode.GDenemy_9595spawnerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDenemy_9595spawnerObjects2[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > 1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() * 1.8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy_spawner"), gdjs.gameCode.GDenemy_9595spawnerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemy_9595spawnerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemy_9595spawnerObjects2[i].getBehavior("ObjectSpawner").ObjectWasJustSpawned((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemy_9595spawnerObjects2[k] = gdjs.gameCode.GDenemy_9595spawnerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDenemy_9595spawnerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemy_9595spawnerObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDenemy_9595spawnerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDenemy_9595spawnerObjects2[i].getBehavior("ObjectSpawner").SetSpawnPeriod(gdjs.randomInRange(1, runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.gameCode.GDenemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects2[i].getVariableBoolean(gdjs.gameCode.GDenemyObjects2[i].getVariables().getFromIndex(1), false) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects2[k] = gdjs.gameCode.GDenemyObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects2[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects2[i].setVariableBoolean(gdjs.gameCode.GDenemyObjects2[i].getVariables().getFromIndex(1), true);
}
}
{ //Subevents
gdjs.gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.gameCode.GDenemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDenemyObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDenemyObjects2[i].getVariableNumber(gdjs.gameCode.GDenemyObjects2[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDenemyObjects2[k] = gdjs.gameCode.GDenemyObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDenemyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(Math.round(1 + (( gdjs.gameCode.GDenemyObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects2[0].getBehavior("Scale").getScaleX())));
}
{ //Subevents
gdjs.gameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.gameCode.GDenemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.gameCode.GDfloorObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects2Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfloorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cameraAnchor"), gdjs.gameCode.GDcameraAnchorObjects2);
/* Reuse gdjs.gameCode.GDenemyObjects2 */
/* Reuse gdjs.gameCode.GDfloorObjects2 */
gdjs.copyArray(runtimeScene.getObjects("health_bar"), gdjs.gameCode.GDhealth_9595barObjects2);
gdjs.gameCode.GDDebriObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDDebriObjects2Objects, (( gdjs.gameCode.GDenemyObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects2[0].getCenterXInScene()), (( gdjs.gameCode.GDfloorObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDfloorObjects2[0].getPointY("")) - 16, "");
}{for(var i = 0, len = gdjs.gameCode.GDDebriObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDDebriObjects2[i].setAngle(-(90));
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDhealth_9595barObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDhealth_9595barObjects2[i].SetValue(gdjs.gameCode.GDhealth_9595barObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (Math.round(1 + (( gdjs.gameCode.GDenemyObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDenemyObjects2[0].getBehavior("Scale").getScaleX()))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDcameraAnchorObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDcameraAnchorObjects2[i].getBehavior("ShakeObject_PositionAngle").StopShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDcameraAnchorObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDcameraAnchorObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 100, 0, 0, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.gameCode.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.gameCode.GDenemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbulletObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDbulletObjects1 */
/* Reuse gdjs.gameCode.GDenemyObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects1[i].returnVariable(gdjs.gameCode.GDenemyObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}}

}


};gdjs.gameCode.eventsList6 = function(runtimeScene) {

};gdjs.gameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("enemy_spawner"), gdjs.gameCode.GDenemy_9595spawnerObjects2);

for (gdjs.gameCode.forEachIndex3 = 0;gdjs.gameCode.forEachIndex3 < gdjs.gameCode.GDenemy_9595spawnerObjects2.length;++gdjs.gameCode.forEachIndex3) {
gdjs.gameCode.GDenemy_9595spawnerObjects3.length = 0;


gdjs.gameCode.forEachTemporary3 = gdjs.gameCode.GDenemy_9595spawnerObjects2[gdjs.gameCode.forEachIndex3];
gdjs.gameCode.GDenemy_9595spawnerObjects3.push(gdjs.gameCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.gameCode.GDenemy_9595spawnerObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemy_9595spawnerObjects3[i].getBehavior("ObjectSpawner").SetUnlimitedObjectCapacity(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDenemy_9595spawnerObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDenemy_9595spawnerObjects3[i].getBehavior("ObjectSpawner").SetSpawnerCapacity(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "end_screen", false);
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDwallObjects2Objects = Hashtable.newFrom({"wall": gdjs.gameCode.GDwallObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects2});
gdjs.gameCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cameraAnchor"), gdjs.gameCode.GDcameraAnchorObjects1);
{for(var i = 0, len = gdjs.gameCode.GDcameraAnchorObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcameraAnchorObjects1[i].getBehavior("SmoothCamera").SetLeftwardSpeed(0.9, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDcameraAnchorObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcameraAnchorObjects1[i].getBehavior("SmoothCamera").SetRightwardSpeed(0.9, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("health_bar"), gdjs.gameCode.GDhealth_9595barObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDhealth_9595barObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDhealth_9595barObjects1[i].getBehavior("RepeatTimer").Repeat((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDhealth_9595barObjects1[k] = gdjs.gameCode.GDhealth_9595barObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDhealth_9595barObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.gameCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.gameCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDscoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.gameCode.eventsList0(runtimeScene);
}


{


gdjs.gameCode.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("health_bar"), gdjs.gameCode.GDhealth_9595barObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDhealth_9595barObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDhealth_9595barObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDhealth_9595barObjects1[k] = gdjs.gameCode.GDhealth_9595barObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDhealth_9595barObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDhealth_9595barObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDhealth_9595barObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDhealth_9595barObjects1[i].getBehavior("RepeatTimer").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.gameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("debug"), gdjs.gameCode.GDdebugObjects1);
{for(var i = 0, len = gdjs.gameCode.GDdebugObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDdebugObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


{

gdjs.gameCode.GDenemyObjects1.length = 0;

gdjs.gameCode.GDwallObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.gameCode.GDenemyObjects1_1final.length = 0;
gdjs.gameCode.GDwallObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.gameCode.GDenemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.gameCode.GDwallObjects2);
isConditionTrue_1 = gdjs.physics2.objectsCollide(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects2Objects, "Physics2", gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDwallObjects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDenemyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDenemyObjects1_1final.indexOf(gdjs.gameCode.GDenemyObjects2[j]) === -1 )
            gdjs.gameCode.GDenemyObjects1_1final.push(gdjs.gameCode.GDenemyObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDwallObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDwallObjects1_1final.indexOf(gdjs.gameCode.GDwallObjects2[j]) === -1 )
            gdjs.gameCode.GDwallObjects1_1final.push(gdjs.gameCode.GDwallObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.gameCode.GDenemyObjects2);
isConditionTrue_1 = gdjs.physics2.objectsCollide(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects2Objects, "Physics2", gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDenemyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDenemyObjects1_1final.indexOf(gdjs.gameCode.GDenemyObjects2[j]) === -1 )
            gdjs.gameCode.GDenemyObjects1_1final.push(gdjs.gameCode.GDenemyObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.gameCode.GDenemyObjects1_1final, gdjs.gameCode.GDenemyObjects1);
gdjs.copyArray(gdjs.gameCode.GDwallObjects1_1final, gdjs.gameCode.GDwallObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDenemyObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects1[i].getBehavior("Physics2").setAngularVelocity(-((gdjs.gameCode.GDenemyObjects1[i].getBehavior("Physics2").getAngularVelocity())));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.gameCode.GDfloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), (( gdjs.gameCode.GDfloorObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDfloorObjects1[0].getPointY("")) + 16, 4000, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDplayerObjects1[i].getBehavior("RepeatTimer").Repeat((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDplayerObjects1[k] = gdjs.gameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDplayerObjects1[i].getBehavior("FireBullet").BulletQuantity((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 1 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDplayerObjects1[k] = gdjs.gameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("FireBullet").SetBulletQuantityOp((gdjs.gameCode.GDplayerObjects1[i].getBehavior("FireBullet").BulletQuantity((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Debri"), gdjs.gameCode.GDDebriObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDDebriObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDDebriObjects1[i].noMoreParticles() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDDebriObjects1[k] = gdjs.gameCode.GDDebriObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDDebriObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDDebriObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDDebriObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDDebriObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDplayerObjects1.length = 0;
gdjs.gameCode.GDplayerObjects2.length = 0;
gdjs.gameCode.GDplayerObjects3.length = 0;
gdjs.gameCode.GDplayerObjects4.length = 0;
gdjs.gameCode.GDplayerObjects5.length = 0;
gdjs.gameCode.GDenemyObjects1.length = 0;
gdjs.gameCode.GDenemyObjects2.length = 0;
gdjs.gameCode.GDenemyObjects3.length = 0;
gdjs.gameCode.GDenemyObjects4.length = 0;
gdjs.gameCode.GDenemyObjects5.length = 0;
gdjs.gameCode.GDfloorObjects1.length = 0;
gdjs.gameCode.GDfloorObjects2.length = 0;
gdjs.gameCode.GDfloorObjects3.length = 0;
gdjs.gameCode.GDfloorObjects4.length = 0;
gdjs.gameCode.GDfloorObjects5.length = 0;
gdjs.gameCode.GDhealth_9595barObjects1.length = 0;
gdjs.gameCode.GDhealth_9595barObjects2.length = 0;
gdjs.gameCode.GDhealth_9595barObjects3.length = 0;
gdjs.gameCode.GDhealth_9595barObjects4.length = 0;
gdjs.gameCode.GDhealth_9595barObjects5.length = 0;
gdjs.gameCode.GDbulletObjects1.length = 0;
gdjs.gameCode.GDbulletObjects2.length = 0;
gdjs.gameCode.GDbulletObjects3.length = 0;
gdjs.gameCode.GDbulletObjects4.length = 0;
gdjs.gameCode.GDbulletObjects5.length = 0;
gdjs.gameCode.GDenemy_9595spawnerObjects1.length = 0;
gdjs.gameCode.GDenemy_9595spawnerObjects2.length = 0;
gdjs.gameCode.GDenemy_9595spawnerObjects3.length = 0;
gdjs.gameCode.GDenemy_9595spawnerObjects4.length = 0;
gdjs.gameCode.GDenemy_9595spawnerObjects5.length = 0;
gdjs.gameCode.GDwallObjects1.length = 0;
gdjs.gameCode.GDwallObjects2.length = 0;
gdjs.gameCode.GDwallObjects3.length = 0;
gdjs.gameCode.GDwallObjects4.length = 0;
gdjs.gameCode.GDwallObjects5.length = 0;
gdjs.gameCode.GDscoreObjects1.length = 0;
gdjs.gameCode.GDscoreObjects2.length = 0;
gdjs.gameCode.GDscoreObjects3.length = 0;
gdjs.gameCode.GDscoreObjects4.length = 0;
gdjs.gameCode.GDscoreObjects5.length = 0;
gdjs.gameCode.GDcameraAnchorObjects1.length = 0;
gdjs.gameCode.GDcameraAnchorObjects2.length = 0;
gdjs.gameCode.GDcameraAnchorObjects3.length = 0;
gdjs.gameCode.GDcameraAnchorObjects4.length = 0;
gdjs.gameCode.GDcameraAnchorObjects5.length = 0;
gdjs.gameCode.GDdebugObjects1.length = 0;
gdjs.gameCode.GDdebugObjects2.length = 0;
gdjs.gameCode.GDdebugObjects3.length = 0;
gdjs.gameCode.GDdebugObjects4.length = 0;
gdjs.gameCode.GDdebugObjects5.length = 0;
gdjs.gameCode.GDexplosionObjects1.length = 0;
gdjs.gameCode.GDexplosionObjects2.length = 0;
gdjs.gameCode.GDexplosionObjects3.length = 0;
gdjs.gameCode.GDexplosionObjects4.length = 0;
gdjs.gameCode.GDexplosionObjects5.length = 0;
gdjs.gameCode.GDExplosion1Objects1.length = 0;
gdjs.gameCode.GDExplosion1Objects2.length = 0;
gdjs.gameCode.GDExplosion1Objects3.length = 0;
gdjs.gameCode.GDExplosion1Objects4.length = 0;
gdjs.gameCode.GDExplosion1Objects5.length = 0;
gdjs.gameCode.GDDebriObjects1.length = 0;
gdjs.gameCode.GDDebriObjects2.length = 0;
gdjs.gameCode.GDDebriObjects3.length = 0;
gdjs.gameCode.GDDebriObjects4.length = 0;
gdjs.gameCode.GDDebriObjects5.length = 0;
gdjs.gameCode.GDDebri_9595smallObjects1.length = 0;
gdjs.gameCode.GDDebri_9595smallObjects2.length = 0;
gdjs.gameCode.GDDebri_9595smallObjects3.length = 0;
gdjs.gameCode.GDDebri_9595smallObjects4.length = 0;
gdjs.gameCode.GDDebri_9595smallObjects5.length = 0;

gdjs.gameCode.eventsList8(runtimeScene);

return;

}

gdjs['gameCode'] = gdjs.gameCode;
