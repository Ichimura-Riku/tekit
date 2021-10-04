(() => {
    const $start = document.getElementById('startButton-js');
    const $questionContent = document.getElementById('questionContent-js');
    const $questionWord = document.getElementById('questionWord-js');
    const $insert = document.getElementById('insert-js');
    const $result = document.getElementById('result-js');
    const $judge = document.querySelectorAll('[data-judge]');
    const $judgeLen = $judge.length;
    const ACTIVE_CLASS = 'is-active';
    const quizRepertoire = {
        0: "~の前に",
        1: "～の後に",
        2: "～の間（中）に",
        3: "～の間",
        4: "～から・・・まで",
        5: "～までずっと",
        6: "～までに",
        7: "～以来"
    };
    const quizAnswers = {
        0: "before",
        1: "after",
        2: "during",
        3: "for",
        4: "from~to...",
        5: "until",
        6: "by",
        7: "since"
    };

    const getRandomInt = (range) => {    //乱数を生成する関数
        return Math.floor(Math.random() * range);
    };

    $start.style.display = 'block';

    const init = () => {                //初期設定関数
        $questionContent.style.display = 'none';
        // $result.style.display = 'none';
        for (let judgeIndex = 0; $judgeLen > judgeIndex; judgeIndex++) {
            $judge[judgeIndex].style.display = 'none';

        }

    };
    init();

    // while (1 === 1) {
    //     index = getRandomInt(7)
    //     $start.addEventListener('click', (e) => beginFunc(e, index));
    //     $insert.addEventListener('keypress', (e) => EnterClick(e, index));
    // }

    console.log('1');


    EnterClick3 = (e, index) => {

        if (e.keyCode === 13) {
            e.preventDefault();
            $start.style.display = 'none';
            $questionContent.style.display = 'block';
            $insert.focus();
            $questionWord.textContent = quizRepertoire[index];
            $judge[2].textContent = quizAnswers[index];

        }

    };

    beginFunc = (e, index) => {
        console.log('確認');
        EnterClick3(e, index);
    };

    EnterClick1 = (e, index) => {
        if (e.keyCode === 13) {
            console.log($questionContent.style.display);
            // if ($questionContent.style.display === 'block') {
            answerWord = quizAnswers[index];
            response = $insert.value;
            $questionContent.style.display = 'none';
            $result.style.display = 'block';
            if (response === answerWord) {
                $judge[0].style.display = 'block';
            } else {
                $judge[1].style.display = 'block';
                $judge[2].style.display = 'block';
            }
            console.log($questionContent.style.display);




        }
    };


    index = getRandomInt(7)
    $start.addEventListener('click', (e) => beginFunc(e, index));
    $insert.addEventListener('keypress', (e) => EnterClick1(e, index));
    $start.addEventListener('keypress', (e) => EnterClick3(e, index));
    window.document.onkeydown = (event) => {
        if (event.key === 'Enter') {
            init();
            getRandomInt(7);

            $questionContent.style.display = 'block';
            return;
        }
    }



})();
// 乱数が再構築されない
// ループが出来てない
// カーソルがフォーカスされてない