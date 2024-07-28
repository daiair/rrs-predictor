document.getElementById('predict').addEventListener('submit', function(event) {
    event.preventDefault();

    // ラジオボタンの選択値を取得
    const age = document.querySelector('input[name="age"]:checked').value;
    const sex = document.querySelector('input[name="sex"]:checked').value;
    const cpc = document.querySelector('input[name="cpc"]:checked').value;
    const bmi = document.querySelector('input[name="bmi"]:checked').value;
    const night = document.querySelector('input[name="night"]:checked').value;
    const holiday = document.querySelector('input[name="holiday"]:checked').value;
    const caller = document.querySelector('input[name="caller"]:checked').value;
    const reason = document.querySelector('input[name="reason"]:checked').value;
    const woc = document.querySelector('input[name="woc"]:checked').value;
    const kt_call = document.querySelector('input[name="kt_call"]:checked').value;
    const sbp_call = document.querySelector('input[name="sbp_call"]:checked').value;
    const hr_call = document.querySelector('input[name="hr_call"]:checked').value;
    const rr_call = document.querySelector('input[name="rr_call"]:checked').value;
    const spo2_call = document.querySelector('input[name="spo2_call"]:checked').value;
    const kt_pre = document.querySelector('input[name="kt_pre"]:checked').value;
    const sbp_pre = document.querySelector('input[name="sbp_pre"]:checked').value;
    const hr_pre = document.querySelector('input[name="hr_pre"]:checked').value;
    const rr_pre = document.querySelector('input[name="rr_pre"]:checked').value;
    const spo2_pre = document.querySelector('input[name="spo2_pre"]:checked').value;
    const preo2 = document.querySelector('input[name="preo2"]:checked').value;
    const cpa = document.querySelector('input[name="cpa"]:checked').value;
    const dnar = document.querySelector('input[name="dnar"]:checked').value;
    const icu = document.querySelector('input[name="icu"]:checked').value;
    const sedation = document.querySelector('input[name="sedation"]:checked').value;
    const surgery = document.querySelector('input[name="surgery"]:checked').value;
    const urgent = document.querySelector('input[name="urgent"]:checked').value;

    // 特徴量を配列にまとめる
    const features = {age: Number(age), sex: Number(sex), cpc: Number(cpc), bmi: Number(bmi), night: Number(night),
                      holiday: Number(holiday), caller: Number(caller), reason: Number(reason), woc: Number(woc),
                      kt_call: Number(kt_call), sbp_call: Number(sbp_call), hr_call: Number(hr_call), rr_call: Number(rr_call),
                      spo2_call: Number(spo2_call), kt_pre: Number(kt_pre), sbp_pre: Number(sbp_pre), hr_pre: Number(hr_pre),
                      rr_pre: Number(rr_pre), spo2_pre: Number(spo2_pre), preo2: Number(preo2), cpa: Number(cpa),
                      dnar: Number(dnar), icu: Number(icu), sedation: Number(sedation), surgery: Number(surgery),
                      urgent: Number(urgent)};

    // POSTリクエストを送信
    fetch('https://rrs-predictor-uxzqpuryqa-uc.a.run.app/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(features),
    })
    .then(response => response.json())
    .then(data => {
        // 結果を表示
        document.getElementById('result').textContent = 'Prediction: ' + data.prediction + '%';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Error: ' + error;
    });
});