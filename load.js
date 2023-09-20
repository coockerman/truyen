const filePaths = [
    { pdf: "pdf/Thạch sanh.pdf", image: "images/ThachSanh.png" },
    { pdf: "pdf/Cây tre trăm đốt.pdf", image: "images/CayTreTramDot.png" },
    { pdf: "pdf/Cóc kiện trời.pdf", image: "images/CocKienTroi.png" },
    { pdf: "pdf/Sự tích dưa hấu.pdf", image: "images/SuTichDuaHau.png" },
    { pdf: "pdf/Thánh gióng.pdf", image: "images/ThanhGiong.png" },

    { pdf: "pdf/Câu chuyện bó đũa.pdf", image: "images/Câu chuyện bó đũa.png" },
    { pdf: "pdf/Đẽo cày giữa đường.pdf", image: "images/deo-cay-giua-duong-1.jpeg" },
    { pdf: "pdf/Ếch ngồi đáy giếng.pdf", image: "images/ech-ngoi-day-gieng.jpg" },
    { pdf: "pdf/Thầy bói xem voi.pdf", image: "images/Thầy bói xem voi.jpg" },
    { pdf: "pdf/Rùa và Thỏ.pdf", image: "images/cau-chuyen-ke-hang-dem-cho-be-rua-va-tho.jpg" },

    { pdf: "pdf/Story Teller 1 Part 1.pdf", image: "images/Screenshot (774).png" },
    { pdf: "pdf/Story Teller 1 Part 2.pdf", image: "images/Screenshot (775).png" },
    { pdf: "pdf/Story Teller 1 Part 4.pdf", image: "images/Screenshot (776).png" },
    { pdf: "pdf/Story Teller 1 Part 5.pdf", image: "images/Screenshot (777).png" },
    { pdf: "pdf/Story Teller 1 Part 6.pdf", image: "images/Screenshot (778).png" },

    // Thêm các đường dẫn tệp khác vào đây
];
function changeHref(newHref) {
    const dynamicLink = document.getElementById("iframe_load");
    dynamicLink.src = newHref;
}
window.addEventListener("load", function() {
    var myVariable = localStorage.getItem("myVariable");
    if (myVariable !== undefined && myVariable >= 0 && myVariable < filePaths.length) {
        changeHref(filePaths[myVariable].pdf);
    } else {
        console.error("window.sttIndex is not a valid index.");
    }
});
//changeHref(filePaths[window.sttIndex].pdf);
