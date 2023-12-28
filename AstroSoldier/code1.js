gdjs.options_95menuCode = {};
gdjs.options_95menuCode.forEachIndex2 = 0;

gdjs.options_95menuCode.forEachIndex3 = 0;

gdjs.options_95menuCode.forEachIndex4 = 0;

gdjs.options_95menuCode.forEachObjects2 = [];

gdjs.options_95menuCode.forEachObjects3 = [];

gdjs.options_95menuCode.forEachObjects4 = [];

gdjs.options_95menuCode.forEachTemporary2 = null;

gdjs.options_95menuCode.forEachTemporary3 = null;

gdjs.options_95menuCode.forEachTemporary4 = null;

gdjs.options_95menuCode.forEachTotalCount2 = 0;

gdjs.options_95menuCode.forEachTotalCount3 = 0;

gdjs.options_95menuCode.forEachTotalCount4 = 0;

gdjs.options_95menuCode.GDtitleObjects1= [];
gdjs.options_95menuCode.GDtitleObjects2= [];
gdjs.options_95menuCode.GDtitleObjects3= [];
gdjs.options_95menuCode.GDtitleObjects4= [];
gdjs.options_95menuCode.GDtitleObjects5= [];
gdjs.options_95menuCode.GDtitleObjects6= [];
gdjs.options_95menuCode.GDoptionsObjects1= [];
gdjs.options_95menuCode.GDoptionsObjects2= [];
gdjs.options_95menuCode.GDoptionsObjects3= [];
gdjs.options_95menuCode.GDoptionsObjects4= [];
gdjs.options_95menuCode.GDoptionsObjects5= [];
gdjs.options_95menuCode.GDoptionsObjects6= [];
gdjs.options_95menuCode.GDcancel_9595changesObjects1= [];
gdjs.options_95menuCode.GDcancel_9595changesObjects2= [];
gdjs.options_95menuCode.GDcancel_9595changesObjects3= [];
gdjs.options_95menuCode.GDcancel_9595changesObjects4= [];
gdjs.options_95menuCode.GDcancel_9595changesObjects5= [];
gdjs.options_95menuCode.GDcancel_9595changesObjects6= [];
gdjs.options_95menuCode.GDcreditsObjects1= [];
gdjs.options_95menuCode.GDcreditsObjects2= [];
gdjs.options_95menuCode.GDcreditsObjects3= [];
gdjs.options_95menuCode.GDcreditsObjects4= [];
gdjs.options_95menuCode.GDcreditsObjects5= [];
gdjs.options_95menuCode.GDcreditsObjects6= [];
gdjs.options_95menuCode.GDapplyObjects1= [];
gdjs.options_95menuCode.GDapplyObjects2= [];
gdjs.options_95menuCode.GDapplyObjects3= [];
gdjs.options_95menuCode.GDapplyObjects4= [];
gdjs.options_95menuCode.GDapplyObjects5= [];
gdjs.options_95menuCode.GDapplyObjects6= [];
gdjs.options_95menuCode.GDlabelObjects1= [];
gdjs.options_95menuCode.GDlabelObjects2= [];
gdjs.options_95menuCode.GDlabelObjects3= [];
gdjs.options_95menuCode.GDlabelObjects4= [];
gdjs.options_95menuCode.GDlabelObjects5= [];
gdjs.options_95menuCode.GDlabelObjects6= [];
gdjs.options_95menuCode.GDinsert_9595controlObjects1= [];
gdjs.options_95menuCode.GDinsert_9595controlObjects2= [];
gdjs.options_95menuCode.GDinsert_9595controlObjects3= [];
gdjs.options_95menuCode.GDinsert_9595controlObjects4= [];
gdjs.options_95menuCode.GDinsert_9595controlObjects5= [];
gdjs.options_95menuCode.GDinsert_9595controlObjects6= [];
gdjs.options_95menuCode.GDdebugObjects1= [];
gdjs.options_95menuCode.GDdebugObjects2= [];
gdjs.options_95menuCode.GDdebugObjects3= [];
gdjs.options_95menuCode.GDdebugObjects4= [];
gdjs.options_95menuCode.GDdebugObjects5= [];
gdjs.options_95menuCode.GDdebugObjects6= [];


gdjs.options_95menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.options_95menuCode.GDoptionsObjects3, gdjs.options_95menuCode.GDoptionsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects4.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects4[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(1)) == "north" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects4[k] = gdjs.options_95menuCode.GDoptionsObjects4[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects4 */
{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects4.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects4[i].returnVariable(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(gdjs.options_95menuCode.GDoptionsObjects3, gdjs.options_95menuCode.GDoptionsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects4.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects4[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(1)) == "west" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects4[k] = gdjs.options_95menuCode.GDoptionsObjects4[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects4 */
{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects4.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects4[i].returnVariable(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(gdjs.options_95menuCode.GDoptionsObjects3, gdjs.options_95menuCode.GDoptionsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects4.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects4[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(1)) == "south" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects4[k] = gdjs.options_95menuCode.GDoptionsObjects4[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects4 */
{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects4.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects4[i].returnVariable(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


{

gdjs.copyArray(gdjs.options_95menuCode.GDoptionsObjects3, gdjs.options_95menuCode.GDoptionsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects4.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects4[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(1)) == "east" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects4[k] = gdjs.options_95menuCode.GDoptionsObjects4[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects4 */
{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects4.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects4[i].returnVariable(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


{

gdjs.copyArray(gdjs.options_95menuCode.GDoptionsObjects3, gdjs.options_95menuCode.GDoptionsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects4.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects4[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(1)) == "attack" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects4[k] = gdjs.options_95menuCode.GDoptionsObjects4[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects4 */
{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects4.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects4[i].returnVariable(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}}

}


{

gdjs.copyArray(gdjs.options_95menuCode.GDoptionsObjects3, gdjs.options_95menuCode.GDoptionsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects4.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects4[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(1)) == "dash" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects4[k] = gdjs.options_95menuCode.GDoptionsObjects4[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects4 */
{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects4.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects4[i].returnVariable(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}}

}


{

gdjs.copyArray(gdjs.options_95menuCode.GDoptionsObjects3, gdjs.options_95menuCode.GDoptionsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects4.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects4[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(1)) == "special" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects4[k] = gdjs.options_95menuCode.GDoptionsObjects4[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects4 */
{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects4.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects4[i].returnVariable(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}}

}


{

gdjs.copyArray(gdjs.options_95menuCode.GDoptionsObjects3, gdjs.options_95menuCode.GDoptionsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects4.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects4[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(1)) == "weapon" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects4[k] = gdjs.options_95menuCode.GDoptionsObjects4[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects4 */
{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects4.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects4[i].returnVariable(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.options_95menuCode.GDoptionsObjects3, gdjs.options_95menuCode.GDoptionsObjects4);

{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects4.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects4[i].SetLabelText((gdjs.RuntimeObject.getVariableString(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(0))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.options_95menuCode.eventsList1 = function(runtimeScene) {

};gdjs.options_95menuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.options_95menuCode.GDoptionsObjects2);

for (gdjs.options_95menuCode.forEachIndex3 = 0;gdjs.options_95menuCode.forEachIndex3 < gdjs.options_95menuCode.GDoptionsObjects2.length;++gdjs.options_95menuCode.forEachIndex3) {
gdjs.options_95menuCode.GDoptionsObjects3.length = 0;


gdjs.options_95menuCode.forEachTemporary3 = gdjs.options_95menuCode.GDoptionsObjects2[gdjs.options_95menuCode.forEachIndex3];
gdjs.options_95menuCode.GDoptionsObjects3.push(gdjs.options_95menuCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.options_95menuCode.eventsList0(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("label"), gdjs.options_95menuCode.GDlabelObjects1);

for (gdjs.options_95menuCode.forEachIndex2 = 0;gdjs.options_95menuCode.forEachIndex2 < gdjs.options_95menuCode.GDlabelObjects1.length;++gdjs.options_95menuCode.forEachIndex2) {
gdjs.options_95menuCode.GDlabelObjects2.length = 0;


gdjs.options_95menuCode.forEachTemporary2 = gdjs.options_95menuCode.GDlabelObjects1[gdjs.options_95menuCode.forEachIndex2];
gdjs.options_95menuCode.GDlabelObjects2.push(gdjs.options_95menuCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.options_95menuCode.GDlabelObjects2.length ;i < len;++i) {
    gdjs.options_95menuCode.GDlabelObjects2[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.options_95menuCode.GDlabelObjects2[i].getVariables().getFromIndex(0))));
}
}}
}

}


};gdjs.options_95menuCode.eventsList3 = function(runtimeScene) {

};gdjs.options_95menuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.options_95menuCode.GDoptionsObjects4, gdjs.options_95menuCode.GDoptionsObjects5);

{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects5.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects5[i].returnVariable(gdjs.options_95menuCode.GDoptionsObjects5[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.options_95menuCode.GDoptionsObjects4, gdjs.options_95menuCode.GDoptionsObjects5);

{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects5.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects5[i].returnVariable(gdjs.options_95menuCode.GDoptionsObjects5[i].getVariables().getFromIndex(0)).setString("L_Mouse");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.options_95menuCode.GDoptionsObjects4, gdjs.options_95menuCode.GDoptionsObjects5);

{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects5.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects5[i].returnVariable(gdjs.options_95menuCode.GDoptionsObjects5[i].getVariables().getFromIndex(0)).setString("R_Mouse");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.options_95menuCode.GDoptionsObjects4, gdjs.options_95menuCode.GDoptionsObjects5);

{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects5.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects5[i].SetLabelText((gdjs.RuntimeObject.getVariableString(gdjs.options_95menuCode.GDoptionsObjects5[i].getVariables().getFromIndex(0))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.options_95menuCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.options_95menuCode.GDoptionsObjects3);

for (gdjs.options_95menuCode.forEachIndex4 = 0;gdjs.options_95menuCode.forEachIndex4 < gdjs.options_95menuCode.GDoptionsObjects3.length;++gdjs.options_95menuCode.forEachIndex4) {
gdjs.copyArray(gdjs.options_95menuCode.GDinsert_9595controlObjects2, gdjs.options_95menuCode.GDinsert_9595controlObjects4);

gdjs.options_95menuCode.GDoptionsObjects4.length = 0;


gdjs.options_95menuCode.forEachTemporary4 = gdjs.options_95menuCode.GDoptionsObjects3[gdjs.options_95menuCode.forEachIndex4];
gdjs.options_95menuCode.GDoptionsObjects4.push(gdjs.options_95menuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects4.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects4[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects4[i].getVariables().getFromIndex(1)) == (gdjs.RuntimeObject.getVariableString(((gdjs.options_95menuCode.GDinsert_9595controlObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.options_95menuCode.GDinsert_9595controlObjects4[0].getVariables()).getFromIndex(1))) ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects4[k] = gdjs.options_95menuCode.GDoptionsObjects4[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.options_95menuCode.eventsList4(runtimeScene);} //Subevents end.
}
}

}


};gdjs.options_95menuCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape"));
if (isConditionTrue_0) {

{ //Subevents
gdjs.options_95menuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.options_95menuCode.GDinsert_9595controlObjects2 */
{for(var i = 0, len = gdjs.options_95menuCode.GDinsert_9595controlObjects2.length ;i < len;++i) {
    gdjs.options_95menuCode.GDinsert_9595controlObjects2[i].returnVariable(gdjs.options_95menuCode.GDinsert_9595controlObjects2[i].getVariables().getFromIndex(1)).setString("");
}
}}

}


};gdjs.options_95menuCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.options_95menuCode.GDinsert_9595controlObjects2, gdjs.options_95menuCode.GDinsert_9595controlObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDinsert_9595controlObjects3.length;i<l;++i) {
    if ( !(gdjs.options_95menuCode.GDinsert_9595controlObjects3[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDinsert_9595controlObjects3[k] = gdjs.options_95menuCode.GDinsert_9595controlObjects3[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDinsert_9595controlObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDinsert_9595controlObjects3 */
{for(var i = 0, len = gdjs.options_95menuCode.GDinsert_9595controlObjects3.length ;i < len;++i) {
    gdjs.options_95menuCode.GDinsert_9595controlObjects3[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.options_95menuCode.GDoptionsObjects3);

for (gdjs.options_95menuCode.forEachIndex4 = 0;gdjs.options_95menuCode.forEachIndex4 < gdjs.options_95menuCode.GDoptionsObjects3.length;++gdjs.options_95menuCode.forEachIndex4) {
gdjs.options_95menuCode.GDoptionsObjects4.length = 0;


gdjs.options_95menuCode.forEachTemporary4 = gdjs.options_95menuCode.GDoptionsObjects3[gdjs.options_95menuCode.forEachIndex4];
gdjs.options_95menuCode.GDoptionsObjects4.push(gdjs.options_95menuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects4.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects4[i].IsActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects4[k] = gdjs.options_95menuCode.GDoptionsObjects4[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects4.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects4[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDinsert_9595controlObjects2 */
{for(var i = 0, len = gdjs.options_95menuCode.GDinsert_9595controlObjects2.length ;i < len;++i) {
    gdjs.options_95menuCode.GDinsert_9595controlObjects2[i].setVariableBoolean(gdjs.options_95menuCode.GDinsert_9595controlObjects2[i].getVariables().getFromIndex(0), false);
}
}
{ //Subevents
gdjs.options_95menuCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.options_95menuCode.eventsList8 = function(runtimeScene) {

};gdjs.options_95menuCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.options_95menuCode.GDinsert_9595controlObjects1, gdjs.options_95menuCode.GDinsert_9595controlObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDinsert_9595controlObjects2.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDinsert_9595controlObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDinsert_9595controlObjects2[k] = gdjs.options_95menuCode.GDinsert_9595controlObjects2[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDinsert_9595controlObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDinsert_9595controlObjects2 */
{for(var i = 0, len = gdjs.options_95menuCode.GDinsert_9595controlObjects2.length ;i < len;++i) {
    gdjs.options_95menuCode.GDinsert_9595controlObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.options_95menuCode.GDoptionsObjects1);

for (gdjs.options_95menuCode.forEachIndex2 = 0;gdjs.options_95menuCode.forEachIndex2 < gdjs.options_95menuCode.GDoptionsObjects1.length;++gdjs.options_95menuCode.forEachIndex2) {
gdjs.options_95menuCode.GDoptionsObjects2.length = 0;


gdjs.options_95menuCode.forEachTemporary2 = gdjs.options_95menuCode.GDoptionsObjects1[gdjs.options_95menuCode.forEachIndex2];
gdjs.options_95menuCode.GDoptionsObjects2.push(gdjs.options_95menuCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects2.length;i<l;++i) {
    if ( !(gdjs.options_95menuCode.GDoptionsObjects2[i].IsActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects2[k] = gdjs.options_95menuCode.GDoptionsObjects2[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.options_95menuCode.GDoptionsObjects2.length ;i < len;++i) {
    gdjs.options_95menuCode.GDoptionsObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


};gdjs.options_95menuCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.options_95menuCode.GDoptionsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects2.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects2[k] = gdjs.options_95menuCode.GDoptionsObjects2[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("insert_control"), gdjs.options_95menuCode.GDinsert_9595controlObjects2);
/* Reuse gdjs.options_95menuCode.GDoptionsObjects2 */
{for(var i = 0, len = gdjs.options_95menuCode.GDinsert_9595controlObjects2.length ;i < len;++i) {
    gdjs.options_95menuCode.GDinsert_9595controlObjects2[i].setVariableBoolean(gdjs.options_95menuCode.GDinsert_9595controlObjects2[i].getVariables().getFromIndex(0), true);
}
}{for(var i = 0, len = gdjs.options_95menuCode.GDinsert_9595controlObjects2.length ;i < len;++i) {
    gdjs.options_95menuCode.GDinsert_9595controlObjects2[i].setString("Press new button for " + (gdjs.RuntimeObject.getVariableString(((gdjs.options_95menuCode.GDoptionsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.options_95menuCode.GDoptionsObjects2[0].getVariables()).getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.options_95menuCode.GDinsert_9595controlObjects2.length ;i < len;++i) {
    gdjs.options_95menuCode.GDinsert_9595controlObjects2[i].returnVariable(gdjs.options_95menuCode.GDinsert_9595controlObjects2[i].getVariables().getFromIndex(1)).setString((gdjs.RuntimeObject.getVariableString(((gdjs.options_95menuCode.GDoptionsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.options_95menuCode.GDoptionsObjects2[0].getVariables()).getFromIndex(1))));
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "menu_select.wav", 10, false, 40, gdjs.randomInRange(0.9, 1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("insert_control"), gdjs.options_95menuCode.GDinsert_9595controlObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDinsert_9595controlObjects2.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDinsert_9595controlObjects2[i].getVariableBoolean(gdjs.options_95menuCode.GDinsert_9595controlObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDinsert_9595controlObjects2[k] = gdjs.options_95menuCode.GDinsert_9595controlObjects2[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDinsert_9595controlObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.options_95menuCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("insert_control"), gdjs.options_95menuCode.GDinsert_9595controlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDinsert_9595controlObjects1.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDinsert_9595controlObjects1[i].getVariableBoolean(gdjs.options_95menuCode.GDinsert_9595controlObjects1[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDinsert_9595controlObjects1[k] = gdjs.options_95menuCode.GDinsert_9595controlObjects1[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDinsert_9595controlObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.options_95menuCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.options_95menuCode.asyncCallback14553020 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main_menu", true);
}}
gdjs.options_95menuCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.options_95menuCode.asyncCallback14553020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.options_95menuCode.asyncCallback14559540 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main_menu", true);
}}
gdjs.options_95menuCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.options_95menuCode.asyncCallback14559540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.options_95menuCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.options_95menuCode.GDoptionsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects2.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects2[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects2[i].getVariables().getFromIndex(1)) == "north" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects2[k] = gdjs.options_95menuCode.GDoptionsObjects2[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((gdjs.RuntimeObject.getVariableString(((gdjs.options_95menuCode.GDoptionsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.options_95menuCode.GDoptionsObjects2[0].getVariables()).getFromIndex(0))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.options_95menuCode.GDoptionsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects2.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects2[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects2[i].getVariables().getFromIndex(1)) == "west" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects2[k] = gdjs.options_95menuCode.GDoptionsObjects2[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setString((gdjs.RuntimeObject.getVariableString(((gdjs.options_95menuCode.GDoptionsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.options_95menuCode.GDoptionsObjects2[0].getVariables()).getFromIndex(0))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.options_95menuCode.GDoptionsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects2.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects2[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects2[i].getVariables().getFromIndex(1)) == "south" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects2[k] = gdjs.options_95menuCode.GDoptionsObjects2[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(2).setString((gdjs.RuntimeObject.getVariableString(((gdjs.options_95menuCode.GDoptionsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.options_95menuCode.GDoptionsObjects2[0].getVariables()).getFromIndex(0))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.options_95menuCode.GDoptionsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects2.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects2[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects2[i].getVariables().getFromIndex(1)) == "east" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects2[k] = gdjs.options_95menuCode.GDoptionsObjects2[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(3).setString((gdjs.RuntimeObject.getVariableString(((gdjs.options_95menuCode.GDoptionsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.options_95menuCode.GDoptionsObjects2[0].getVariables()).getFromIndex(0))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.options_95menuCode.GDoptionsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects2.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects2[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects2[i].getVariables().getFromIndex(1)) == "attack" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects2[k] = gdjs.options_95menuCode.GDoptionsObjects2[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(4).setString((gdjs.RuntimeObject.getVariableString(((gdjs.options_95menuCode.GDoptionsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.options_95menuCode.GDoptionsObjects2[0].getVariables()).getFromIndex(0))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.options_95menuCode.GDoptionsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects2.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects2[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects2[i].getVariables().getFromIndex(1)) == "dash" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects2[k] = gdjs.options_95menuCode.GDoptionsObjects2[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(5).setString((gdjs.RuntimeObject.getVariableString(((gdjs.options_95menuCode.GDoptionsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.options_95menuCode.GDoptionsObjects2[0].getVariables()).getFromIndex(0))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.options_95menuCode.GDoptionsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects2.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects2[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects2[i].getVariables().getFromIndex(1)) == "special" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects2[k] = gdjs.options_95menuCode.GDoptionsObjects2[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(6).setString((gdjs.RuntimeObject.getVariableString(((gdjs.options_95menuCode.GDoptionsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.options_95menuCode.GDoptionsObjects2[0].getVariables()).getFromIndex(0))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.options_95menuCode.GDoptionsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDoptionsObjects2.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDoptionsObjects2[i].getVariableString(gdjs.options_95menuCode.GDoptionsObjects2[i].getVariables().getFromIndex(1)) == "weapon" ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDoptionsObjects2[k] = gdjs.options_95menuCode.GDoptionsObjects2[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDoptionsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.options_95menuCode.GDoptionsObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(7).setString((gdjs.RuntimeObject.getVariableString(((gdjs.options_95menuCode.GDoptionsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.options_95menuCode.GDoptionsObjects2[0].getVariables()).getFromIndex(0))));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "menu_select.wav", 10, false, 40, gdjs.randomInRange(0.9, 1));
}
{ //Subevents
gdjs.options_95menuCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.options_95menuCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("insert_control"), gdjs.options_95menuCode.GDinsert_9595controlObjects1);
{for(var i = 0, len = gdjs.options_95menuCode.GDinsert_9595controlObjects1.length ;i < len;++i) {
    gdjs.options_95menuCode.GDinsert_9595controlObjects1[i].setVariableBoolean(gdjs.options_95menuCode.GDinsert_9595controlObjects1[i].getVariables().getFromIndex(0), false);
}
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "menu_select.wav");
}
{ //Subevents
gdjs.options_95menuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.options_95menuCode.eventsList10(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("cancel_changes"), gdjs.options_95menuCode.GDcancel_9595changesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDcancel_9595changesObjects1.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDcancel_9595changesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDcancel_9595changesObjects1[k] = gdjs.options_95menuCode.GDcancel_9595changesObjects1[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDcancel_9595changesObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "menu_select.wav", 10, false, 40, gdjs.randomInRange(0.9, 1));
}
{ //Subevents
gdjs.options_95menuCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("apply"), gdjs.options_95menuCode.GDapplyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.options_95menuCode.GDapplyObjects1.length;i<l;++i) {
    if ( gdjs.options_95menuCode.GDapplyObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.options_95menuCode.GDapplyObjects1[k] = gdjs.options_95menuCode.GDapplyObjects1[i];
        ++k;
    }
}
gdjs.options_95menuCode.GDapplyObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.options_95menuCode.eventsList13(runtimeScene);} //End of subevents
}

}


{



}


};

gdjs.options_95menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.options_95menuCode.GDtitleObjects1.length = 0;
gdjs.options_95menuCode.GDtitleObjects2.length = 0;
gdjs.options_95menuCode.GDtitleObjects3.length = 0;
gdjs.options_95menuCode.GDtitleObjects4.length = 0;
gdjs.options_95menuCode.GDtitleObjects5.length = 0;
gdjs.options_95menuCode.GDtitleObjects6.length = 0;
gdjs.options_95menuCode.GDoptionsObjects1.length = 0;
gdjs.options_95menuCode.GDoptionsObjects2.length = 0;
gdjs.options_95menuCode.GDoptionsObjects3.length = 0;
gdjs.options_95menuCode.GDoptionsObjects4.length = 0;
gdjs.options_95menuCode.GDoptionsObjects5.length = 0;
gdjs.options_95menuCode.GDoptionsObjects6.length = 0;
gdjs.options_95menuCode.GDcancel_9595changesObjects1.length = 0;
gdjs.options_95menuCode.GDcancel_9595changesObjects2.length = 0;
gdjs.options_95menuCode.GDcancel_9595changesObjects3.length = 0;
gdjs.options_95menuCode.GDcancel_9595changesObjects4.length = 0;
gdjs.options_95menuCode.GDcancel_9595changesObjects5.length = 0;
gdjs.options_95menuCode.GDcancel_9595changesObjects6.length = 0;
gdjs.options_95menuCode.GDcreditsObjects1.length = 0;
gdjs.options_95menuCode.GDcreditsObjects2.length = 0;
gdjs.options_95menuCode.GDcreditsObjects3.length = 0;
gdjs.options_95menuCode.GDcreditsObjects4.length = 0;
gdjs.options_95menuCode.GDcreditsObjects5.length = 0;
gdjs.options_95menuCode.GDcreditsObjects6.length = 0;
gdjs.options_95menuCode.GDapplyObjects1.length = 0;
gdjs.options_95menuCode.GDapplyObjects2.length = 0;
gdjs.options_95menuCode.GDapplyObjects3.length = 0;
gdjs.options_95menuCode.GDapplyObjects4.length = 0;
gdjs.options_95menuCode.GDapplyObjects5.length = 0;
gdjs.options_95menuCode.GDapplyObjects6.length = 0;
gdjs.options_95menuCode.GDlabelObjects1.length = 0;
gdjs.options_95menuCode.GDlabelObjects2.length = 0;
gdjs.options_95menuCode.GDlabelObjects3.length = 0;
gdjs.options_95menuCode.GDlabelObjects4.length = 0;
gdjs.options_95menuCode.GDlabelObjects5.length = 0;
gdjs.options_95menuCode.GDlabelObjects6.length = 0;
gdjs.options_95menuCode.GDinsert_9595controlObjects1.length = 0;
gdjs.options_95menuCode.GDinsert_9595controlObjects2.length = 0;
gdjs.options_95menuCode.GDinsert_9595controlObjects3.length = 0;
gdjs.options_95menuCode.GDinsert_9595controlObjects4.length = 0;
gdjs.options_95menuCode.GDinsert_9595controlObjects5.length = 0;
gdjs.options_95menuCode.GDinsert_9595controlObjects6.length = 0;
gdjs.options_95menuCode.GDdebugObjects1.length = 0;
gdjs.options_95menuCode.GDdebugObjects2.length = 0;
gdjs.options_95menuCode.GDdebugObjects3.length = 0;
gdjs.options_95menuCode.GDdebugObjects4.length = 0;
gdjs.options_95menuCode.GDdebugObjects5.length = 0;
gdjs.options_95menuCode.GDdebugObjects6.length = 0;

gdjs.options_95menuCode.eventsList14(runtimeScene);

return;

}

gdjs['options_95menuCode'] = gdjs.options_95menuCode;
