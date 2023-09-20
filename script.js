// Lấy thẻ div để hiển thị tệp PDF và ảnh
const truyen = document.getElementById("truyen");
var sttIndex = 0;
const btnIndex = document.getElementById("indexx");
const btnCotich = document.getElementById("cotich");
const btnNgungon = document.getElementById("ngungon");
const btnEnglish = document.getElementById("english");
// Mảng chứa các đường dẫn tệp PDF và ảnh
const filePaths = [
    { pdf: "pdf/Thạch sanh.pdf", image: "images/ThachSanh.png", name: "Thạch sanh" },
    { pdf: "pdf/Cây tre trăm đốt.pdf", image: "images/CayTreTramDot.png", name: "Cây tre trăm đốt" },
    { pdf: "pdf/Cóc kiện trời.pdf", image: "images/CocKienTroi.png", name: "Cóc kiện trời"},
    { pdf: "pdf/Sự tích dưa hấu.pdf", image: "images/SuTichDuaHau.png", name: "Sự tích dưa hấu"},
    { pdf: "pdf/Thánh gióng.pdf", image: "images/ThanhGiong.png", name: "Thánh gióng" },

    { pdf: "pdf/Câu chuyện bó đũa.pdf", image: "images/Câu chuyện bó đũa.png", name: "Câu chuyện bó đũa" },
    { pdf: "pdf/Đẽo cày giữa đường.pdf", image: "images/deo-cay-giua-duong-1.jpeg", name: "Đẽo cày giữa đường" },
    { pdf: "pdf/Ếch ngồi đáy giếng.pdf", image: "images/ech-ngoi-day-gieng.jpg", name: "Ếch ngồi đáy giếng" },
    { pdf: "pdf/Thầy bói xem voi.pdf", image: "images/Thầy bói xem voi.jpg", name: "Thầy bói xem voi" },
    { pdf: "pdf/Rùa và Thỏ.pdf", image: "images/cau-chuyen-ke-hang-dem-cho-be-rua-va-tho.jpg", name: "Rùa và thỏ"},

    { pdf: "pdf/Story Teller 1 Part 1.pdf", image: "images/Screenshot (774).png", name:"Story Teller 1 Part 1" },
    { pdf: "pdf/Story Teller 1 Part 2.pdf", image: "images/Screenshot (775).png", name:"Story Teller 1 Part 2" },
    { pdf: "pdf/Story Teller 1 Part 4.pdf", image: "images/Screenshot (776).png", name:"Story Teller 1 Part 4" },
    { pdf: "pdf/Story Teller 1 Part 5.pdf", image: "images/Screenshot (777).png", name:"Story Teller 1 Part 5" },
    { pdf: "pdf/Story Teller 1 Part 6.pdf", image: "images/Screenshot (778).png", name:"Story Teller 1 Part 6" },

    // Thêm các đường dẫn tệp khác vào đây
];
btnIndex.addEventListener("click", function() {
    loadTrang(0, filePaths.length);
});
btnCotich.addEventListener("click", function() {
    loadTrang(0,5);
});
btnNgungon.addEventListener("click", function() {
    loadTrang(5, 10);
});
btnEnglish.addEventListener("click", function() {
    loadTrang(10, 15);
});

window.addEventListener("load", function() {
    loadTrang(0, filePaths.length);
});
function loadTrang(start, length) {
    console.log("loadhet");
    while(truyen.firstChild) {
        truyen.removeChild(truyen.firstChild);
    }
    // Lặp qua 10 lần để tạo 10 thẻ div
    for (let i = start; i < length; i++) {
        
        // Tạo một thẻ div
        const divElement = document.createElement("div");
        divElement.className = "truyen-item";

        // Tạo một thẻ a
        const aElement = document.createElement("a");

        // Tạo thuộc tính href và src dựa trên dữ liệu cụ thể
        const truyenNumber = i;
        const hrefValue = `truyen1.html`;
        const srcValue = filePaths[i].image;
        

        aElement.href = hrefValue;

        // Tạo thẻ hình ảnh và đặt thuộc tính src
        const imgElement = document.createElement("img");
        imgElement.src = srcValue;

        // Tạo thẻ tiêu đề h3
        const h3Element = document.createElement("h3");
        h3Element.textContent = filePaths[i].name;

        // Gắn các phần tử con vào thẻ a
        aElement.appendChild(imgElement);
        aElement.appendChild(h3Element);
        

        // Gắn thẻ a vào thẻ div
        divElement.appendChild(aElement);
        (function(index) {
            divElement.addEventListener("click", function() {
                changeStt(index);
                console.log(index);
            });
        })(i);
        //aElement.click = changeHref(filePaths[i].pdf)
        // Gắn thẻ div vào body hoặc bất kỳ vị trí nào bạn muốn
        truyen.appendChild(divElement);
    }
}
function changeStt(stt) {
    sttIndex = stt;
    console.log(sttIndex)
    localStorage.setItem("myVariable", sttIndex);
}

