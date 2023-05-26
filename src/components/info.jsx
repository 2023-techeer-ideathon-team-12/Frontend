// 헬스장 정보
const gymName = "헬스장 이름";
const address = "헬스장 주소";
const phoneNumber = "헬스장 연락처";

// 헬스장 시설
const facilities = [
  { name: "시설 1", description: "시설 1 설명", image: "이미지 URL" },
  { name: "시설 2", description: "시설 2 설명", image: "이미지 URL" },
  { name: "시설 3", description: "시설 3 설명", image: "이미지 URL" },
];

// 헬스장 리뷰
const reviews = [
  { user: "사용자1", rating: 4, comment: "좋은 헬스장입니다." },
  { user: "사용자2", rating: 5, comment: "매우 만족합니다." },
];

// 헬스장 정보 컴포넌트
const gymInfoComponent = document.getElementById("gym-info");
gymInfoComponent.innerHTML = `
  <h2>${gymName}</h2>
  <p>주소: ${address}</p>
  <p>연락처: ${phoneNumber}</p>
`;

// 헬스장 시설 컴포넌트
const facilitiesComponent = document.getElementById("facilities");
facilities.forEach((facility) => {
  const facilityElement = document.createElement("div");
  facilityElement.innerHTML = `
    <h3>${facility.name}</h3>
    <p>${facility.description}</p>
    <img src="${facility.image}" alt="${facility.name}">
  `;
  facilitiesComponent.appendChild(facilityElement);
});

// 헬스장 리뷰 컴포넌트
const reviewsComponent = document.getElementById("reviews");
reviews.forEach((review) => {
  const reviewElement = document.createElement("div");
  reviewElement.innerHTML = `
    <p>작성자: ${review.user}</p>
    <p>평점: ${review.rating}</p>
    <p>리뷰: ${review.comment}</p>
  `;
  reviewsComponent.appendChild(reviewElement);
});

export default info;