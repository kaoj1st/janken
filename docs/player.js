function action(oppornent){



  return 1;



}


/*
対戦相手名前まとめ

チョキ大好きマン:fighter::choki-lover
表か裏かマン:fighter::odd-even
帰って着た表か裏かマン:fighter::on-third
*/

const GU = 0;
const CHOKI = 1;
const PA = 2;

let matches = 0;

function countup() {
matches = matches + 1
return matches;
}

// チョキ大好きマンに対するアクション
function actionAgainstChokiDaisukiman() {
return GU;
}

// 表か裏かマンに対するアクション
function actionAgainstOmoteUra() {
const isEven = matches % 2 == 0;
let result = PA;
if (isEven) {
result = GU;
}
return result;
}

// 帰ってきた表か裏かマンに対するアクション
function actionAgainstOmoteUra2() {
const isEven = matches % 3 == 0;
let result = GU;
if (isEven) {
result = CHOKI;
}
return result;
}

/*
対戦相手名前まとめ
チョキ大好きマン： fighter::choki-lover
表か裏かマン：fighter::odd-even
帰ってきた表か裏かマン：fighter::on-third
*/

function action(oppornent) {
console.log(oppornent);
let result = GU;
countup();
if (oppornent == "fighter::choki-lover") {
result = actionAgainstChokiDaisukiman();
} else {
result = actionAgainstOmoteUra2();
}
return result;
