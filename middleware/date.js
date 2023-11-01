

const date = (req, res, next) => {
    let date = new Date();
    let h = date.getHours()

    if (!(h >= 9 && h <= 17)) {
        res.send('<html><image src="https://www.accuform.com/files/damObject/Image/huge/MADM570.jpg" style="width:100%;height:100%"></image></html>')
    }
    next()
}

module.exports = date;