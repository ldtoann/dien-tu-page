document.addEventListener("DOMContentLoaded", function () {
  // Lấy phần tử danh sách tin tức
  const newsList = document.querySelector(".list-tintuc");
  // Lấy phần tử phân trang
  const pagination = document.querySelector(".pagination");

  // Dữ liệu tin tức
  const newsData = [
    {
      title:
        "Thừa Thiên - Huế cấp phép đầu tư 9 dự án mới, tổng vốn hơn 2.000 tỷ ",
      date: "(3.6.2023)",
    },
    {
      title:
        "Tỉnh Thừa Thiên Huế mở rộng hợp tác địa phương, xúc tiến đầu tư và kết nối giao thương với Hàn Quốc ",
      date: "(30.5.2023)",
    },
    {
      title: "Thừa Thiên Huế luôn là địa phương đi đầu chuyển đổi số",
      date: "(23.4.2023)",
    },
    {
      title:
        "Tập đoàn Công nghệ Xelex tìm hiểu cơ hội đầu tư tại tỉnh Thừa Thiên Huế ",
      date: "(10.12.2022)",
    },
    {
      title:
        "Thừa Thiên - Huế: Công bố quyết định thành lập Ban Quản lý dự án Đầu tư xây dựng và Phát triển đô thị tỉnh ",
      date: "(23.8.2022)",
    },
    {
      title:
        "Thừa Thiên Huế tổ chức chuyến công tác xúc tiến đầu tư tại Nhật Bản ",
      date: "(28.7.2022)",
    },
    {
      title: "Thừa Thiên Huế cấp 18 dự án mới đầu tư vào địa phương ",
      date: "(16.7.2022)",
    },
    {
      title: "Thu hút FDI: Tỉnh Thừa Thiên Huế quyết tâm đạt mục tiêu kép ",
      date: "(1.5.2022)",
    },
    {
      title:
        "Thừa Thiên Huế đặt mục tiêu thu hút hàng chục nghìn tỷ đồng vốn đầu tư trong năm 2022 ",
      date: "(15.3.2022)",
    },
    {
      title: "Huế sẽ có dự án khu phần mềm hơn 3.000 tỉ đồng ",
      date: "(15.2.2022)",
    },
    {
      title: "Takatsu Engineering mở rộng hoạt động đầu tư tại Thừa Thiên Huế ",
      date: "(18.1.2022)",
    },
    {
      title:
        "Tiếp tục hoàn thiện mô hình quản lý và ưu đãi đầu tư, nâng cao tính liên kết, hợp tác phát triển giữa các Khu công nghiệp, Khu kinh tế ",
      date: "(23.12.2021)",
    },
    {
      title: "Mở đường bay từ Hàn Quốc đến Thừa Thiên Huế và ngược lại ",
      date: "(5.10.2021)",
    },
    {
      title:
        "Thông báo số điện thoại tiếp nhận kiến nghị, vướng mắc của doanh nghiệp, nhà đầu tư liên quan đến thủ tục đầu tư ",
      date: "(5.10.2021)",
    },
    {
      title:
        "Công ty Cổ phần Tập đoàn FLC mong muốn là nhà đầu tư chiến lược của tỉnh ",
      date: "(3.10.2021)",
    },
    {
      title:
        "Hàn Quốc đầu tư phát triển đô thị thông minh tại Thừa Thiên - Huế ",
      date: "(12.9.2021)",
    },
    {
      title:
        "HueCIT hợp tác chiến lược với Digitech về nghiên cứu, ứng dụng, chuyển giao công nghệ, nền tảng, giải pháp dịch vụ trong lĩnh vực Khoa học kỹ thuật và Công nghệ thông tin ",
      date: "(2.4.2021)",
    },
    {
      title:
        "LogiGear làm việc với HueCIT về việc mở rộng hoạt động tại Thừa Thiên Huế ",
      date: "(22.12.2020)",
    },
    {
      title: "Thừa Thiên Huế thu hút đầu tư để trở thành đô thị thông minh ",
      date: "(25.11.2020)",
    },
    {
      title:
        "Tìm kiếm tài năng khởi nghiệp đổi mới sáng tạo quốc gia Techfest 2020 ",
      date: "(20.10.2020)",
    },
    {
      title:
        "Thừa Thiên Huế nghiên cứu đầu tư 6.480 tỷ đồng xây tuyến đường ven biển ",
      date: "(13.9.2020)",
    },
    {
      title:
        "Huế sẽ trở thành đô thị di sản- văn hóa, đô thị thông minh trong 5 năm tới ",
      date: "(3.9.2020)",
    },
    {
      title:
        "Bệnh viện Trung ương Huế khai trương và đưa vào hoạt động Trung tâm tư vấn, khám chữa bệnh từ xa ",
      date: "(1.9.2020)",
    },
    {
      title: "“Làn sóng” đầu tư vào năng lượng tái tạo ",
      date: "(17.2.2020)",
    },
  ];

  // Số lượng tin tức hiển thị trên mỗi trang
  const itemsPerPage = 10;
  // Trang hiện tại đang được hiển thị
  let currentPage = 1;

  // Hiển thị tin tức trên trang web
  function displayNews() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentNews = newsData.slice(start, end);
    // Xóa nội dung hiện tại của danh sách tin tức
    newsList.innerHTML = "";
    // Thêm tin tức vào danh sách
    currentNews.forEach(function (news) {
      const newsItem = document.createElement("div");
      newsItem.classList.add("new-tintuc-list");
      newsItem.innerHTML = `
        <a href="${news.link}">${news.title}</a>
        <span>${news.date}</span>
      `;
      newsList.appendChild(newsItem);
    });
  }
  // Hiển thị các nút phân trang
  function displayPagination() {
    const totalPages = Math.ceil(newsData.length / itemsPerPage);
    // Xóa nội dung hiện tại của phân trang
    pagination.innerHTML = "";
    // Tạo nút "Previous"
    const previousButton = document.createElement("a");
    previousButton.classList.add("pagination-button");
    previousButton.href = "#";
    previousButton.textContent = " < ";
    previousButton.addEventListener("click", function (event) {
      event.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        displayNews();
        displayPagination();
      }
    });
    pagination.appendChild(previousButton);
    // Tạo các nút trang
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("a");
      pageButton.classList.add("pagination-button");
      pageButton.href = "#";
      pageButton.textContent = i;
      if (i === currentPage) {
        pageButton.classList.add("active");
      }
      pageButton.addEventListener("click", function (event) {
        event.preventDefault();
        currentPage = i;
        displayNews();
        displayPagination();
      });
      pagination.appendChild(pageButton);
    }
    // Tạo nút "Next"
    const nextButton = document.createElement("a");
    nextButton.classList.add("pagination-button");
    nextButton.href = "#";
    nextButton.textContent = " > ";
    nextButton.addEventListener("click", function (event) {
      event.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        displayNews();
        displayPagination();
      }
    });
    pagination.appendChild(nextButton);
  }
  // Khởi đầu việc hiển thị tin tức và phân trang
  displayNews();
  displayPagination();
});
