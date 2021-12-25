const baseParse = _ => {
    let d = [];
    const current_page = MY_URL.split('##')[1]
    const current_url = getVar('true_url', MY_URL)
    log(current_page)
    log(current_url)

    setResult(d);
}