function upDate(previewPic)
{
    const chuyenNganh = document.getElementById("ChuyenNganh");
    chuyenNganh.style.backgroundImage = `url(${previewPic})`;
}

function unDo()
{
    const chuyenNganh = document.getElementById("ChuyenNganh");
    chuyenNganh.style.backgroundImage = `url(images/Bannerweb-K20.png)`;
}