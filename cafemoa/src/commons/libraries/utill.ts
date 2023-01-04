export const GetDate = (value: string) => {
  const WriteDate = new Date(value);
  const NowDate = new Date();
  const DateNum = Number(NowDate) - Number(WriteDate);

  const yyyy = WriteDate.getFullYear();
  const mm = WriteDate.getMonth() + 1;
  const dd = WriteDate.getDate();

  const times = [
    { time: "분", milliSeconds: 1000 * 60 },
    { time: "시간", milliSeconds: 1000 * 60 * 60 },
    { time: "일", milliSeconds: 1000 * 60 * 60 * 24 },
  ].reverse();

  const betweenTime = {
    time: "",
    value: 0,
  };
  for (const value of times) {
    //   const betweenTime = Math.floor(DateNum / value.milliSeconds);
    betweenTime.time = value.time;
    betweenTime.value = Math.floor(DateNum / value.milliSeconds);
    if (betweenTime.value > 0) {
      if (betweenTime.time === "일" && betweenTime.value > 7) {
        return `${yyyy}.${mm}.${dd}`;
      }
      return `${betweenTime.value}${betweenTime.time} 전`;
    }
  }
  return "방금 전";
};

// export const base64toFile = (base_data, filename) => {
//   let arr = base_data.split(","),
//     mime = arr[0].match(/:(.*?);/)[1],
//     bstr = atob(arr[1]),
//     n = bstr.length,
//     u8arr = new Uint8Array(n);
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }

//   return new File([u8arr], filename, { type: mime });
// };
