const textConfig = {
  text1: "Cục cưng của anh ơi!",
  text2: "Em có biết anh yêu em nhiều tới mức nào không, em yêu của anh đẹp như một thiên thần, dễ thương như công chúa, nhân hậu như cô tiên, em làm anh không thể ngừng yêu em được 😘😘😘",
  text3: "Em yêu anh nhất đúng không nào em yêu 😊",
  text4: "Trả lời cho anh biết đi nào em yêu 😉😉😉",
  text5: "Ai thèm yêu anh chứ 😛",
  text6: "Em yêu anh nhiều nhất trên đời luôn 💖💖💖",
  text7: "Anh cũng yêu em nhất trên đời luôn, mà anh muốn hôn em nữa cơ, em có đồng ý không nào 😘😘😘",
  text8: "Anh biết ngay là em sẽ trả lời như vậy mà em yêu 😊",
  text9: "Anh muốn hôn bao nhiêu cũng được anh yêu ơi em cũng muốn hôn anh thật nhiều nữa",
  text10: "Anh biết rồi, vậy anh sẽ hôn em yêu của anh vô cùng luôn nha 😘😘😘",
  text11: "Anh còn một thứ muốn cho em xem nữa đó em yêu ơi, em chuẩn bị tinh thần nha 😁😁😁",
  text12: "Oke anh yêu 😘",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/one.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/bg1.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  //generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Đồng ý đi mà em yêu 😊'>",
      background: '#fff url("img/bgx.jpg")',     
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/tt.gif")
                    top center
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/bgx.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://kl0224.github.io/kiniem.github.io/";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
