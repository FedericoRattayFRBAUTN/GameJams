gdjs.end_95screenCode = {};
gdjs.end_95screenCode.GDgame_9595over_9595textObjects1= [];
gdjs.end_95screenCode.GDgame_9595over_9595textObjects2= [];
gdjs.end_95screenCode.GDgame_9595over_9595textObjects3= [];
gdjs.end_95screenCode.GDscore_9595textObjects1= [];
gdjs.end_95screenCode.GDscore_9595textObjects2= [];
gdjs.end_95screenCode.GDscore_9595textObjects3= [];
gdjs.end_95screenCode.GDbacktomenuObjects1= [];
gdjs.end_95screenCode.GDbacktomenuObjects2= [];
gdjs.end_95screenCode.GDbacktomenuObjects3= [];
gdjs.end_95screenCode.GDretryObjects1= [];
gdjs.end_95screenCode.GDretryObjects2= [];
gdjs.end_95screenCode.GDretryObjects3= [];
gdjs.end_95screenCode.GDplayer_9595nameObjects1= [];
gdjs.end_95screenCode.GDplayer_9595nameObjects2= [];
gdjs.end_95screenCode.GDplayer_9595nameObjects3= [];
gdjs.end_95screenCode.GDNewTextObjects1= [];
gdjs.end_95screenCode.GDNewTextObjects2= [];
gdjs.end_95screenCode.GDNewTextObjects3= [];
gdjs.end_95screenCode.GDsave_9595scoreObjects1= [];
gdjs.end_95screenCode.GDsave_9595scoreObjects2= [];
gdjs.end_95screenCode.GDsave_9595scoreObjects3= [];
gdjs.end_95screenCode.GDview_9595scoresObjects1= [];
gdjs.end_95screenCode.GDview_9595scoresObjects2= [];
gdjs.end_95screenCode.GDview_9595scoresObjects3= [];


gdjs.end_95screenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}}

}


};gdjs.end_95screenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", true);
}}

}


};gdjs.end_95screenCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.end_95screenCode.GDplayer_9595nameObjects1, gdjs.end_95screenCode.GDplayer_9595nameObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.end_95screenCode.GDplayer_9595nameObjects2.length;i<l;++i) {
    if ( gdjs.end_95screenCode.GDplayer_9595nameObjects2[i].getVariableString(gdjs.end_95screenCode.GDplayer_9595nameObjects2[i].getVariables().getFromIndex(0)) == "" ) {
        isConditionTrue_0 = true;
        gdjs.end_95screenCode.GDplayer_9595nameObjects2[k] = gdjs.end_95screenCode.GDplayer_9595nameObjects2[i];
        ++k;
    }
}
gdjs.end_95screenCode.GDplayer_9595nameObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.end_95screenCode.GDplayer_9595nameObjects2 */
{for(var i = 0, len = gdjs.end_95screenCode.GDplayer_9595nameObjects2.length ;i < len;++i) {
    gdjs.end_95screenCode.GDplayer_9595nameObjects2[i].returnVariable(gdjs.end_95screenCode.GDplayer_9595nameObjects2[i].getVariables().getFromIndex(0)).setString("unknown_player" + gdjs.evtTools.common.toString(gdjs.randomInRange(-(12345), 12345)));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.end_95screenCode.GDNewTextObjects1);
/* Reuse gdjs.end_95screenCode.GDplayer_9595nameObjects1 */
/* Reuse gdjs.end_95screenCode.GDsave_9595scoreObjects1 */
gdjs.copyArray(runtimeScene.getObjects("view_scores"), gdjs.end_95screenCode.GDview_9595scoresObjects1);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "500d8c6d-c890-4c8a-b796-05d0425fb246", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (gdjs.RuntimeObject.getVariableString(((gdjs.end_95screenCode.GDplayer_9595nameObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.end_95screenCode.GDplayer_9595nameObjects1[0].getVariables()).getFromIndex(0))));
}{for(var i = 0, len = gdjs.end_95screenCode.GDsave_9595scoreObjects1.length ;i < len;++i) {
    gdjs.end_95screenCode.GDsave_9595scoreObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.end_95screenCode.GDplayer_9595nameObjects1.length ;i < len;++i) {
    gdjs.end_95screenCode.GDplayer_9595nameObjects1[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.end_95screenCode.GDplayer_9595nameObjects1.length ;i < len;++i) {
    gdjs.end_95screenCode.GDplayer_9595nameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.end_95screenCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.end_95screenCode.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.end_95screenCode.GDview_9595scoresObjects1.length ;i < len;++i) {
    gdjs.end_95screenCode.GDview_9595scoresObjects1[i].hide(false);
}
}}

}


};gdjs.end_95screenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score_text"), gdjs.end_95screenCode.GDscore_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("view_scores"), gdjs.end_95screenCode.GDview_9595scoresObjects1);
{for(var i = 0, len = gdjs.end_95screenCode.GDscore_9595textObjects1.length ;i < len;++i) {
    gdjs.end_95screenCode.GDscore_9595textObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.end_95screenCode.GDview_9595scoresObjects1.length ;i < len;++i) {
    gdjs.end_95screenCode.GDview_9595scoresObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("backtomenu"), gdjs.end_95screenCode.GDbacktomenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.end_95screenCode.GDbacktomenuObjects1.length;i<l;++i) {
    if ( gdjs.end_95screenCode.GDbacktomenuObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.end_95screenCode.GDbacktomenuObjects1[k] = gdjs.end_95screenCode.GDbacktomenuObjects1[i];
        ++k;
    }
}
gdjs.end_95screenCode.GDbacktomenuObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.end_95screenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.end_95screenCode.GDretryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.end_95screenCode.GDretryObjects1.length;i<l;++i) {
    if ( gdjs.end_95screenCode.GDretryObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.end_95screenCode.GDretryObjects1[k] = gdjs.end_95screenCode.GDretryObjects1[i];
        ++k;
    }
}
gdjs.end_95screenCode.GDretryObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.end_95screenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("save_score"), gdjs.end_95screenCode.GDsave_9595scoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.end_95screenCode.GDsave_9595scoreObjects1.length;i<l;++i) {
    if ( gdjs.end_95screenCode.GDsave_9595scoreObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.end_95screenCode.GDsave_9595scoreObjects1[k] = gdjs.end_95screenCode.GDsave_9595scoreObjects1[i];
        ++k;
    }
}
gdjs.end_95screenCode.GDsave_9595scoreObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.end_95screenCode.GDsave_9595scoreObjects1.length;i<l;++i) {
    if ( gdjs.end_95screenCode.GDsave_9595scoreObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.end_95screenCode.GDsave_9595scoreObjects1[k] = gdjs.end_95screenCode.GDsave_9595scoreObjects1[i];
        ++k;
    }
}
gdjs.end_95screenCode.GDsave_9595scoreObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_name"), gdjs.end_95screenCode.GDplayer_9595nameObjects1);
{for(var i = 0, len = gdjs.end_95screenCode.GDplayer_9595nameObjects1.length ;i < len;++i) {
    gdjs.end_95screenCode.GDplayer_9595nameObjects1[i].returnVariable(gdjs.end_95screenCode.GDplayer_9595nameObjects1[i].getVariables().getFromIndex(0)).setString((gdjs.end_95screenCode.GDplayer_9595nameObjects1[i].getText()));
}
}
{ //Subevents
gdjs.end_95screenCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("view_scores"), gdjs.end_95screenCode.GDview_9595scoresObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.end_95screenCode.GDview_9595scoresObjects1.length;i<l;++i) {
    if ( gdjs.end_95screenCode.GDview_9595scoresObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.end_95screenCode.GDview_9595scoresObjects1[k] = gdjs.end_95screenCode.GDview_9595scoresObjects1[i];
        ++k;
    }
}
gdjs.end_95screenCode.GDview_9595scoresObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.end_95screenCode.GDview_9595scoresObjects1.length;i<l;++i) {
    if ( gdjs.end_95screenCode.GDview_9595scoresObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.end_95screenCode.GDview_9595scoresObjects1[k] = gdjs.end_95screenCode.GDview_9595scoresObjects1[i];
        ++k;
    }
}
gdjs.end_95screenCode.GDview_9595scoresObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "500d8c6d-c890-4c8a-b796-05d0425fb246", true);
}}

}


};

gdjs.end_95screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.end_95screenCode.GDgame_9595over_9595textObjects1.length = 0;
gdjs.end_95screenCode.GDgame_9595over_9595textObjects2.length = 0;
gdjs.end_95screenCode.GDgame_9595over_9595textObjects3.length = 0;
gdjs.end_95screenCode.GDscore_9595textObjects1.length = 0;
gdjs.end_95screenCode.GDscore_9595textObjects2.length = 0;
gdjs.end_95screenCode.GDscore_9595textObjects3.length = 0;
gdjs.end_95screenCode.GDbacktomenuObjects1.length = 0;
gdjs.end_95screenCode.GDbacktomenuObjects2.length = 0;
gdjs.end_95screenCode.GDbacktomenuObjects3.length = 0;
gdjs.end_95screenCode.GDretryObjects1.length = 0;
gdjs.end_95screenCode.GDretryObjects2.length = 0;
gdjs.end_95screenCode.GDretryObjects3.length = 0;
gdjs.end_95screenCode.GDplayer_9595nameObjects1.length = 0;
gdjs.end_95screenCode.GDplayer_9595nameObjects2.length = 0;
gdjs.end_95screenCode.GDplayer_9595nameObjects3.length = 0;
gdjs.end_95screenCode.GDNewTextObjects1.length = 0;
gdjs.end_95screenCode.GDNewTextObjects2.length = 0;
gdjs.end_95screenCode.GDNewTextObjects3.length = 0;
gdjs.end_95screenCode.GDsave_9595scoreObjects1.length = 0;
gdjs.end_95screenCode.GDsave_9595scoreObjects2.length = 0;
gdjs.end_95screenCode.GDsave_9595scoreObjects3.length = 0;
gdjs.end_95screenCode.GDview_9595scoresObjects1.length = 0;
gdjs.end_95screenCode.GDview_9595scoresObjects2.length = 0;
gdjs.end_95screenCode.GDview_9595scoresObjects3.length = 0;

gdjs.end_95screenCode.eventsList3(runtimeScene);

return;

}

gdjs['end_95screenCode'] = gdjs.end_95screenCode;
