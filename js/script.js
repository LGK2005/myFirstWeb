function upDate(previewPic)
{
    const chuyenNganh = document.getElementById("ChuyenNganh");
    chuyenNganh.style.backgroundImage = `url(${previewPic})`;
    chuyenNganh.style.backgroundColor = `rgba(255, 255, 255, 0.1)`;
}

function unDo()
{
    const chuyenNganh = document.getElementById("ChuyenNganh");
    chuyenNganh.style.backgroundImage = "";
    chuyenNganh.style.backgroundColor = "";
}