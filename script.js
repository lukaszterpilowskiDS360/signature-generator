nameInput = document.querySelector('.nameInput')
phoneInput = document.querySelector('.phoneInput')
emailInput = document.querySelector('.emailInput')

nameField = document.querySelector('.name')
phoneField = document.querySelector('.phone')
emailField = document.querySelector('.email')

console.log(nameInput)


nameInput.addEventListener('input', (e) => {
    nameField.innerText = e.target.value
})

phoneInput.addEventListener('input', (e) => {
    phoneField.innerText = '(+48) '+ formatPhoneNumber(e.target.value) + ' '
})

emailInput.addEventListener('input', (e) => {
    emailField.innerText = e.target.value + '@ds360.pl'
})

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/)
    if (match) {
      return  match[1] + ' ' + match[2] + ' ' + match[3]
    }
    return '(proszę wprowadzić cały numer)'
  }







function  copyToClipboard() {
    console.log('print')
    // var elementHTML = document.querySelector('.signature');
    // var worker = html2pdf().from(elementHTML).save()

    const doc = new jsPDF();

    doc.text("Hello world!", 10, 10);

    var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAACPCAYAAADQkZ9OAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAIdUAACHVAQSctJ0AADTzSURBVHhe7d0J2GVJWR/wGwUJMRoXAoJIFFwJsgiuIJtBxSWCRlHEKKImIYQY0BgJOhiVIMOIGJYZpqd7FmaQwRiNsoUg6CiLjjjigIgOM/11T8+wDgNhCci07+/rLiiKOsvdz+2u//P8n+7v3nvOqeWtf731Vp2qWUNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PDNHHL4D8Ofmbwy4MPCD44+C3BewX/adD3ePNgQ0NDQy/+UfDuwT8KXneS7wi+O/ie4A3BdwWvD/ruaPCpwc8JEqSGzeDTgurq00fSbz812HAKQa+u0ancMfTbTwluGv8weM/gm4PE5Pgc/P/BY8HXBz8vuI30z4NafXxG8B8Ep4yU7s8NXhR8a/DakVSvTwp+VtA9drYjUEmMdR2k2FNX4JTWrwyeE9wL6uHHkBH8dPBLg+k+NwuuE4Y4fxGcV1RqPBx8TJABTxFfFnxTMC9zHhhh/CfBqYG9E4LvD/5tUHqJxUeDtfLv4weDrk12dr8g+9qpYa1KekNQo1olFe7Lg08LPijIgG9xkutugGMgHf8iyHil923BjwRrFd3H9wcZfMr3c4O3Crr/qoX1nwWlt5aOkn8XHGPU7wteFpTmKYGIalRlejW6+wSn1GkRldsEfz94JGhIWqZ7Wb4zyL4uDH52cCdExvhbA6llaBXkhisYvSReE7wkqIC24dl45rcHGa501dK8DAkUA7s6eGZwVV7BbYN/Faw9Ez8cVNb/L3hp8HHBXwpeGfQ51q5L5A1NRWCk4y+DZRrl7XuDUwHbldY/DfIwyvSugzoM9qXjvnVw0iKjkQv61TKyLiogKqwBnh3kPW3Cm2EIVwTXISo16sG+Obgsbhd8Y7D2DGUphnKPIM8Gk3ATNnEVn31J8NlBPX/tPvja4LaHG2IUNWGRz18P8ginADNzh4LsuExrSWkn/ok6c0H21OHymj8UzH9zU7B2r5xvCT4iONnQwzbEJaeenjfzh0GNf10FdddgVwNdFxnMQ4PLgGdZa2z43uAjg18QHAOBULGlvwnW7odPDG7LWAUwCVwtXa8JEsop4PODPD1Dz1pa0XdsmwA8KnjH4Bed5BcG1dntT/IOJz9L339x8BeC6tc9iFN5/w8EfyrIPk7gjFfebPbK4zebPePFt5g957ovnJ171W1mlx+/+f5nlx7fSp1uW1xyEplXBKVplVB5tfF7Sb0Fo5iXXb2MHupfBhcFz+MPgrV7m2b+quAiRiMA/epg7b68oG0MjwhfV15NrQvubhu8a2LeJ87sQXqtNSIoxGOROhIYJjTu8eNBQpNE5sagAO+JIdGll37q7NzDD5qdd80bZhccu2p26Ehwb292cO/w/v/3P9t7xeziw589O358o7NsfeJinP6q4P8J/t8BEgW9C0Wn1lw91+eNsPaMGnkYXx1cRUHIX1fPnyhtgrIMR2XOQ8ONxwcJY5lPnssy4qKRC7jmaUXGe7fgMpB2gfzy3mjoyO3fFAzhnhKspcWsGK9z2yB+/zvYFazV8NmAdUe8kFWCqLnndwTFdr4reALnXHurEJHXzy68/u2z5739+OySd30iL37niX8vvP747OCRq0Nkzp5d+jaLKTeCPnFRsXo5gaMxFHTkMnL5FMadglw8/Nrg+UGCU3PzSupBDwSXKQjXCrbV7o88Dh5Nilcs6jqKA/CO5POfBy8OyiPP5eOGMB9S2suycs9vCq4CXxEkVPn9UVzm4+72+kGAa+ngnS0roqsAYdGBlulL5EmYEWUD6wY7PYELr7v17NDRK2bPf/fx2fPecXx2wbXBY8dn58e/h/ZuCq/lxN/pM0JzwbGPzA4efu3s6Vcbgq4dfeIi6LTKNRCepae/c/DcoMBV7bmJvIBlgozfFuyaXk4zD2PjFfNAw5TPrwveN7hIRF9ZGVeX6eYdrnJRlWnd0jvSAfzXII9i3dAZWbaQPx95CIZ92wZh4b2X6Uu0NGDzAkgcDu79+eySEBbCkXhw76MhOK+aHbj6R8NTeUKIzI3x+U37wkNseDA8nANXv3x25hVWA68VfeJiaOP7dYByEplfDQ6JzJ8E53XTGQWvpBYP0TM/PLgJWPg07/COB/VvguXMjnE3z2iV42ZCVZs94+Kvu3dz/z8Pls+Wz68Jbhu8R8P9Mn1IgAVdVz0EGsYzY1hz8MjlHxMWnsmhIx+eHbz2qbOLjt15dvY1t92Pw5y1d8vZuXtfHN/fK0Tn+n1RITAXGSLtfWh26Or7n7zj2rAtcUkgAl6usxqxloZEC5TmGSKZ0uSd1O616ZjCvFAmtXiIMlqlJwmGdM8Klh4eV3+dQyPlXxuyEtQfDm4bvE3vYZXpQ3bFK151XYzDucfuGR7JR2YXvS2E5boQjKMfiKHOw3pjKc+9+u6zg0eP7nsu5x/lwcSwae9NswN/xdbWhm2LS4K3eQ2V+uIxluePWefgfZl/FawtDtRophAg7IMyF2/I0827++XgqocqvCDj+PJ5YiDrEheNoDblrO7/R5C3t22YUKi9YkFYrOzeDg684zNCSK6YXXjdR08MhY7cNDvvyEv2vZQhHDh6jxCW9+4LzEXhxZx/5P37M0hrxFTEBRizuXsuZy090iloPAS9ohmi2pDIEGA7Pc54KPMywCkGsY74EGjs5dBoXeLSJSxoNbGp222jy3MUA1tm9m95nHXl54TH8f79IQ6REFM592qB+WFY73Le4TeEMIWwCPIe/bsYHr1g9swr5xkRzIUpiQsIMj092OXBiL8MFYY0G7fXrn97cNN5mhfSV3oSxGVdQ7maDaxDXPSuvxvMn5NopepdgtsG+7OFRZk+w0Yxlo2uE/kkPDs8jUNH3rU/JMLz4/8XXjcuMHvG8U+ZPfeaB4agvO+E9xI8sPfOdXovNcNK3Ia4gBmEvkVvXkfvm4GZYp7mgfQZvuXpJpbrGqaYjVu3uFir4V2n/BmJhNNygCnACubaBMNVwTFe83qRxOV5ISwE4rwjR/c/G4szQ4gOHj4pTnG9/59m4gL2K+kKyFpI1BeIkuZyWJG4C56L2SJGbkFWor8XXYczBAvqSk/J36sUl28Ndr3TZRhsqGQrBbNHXXxd0HYG6wIP4PJgbW2RGMz2UXouh/beMTt0w/hZvee+5fazg0fe/TFxOXD4tPNcEn4gWFvrIZaiF+wK7kpz2VgSGfjUxWWTEH/6n8FyBfUqy0msqO+N7nnIJs32We/zwOCqQLgfHSyfx/6+OzgNEJeDR274uLiEUJxz1bh1YGe9+pazQ4cv3Y+1pIV1B/YuW+eM0ZTFRaF1xU6s4O0qVDGZrhWVPJpFF+WdihDHKb08PbdtMVYR+BZn6QrgLktvJIuPWP29LNiMoU/5DHa2toDn3CAu515z476wEIiDex+Znbf35NkZlw7PIgrc5l7Lob33zQ5dfff9WMyaMGVxkWkvaJXxB7Sq1AY9NbjOBtW1YZXPfNdwAhYT1hbrWRqwbPCSsHS9jLhK2kLSYrfh6dhuWE1dlgMbu3dwOluBerv53L2H769tMetzYkHc22YXXuMlx268+C23mJ13+KWzC0xhHz2xSvf8I++dnXPtWmdOpywuQJFrQxxu/MuCXS6deEHtOkMq09TLGOKpAl5LbRWzRrVsb23I2rdsvkb1Zbjz20EbXlk4OWa/lERejPe75gUb+rNgGWshslNYc/OJuOgtnxneyntmF7/DdPLxfZE5tPf6EBmnPXwyLr3y08Lbedn+u0X7K3r3F959KO7xyP1tGtaIqYsLI78sWEuf8XBX0NHQp2+f2ZcEN/HuzBQhvvCMoCBpWS5pkdgyRkdY7JRW3rskUXts0LAGvaMjuGy20MyMxX1ed/AqgO+9CyYgX7tXorfy5321Q0C0jO0pBy+drrXxLQTbJhw6cv8Qlg/tD3EIBqE5dK1tFl4zu2DvKbODh79xdvDq754duOaS/VcF0jDqxOpcs0Rv3F+Qt2ZMXVy4pN4C7tp6oGvthwbkTdWuGSfkSp8KAkOAXxC0R8sYWivU9UKn3nrMKuguKE/7CNfunWj4YYc+ojFv4yVA7KFvTxWziT8RHAsvmZZbKfh77S/2LYUDRx4QwhICY4gTokFgnn9DCMeRD4bIvDW8mWv3hcdn+6t5DYfiNwf3bpydd2QVcapBTF1cgIDU0miK8PuCXVO01sLYb7S8LifX22bQuww979C7WWNIWMzALNNbe7WiFiNL/Jmgd8mWBY9G7MyeObXn2J/nh4JD0HsbTpWzZd52XteixdXhvCMPDuH48P6eLcQDxWHSXi77q3HjM0MhwnLoyKtnh64RR9oIdkFcNJ7auhVu9e8Eu3oYoiMgPPTWtfUV3mva7urLxWEI+NfBWt7moS02lgFR4hnV7q3xEoNlvKIaeDFdw1+B3qHFeYbVpUDxrH4s2NVpTQsHr/mG2QVHz94XEnu7EJWcvxGey3mH3z87cO1DZucftsfSxrArnkvXOgkNYiiNXPCuYUDOPw7aoGrXRIa42P2vlqd5aDHbS4OLDBUJvGtr91X29WDjamBPGu8l1Z5t4V2fJ1azf4HlrpnIaeKCo58bAnKf2fnH7js7sPeJ9NnBY/kiQIJsbdPa2/YuiIuZnd8IlrMaOHZrAMY9RmCQyPxmcDrrG/rBs5tnVmWIYlHz7lMiCFsOLXDdwpJgqFVbp4JmFbtmBwlzaf+n6lqobwzastapGzqSte+VvAviouexT23tbWmGMHaZOiOvNYAuWvylNza0mjKUj+CozX/moS0cavlGAjvW+EzXWrRYireytux/U+DBdHUgVtnWPFKxmzKYy3MZa1O7AHEl+//mO/7N024Wxi6IC3Qtipu3kAiFvXzL+/TRzITA7/OCuxqXqYFn5oC42isWyIMZijsoj4cEy2vFLdx702AnZSfE47WFQhnvkTezSmX+eYFTsftVQPsoRZeA2lBtrdgVcemahVhEgY2nvzPY9WpBH604tW2AFaynCsSkzK7U8vuiYF8QVqzFuz7lkNUuc9uC/X9rs0g/HczjSTyu2gZl1v9Mf6ZoPGptnLe29i06d0VcLG+urbhdxr37hqDpylosZ4ga1IuDpsJPBZiC7hpS/Eiwy4OxIrZcNm92bpvL5h2eVqYJ7RmTiwZh/L1g+TuLNte+wGyDqLVxHbU37deKXREXC51WLS4J4g9Wf5b3HkMLtvTup8L7Sry5ctqe8Jqpq3kvhlVlrMX1Vv9uG445LYfR1kWxowTv1dQ2r/LawukgLrbyWCt2RVx4GbVhzCoDU3pv8YPasvghWlPxW8HdmsL8ZDw5WAuc/3ywFBi2UQ4/GK0l/NsG4Sg7IwHm5wfTuii/8XfpuVqrc6oPi9ST0zfWil0QF+71DwZrgcdViksCd9Hu7v8tWD5viAzTdbsKe6/UhkdWAJe9uend0nbsAzOFKXzi4HiUPG0o1pDsxQruM4Klt+bEz1NpKrrWxpWD5QNrxS6IiyDcrwRrRr8OcUnQs5lK9SJcrTfvot7cupxdRW1IQdjzMbqycbJk3jCVkWNZp/C+lul5x5+W76RpVLlNW/tResRejlyXTW0DtTa+znbzMeyCuOgJLf6pBV7znmidsKrRcSXzbCOg8U1nL5DxMPxRrnleDCnys6PYRTkkcs3mDwnrhnyUW2saKuUnDFjLU9q/35xK4mKRZROXDvS9mGe1oe83hS8LOl7C+Tq19JT8z8FFjnPdJgx/anEnnklaG8EuGGj+PTuaUiC0Zts8GR1FwumwQleHUOZxI53yLoiLNNRmingylulz0TcNaXposOu4z0QLsnZtYyrTzla0lofKaXQp0Fmzm430hnOglkZD6/xwOb8pRVLDW2TTqSmC7f16sIwrWa279k65VgGJUxEXBl1Lo7iAVaDbHHrwZJzrXKYt5y69p5RQK/N8+nJrrvYc6LJtr3Tkw7tyTQwBelpwervQzQ/1VIonD9QG92uPjU1dXAiH6eHa0awKbe1LmEfiR4O1gDOKV9SmNgUdeT/OJHYg/1lBB8JZSbptb6c2XJA/aVUnhj+7Ki7em0rDN0PWfxss7cv6pU0Ot9cFdrQ1z2zq4sII7G9aC+aK8m87fTm8xl47KdI430t1JQQcnxksr5nCVGiXXdj7Ro9urciuisuLgmmtC9TywrZ2zdssofN6ZLD0zHj8G4mNTV1cFFDthUW0cnRKgTdDBkOHMp08FytZS2MlLs8Klr+3C9q286XXru1Xa6yuN9xVcRF7EHPJg+zyWnuFwWxfLkK7BrHIch8kHZn9ozeSrymLCyPW+GprTAiOJffEZyqQ3q6XIaW3HMIlcSE++W+n4Ll0iYs3xPvEpTb82xbkoUwjL/K+wfztdrEHLzvWYi+7NtOXQzywzJP8255jI3HKKYuLWYuu7QAIjsY5JWh0NsouxQJrvTqjFsMoYzVTGO+r99rxq5cFpZsXVnpp/rY/ylSg566tc6m9omG9S9kQ2ZjArnrdNeh0vZRZ2pa/Nza7OlVx0WMIcpZTaGjx1i8EpyYuaW+TruBzKS56D2cf16Z8tz28qNmFxvZTQflkoM5/yr9nuOcEp9AYCaDAeOn1EpeaTfu9YVDZMfBEp2ZnQ1A/Tr7I84HE0/41G8vPVMWl5tIlMuJbB6eIrw/WhkZdguFdHt+Vv92251KbijbLkF5K5FV6NaKMh7GZKcTBpKF28gMh7xLuuwTLiQO2ZnOxXYMZsXKigLBuNIwwVXGxLV9t5kVP9N+DXfuLbBsOFCvfZ8EucalN6TKCbR934kCycuGiPOSzDHr7UhgJK8HcNjSictjGdn4t2Ndz/2SwNhTnsU0pvteHs4Nl+o0AvDO20RjSFMWl71AtBuI0vinCFK2KLce52CUuPivFiCF4UXNbi7gMeRynWg5JDUfzoDTvQHwo/41rXhjcZiCUeDw7WA6JlPPQu0/yXl6HXj9Z+4bWKwARLNOOlwc3jqmJS011c075PBlDmWPBWrq73uXgCdgSsvy9sucZbANiQbWZEzGJPJ5CQLwxXuvpyxmZTcKLibWguvfQhqZg5enHg+W1aO+XqdoeiLPUgvBoCLvxtE9FXGxjeV6wlo5EAbqpoxxKJDrVr7ZwSYU7laCMXWjMXivYtAfAWzKDVb7xrNcXkyghfaXnZTj7yuC2QARKr4s34q32seX5i8GaQB0MThGOVrHYtEwvPjq4FUxBXM4Mep2/loZEQ6Wpw5vSZaNEwiEW09VzcOPLxoAWrG0a4gq12S42UpvC1FgfFawNJazh2TSseC7TgU6knGdtB7t/c7B2L971lGASQedVS+tzglvDNsXFdPIFwdqzc+qJxsZZuOLbiFXYJKmWduSF9KUpTZuWwmTmYtP70WqcpVD42ybdfcO0rhMPdRybgmBsLQ34PcF5ArLsyNYatc4CnRowhdifDea7PBbHqWw1uL5pcTHPzoDHiAp6e/MOwbFgFIZYZgV4ErV3elYNLxvW0o4apuXmQ4LHe+kaUm1q20wLxmrPH/KgNNra2UWJhHfdYFdd5SfIuSi8kFq7Jzr9gehuC4L+XUfCsDtbtW4VfeIi4cvAUMBCOPtJIHdSYLP2rBr/U3CRIJTYQLqHI0C4557vJa5VwpS4HixPc0k9X9e6ihwaqGB17R5iGER2negTyIcFx8Qq/mOwdj26/7qgbLoOo+f1Lgsxi9q9UQDV2+ybhBXGfZuVGYYbqm4dfeJi7E0QeAFjKdPGeRYeeQGvdt8hOkb13wUXhV3NayImn4LGKa2ET4O+Z7BvXYkp17sFvZqvkbh2rOf1mOA8Qdn/EqzdB9flAXR5LDhvr/+zwdp9kMCveouMvrQbFliMuQoQmFpcLJFdqet1QkfrdAZrwGppQG3OepZJoE9cNk3pEHv4quAy6BKXGv3uT4IqjGBYH5ELJaOxlYJd/csZnSHyvBbBJcHa/VC65hGrPnxpUIOvPQcXjZc4hqR2P/ztoB33lwUvycxN7RnIY+U5rxKGQF2xJTR9rzNeZhhWA0EmKhcFa89NNOlhCcBkMAVxuSr4M0FbK64CtcPFN00H5y8KG/n0zZ4xsmWGSWZNxIH6nqGRLPOCm06idt9E9xczmMezEJeS7q435RNfHlxXI3NaANGtPTfRMJb3zjPmyS0Cyxbk1T2ch1V7Tk57NU/htYtPwLbExcrOnws+LmjxzyrhVL3aMzdBQb5lhnQJ9wh6w7r2jEQ9FUM3qzG0YM27QhaHGUYcCtbulyiGsIrhS9dq0ZwETgOSLtSgeCX/IcgDSp/jUM+N4mDrfjObOMtb7fWUGsXl8nyoM52pYZS8lvnEobpPtHmXspokBBtriV41jX/TFo7oTJl1wXYACpz7/ZZgLT2r5u8ECeUqtw+00pSHUnteTitPDd8sfuuic5Rq7zyVrJ2suAz+fdCQsvasLpq674tv1GjBm957kzBB0BdYHaJgf+1VkTEkbDpna1wmC1Okjw1S0nWRynMn51nEtCoYdxMz6VAZXUeULMI/CD4hSFTWeV6PtNeev0paUyOYvA6IoSn72nNXQVP1poy3AWt/eB99s22rpvVh28pvQw8MIfRwxsI5uaoCqbajNFvl3J7XBR3G9rwgdz3/vZjKXYObglcBuPw1Y1uW8mbItG6YbeNNHg7W0jEPzWSmIdQUYFhqEZ/81XbwW5Y6sicGeYINOwjT0V8R/Oqgg+/9++XBVU+fLgNepinp2hL9eeh6YrXu6dMaHAfD49MD/2Gwlr4a7QcrPmNLyn8dnCq8wySNhph908Z9tIBVrMZ9dIab7MgaTnP8cFBP9qSgqfSagZbkjWnQrnP9FKDRGPZJUx81sgcGdw32xbEkoZanPnpdYZnZuoaGleBrgzwBPWUXNc57BxsaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoatgGHUN096NC0ec4ZbmiYB6s6uG2SsHH2HYMOybJ7fU7HdPj3VsHTDU4ReGnwj4KTOxOmYedhc287Ar4s6LSKVZ66MBloRI6e0JBeE7QxdUkn5dlF3/GnPxA8HUBQnEHsmIsp7aPbcGrglsH/FUzbkJ6SHbizi9IJds7fubRCR5rqwVNBEJlTHcTF4W3O+xlzmHxDQ4LN3r8/+JXBvgPrHODmzCnH6n66D041OHXRbvDOQu6DM46cBqc3JzCOXz2VYxFNXBoWhXO6HNTmTKXTOl5HXAgLgRnTiBxXquCOBD/LB6comrg0LIo7B51fNJVzlbaGecVFIEqDM5Qqfy8o5dyWr9n/68TRCmI0PxT8zuDNgyWciviI4E8ECdePBB8WHAqiCkQ/NOjeDg1zrSM2Pe9OwTF4UNCzHQrmeifZpQPxzRaNERdnHT08KP2PDhoycon7xtC3DXqOA8fBGUk/GJSWL/DBCAjCu4f6APf03DwvykKgfgwc3aEsHV4mH+pBXXZBXapTdaWswJlE8uG5ZYDS4fDyp64c7uVff9eO9pUn95WfBL+TJnlL135XcAxuHXQvdSNv6kqdjZ2pcY5VaSful9eVNCc7cLYUuxFT8Xuf4UOCeRswGvi+4IOD7JmXI8gr72Pht/JVlvfdgtKjrOT5UUG/dW74xjCvuICCMzQqA50alDNwLw7K2CuCKU7j3OZcMDxLQfKCfO+o1Ted/D+eHawZj0pk9PkJhNcE35j9/XtBFZmMvoQ8e3Y6TNwhVPn1DgtTOcTlvcGucmEYfxZ0jfQ7GFxZ+tvB6U54rOHbgjcGzcZ9b3AvmJ6dxK0PxvGMRtqUqYYnz65/V/DKYCpXB49JZxfci6ikuNtfB684+X8UyHckawnPvS7oNxoMw03XeHZeZmzhPUHfOdv68iDPN/3e0Sd543Bt+u52QYegpb8djpZfqxyUYxfYgQkLv1Xmzm9K6TZZ0deQ2Q9RSaGAdwbZSTrjWYwyCbBzhtyPHfBa2JY8+5sd+dfv89iKDsF9lLnr2fbzT35GDGqdcYK0PSDoty8KmphJIHzu6Tu2Jc/apb+fE2R/G0ESFxwTVEoV7fjT8veM4lhQIfuN41FVrAO7qWduQIJYfvO7wUPB+wR5HE6YE0D2HSqo/Jxpz2AkKuw3g+5jLcoXBU3p/VbQdQqzy/tJZ/t69oVB3pPr9TKerdE6QtNzbgjWxEUv6h4ar3tIv0AesWAgySA1rNJIviko/cbkfvPioHLyt1Meh0AQ1IOydha3e7wqSND0gjxGvZl0pIbYdRBaul5ZPDeoN2f0zo42S+i7Pw3KWw49oIamrBz85XdOGJQP16prjcVzfffK4PlBQsXmvi6o3tWh7/Ihtu81THWoMbhew3RgmKURrj148jPfaVylLfICCIPviYmy4OnyYu4XVGeXBX3P460hndP9kqDff0vQueB+/4Ig+/A9T83z2CE7IHjsRtp5bDwfnwvw5h3ebYLyqXyTF+s+7invyq8LvnMdIc+FJdmlo4il2blW8qwsTM74vXvrkNYeD1KRPJEPBhm2hHxeQT2DxChUCX95sJYw93p30G9UfC1S7jrupd/IbBecDug3etTcQ6LwGsT99/+qg/C5Tq+bV5D/Ezn3faEPOsA4ktLLTy4u8nSvoO9eHewSMN6CaWzlWnpQjPsDQfdwFvW8kAYGndJIUEu3OMHQRY/rdww8CTXBSw1fQ+kCAfCbs4J5nROX3MMx61EieSDSyY66wOPNy4gdpTTjrwW7kHp6h93nIq6uU0Pq8gbVneUXridaCe6TbF3ZdkH5+f6pQVPLCUSG98L++lATFyKp7ejsvzlY2k6C9BptEBHXqNfck8k75BzS5DfO7O6698qgIqnsTUFrXfRWejHUE6HMSxDKdM1NBvfyvQr9fB9UwCjdh+oPZY7yEgluc5+Kl/Bb6fCcXJjSs+W1qzEmeCb3txwWETeehs+7yiHhl4J+R2hywycuhIfxL9J7JHHhesvL0DocHp3nWU6QjFjDSmUxlAY9vOtzIVWWbwi6/o99UEESF41gHiSbVD4X+KAHyoIH5znSBOpfB8bGdFJ9EB/0LMNwMRBQx+4nz/4/L74+yHP92WBf2dbEBXiJ8m5oU7NTtuQsaR1UGhISGMMfZc1B6AOPSvswPFrE/kYjr0jDGALDDcxJCQWneCwM+szgtwZLzySJC0+oNpNETMQhPM89hhq433fFd/ogXa5T+LkwCIKqzN8Plm50iSRQZSzK/4mO78aAuJTp4HW5r8aZGsQ8kD/DLSIu5pO7xTUoZ+Uh3SkdxJ9XZhgzBOVmaGEoloxRusXIeGZ6zBqkK8WCBEE1ujFIdoRDnYqGpjdmU4LJeuwknGNFLQ1vUtmIt7ETHsQ2xMUznQGubE0YlNC21D37SelTZn5vGDwGyuutwUXsbzTyihzyJLh+grUqgkdx+2AO91JRVwVrwwUNWmxAxsZkKqWtbOBghoVHYIwpvqCnQu6sKUCFn3sd8iY2oNLHHGquAv3W8/Nnpzy6P4/A87roe2WFuTiKuXCbzSAMlXkNxEVDF4jmOpciX0JelIVylH6wFsP1enZlWEt/oliUPBiqpOvVn+CqsijrJgeB0Wm53m/VjSCqQKu01zqYvN7T8/qggWmkfxPkfbAz+WWjgvO1PCX6PtVRsllDQHm1yG0RLCsuIFajUzJszgXW/dixshSqSHVvaKmzUAbqq5bXxC67XDnyiuwzkhy8Do3Lv3nGXU84uNG13lQB6mkVaD5G7UItbRqjwBzV5W1xyQUEc3q+7zwnXcfoxAVUgBcSh6DxiLTr8fMKkCb34DJ7TvnsnDwkw0yB1rw8BJC58l09/hAYFEEQFC4DrTXk4pI8Sp5nqivprKU/MeXD0CF5fElc3Hdo6bopW3EwXgzXXaNPxi2ILS055rVJ4qKxmZFhV9Iob2zAULCWp8S8jtyHfUkrcUhewbxYhbh4tvzwNnP7097YXpk+MS126XOTDLW8JnbZ5cqxiLikIUOpfElcNPhaolMD9xtj3a6gU4Lfe46hWHqOfxU4w+lapMRAiEIpSjwdPRJlH/IYpD81yLxclBf3Ux6GPIYuWF+zrLiYPpaGJwTzeE4NDFd5SHfKC9f/+iBvbxHMIy451J9pVsNsQ/AkMncJpvJMNokpDtIHExHKQixMWcive6q7eUEM2JUpffbSJw5dWIW4yMfjgurNrBV7RUM/QmrmLO/Y1YG60HlPBouIS2q884oLEBVej/jNEETdpYsRp8IXr1DxZ+z/VUdKX5knbq9e8y/3/+qHIR+3tLxH7gUsqvqrEBcBXcFUwjskLqmOlXvKi3pTf4x7SORrWFRcSpwTlAezd6knll71J71pQWYfBH3Vh0A58FzM5MkzG5oX4lHSxHNdpAO5d9Cw9/HBvk6sT1yAsOpE1VNKhzJhw6Xnr8z81vdD9rAxLCIuFrfJRBmQHCMuKj4tGrOiswvG4mkRnrUjqXANB8QKrB3oAjdbL81A8zypwDTDMbRYLS3S03jye6jwXw36zrR2H+ShFlNYlbgkwzNM7ENay2KGITVg9SP+pRENlYXl7CXGiAsjrwUkc8iLexBytgj+ZUfSzI1PQ7EarD3xO400tzkzeT43BKg13Bw8n7xBep5pdmUztApYZ1fen1doiGItTl9DHxIXAmLoony0ATEqv7deqByySbP4jDzzbvpQi4euBUlcsE9lwdj5e4IygKaycmUfIy4KOwWUjB01jNL1VWFU32/MVOUN1NSbzwWu8rUJCWajUqNTwbkwSCvh8R1aXZl/D9aCGHL4nkAZRpW/0dObRfMbv009Zg6GIJ5gOrrsZVYhLgxI/pS1dFhsWK4lsdjM73yvkZUeioWDeljfC7KWC/jUFeHh6THuvKGMERfekVkP9xaAL+H7ZAsWQ6ZyYpO8U5/jzwfLILy0aPiGCH7zK8HcjvzfcgrfPSkoiF5C0FT5aNy5B658xcV0Qq5nJ/n3YHGaiQS/KVcImwp2nQ44v0755nUwJC6gTFKMSlmzya625d46DL9lDzyoEhZZPitohq3W8a0UGo7EoOlCRlSjFX4p6s9zsJK1FAUFqWFT/b7ewjiUylrI436i80SLIUtDSk9tIR7FTkZjjM1wXef6tDgvLYzS85RGwSifHfTKgN/oGeSvfLZ4gKXqKrbWeIx30wpRZGjugWaBfCY25D65dwcqmFdFZBaBMuHBSZ/VtGlFszVJqTx8n4zShkS1POhMzDy8Nuh3Vtyq51SeyXsj5Mos7y31fmn1b1dQWSNIdaFhKN9URuIZaeZRGeUdG3HR6JSf4RIR9Tv1m67/5ZOf6czkvyu2kVZsI08zXS/ukz5nR6W9shONML2SIq3JTiye4+n7XJC6bOz+Nuz3/ZOD6RrB7FyIdAZs1DNKG0ngkeSxKZ1tnyd3u2Ca/sdU5uozzfpxJGp2uXIoVA9iBIYMeqmc3lPxr/dBLIn3W9OgNUisFYPG0WVvXQPPR8V6XcDsj+ESAzccOhDsA6O7LMjwGbl3l+RBpF86eBZc6q4CTM/WsNKz5VUPb/k68ZAPgtrnRlroJ73S7R5EixExLr1DDXpxAjm0CK8LSVzMJiTRINbKQzkoDwuw5F/DG6oLHYwAq/p1nev/Nqg8GXMt7sHArY5VPmkGqgavExA95cqOlI9yenNQei3/zwOTkLxpguQ5GjW7+4ugDsk9BC6J5tDQFHRe0ul617qHtKg3AtIHdaSuzDopk7xs5b/s/BLYjDL1HPl1jTxY3Z2g3NmJ4VM5zMlBvD0Py86yC9KmzAmX5+uIlJn2aQX6RqBwNEAVWqMC6DOeHO6lUCl3V6F3wbhe8I2rOA8MjRg/Fz+HdEj3UDp8b6bCs8veXT7cZ0xeuMLucdfgUGPWyyrzoWFoF6QniYueKodyqJXHWHgvifgNvU0tDTqmseUDbEk8Qjn1vf3N7lIc0P8TPO8eQffoa4xdUOaudQ9pmRfKRNl6v2gseCfyW7tGuSk/+RoqQ7/DecGz9Xw2Xop4Q8MnoU9cTgXk4rKICDQ0NCyIJi4NDQ1rAXERNBYULl/BOBVAUFJAcmyMoaGhYQUgLmaczIR0TQPvMsQgBGsFH7sC8g0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NOw+vKtjBDxfZ/6WhYXJg1N7X8QKZdyRq9B2jPxVXq/bBXiny7l0gWwB470V5OB8n3x5hFcgXtnlfpaFh52EpeNqzY4j2srDFYG1zo1XBAjZbTXg50f+3AatW7TtjW4KUd5st5WXhjWyivOjLkSW8NOetYG/Y1vbRaWjYOeTi4pXztHIz0WvltoPwarvtBvzOOylEZh0gLHZ203jL/Ww2AWLhZET5tG2BjYbsSWObiGcGCayysBlV1140i4AnZP8ZW1Ws2itqaNgK8pfYhl4515A0rrRret+pjIvCq/52A7PLWLlJ0LpBWOy0RzTsGdO3NN4ua/YPaS/+NUwGGozdstA7HkOwVR43vXS/7xC0rd+y4/NcXMbuK5PO5CEA4hB9QwN7XNhrQ/yi65RIcA/5VC6GIO7t/wTNXi6+6wt02vDHxkmuWVSU5N9QyPNXJRr2lrH3i7T1ndRnCCiPODQcVFbuaf+ToXS6l3wpx/y+6R5saMzxKTXYm2ZeG0zlIe1sr2EFYPR2yXpG0A5g3ri1taFAYd/GQfbpdDykTXHEIcQ7bAdg5y2uu93GvGQ3tPlQF3JxmadBpQPz7YFb2xZQegRCHf+Qtrx8fdD2ixpaCcFiu9zZOSwdbWKIZqtLu945ubAUY2XiYC3bDNr1jsdhiOfsY4HYeTYdAmVB1JTHsvufang2EHJ8hd3VUn5sml7LvzK0MbSd9rvE0UZf8vvYoDOV5Fe58CC76t/Q0sFsjpxJHZVYkXtIlz1qbdvYd48c6kkabGNpmOx6u8jZq7mWr4RUVz8Z5PnyTm1tyQNc1HYbAmYY9IYajW0jCQOqHAbi89oGy3oaGxwb39uN33Effp/u4XpBQA2XWPEi5sWi4qIBeD4jIZypV9QjOpxdY3K2jLhFSqt/eTzy6zc5CIHYjrzZ9xTzsrIRdT5sS0M0ebeNZv4MJ1L63LMZ/NipXWWhHOTJjNCisBubZ0uD+snT5iwjZWND69zj82w24tm1etCppE3Ly3sSeHZRq3/1ZJNxHpkd4mzPyFbStf5N5UWYdYBdnhNR0pn5rWvyNBAMdUY8y/12iUraH7pMu43Cu+y/oQeMmrDwVMwC2DNWZas8FF94elDProEr4Lwh+I1dxhmPHs3vnOTGENM9xAXSRtaMY979RxYVF3DshGe+IJi2niQAPBTGkw69SmmVNzEN5yIzcLMiPk/wvZ41pYeA+Cwxh4Zkd3yCZIjo+/Qcww+bmCsT5+uMGX4C7yFtxk0cNMahLTVzSANRsqk1kXAyXxqOpPwL2GqYhCQfJiVhqw3JDFuS90Nk83sqXzaS7kkc8rJib/budRKEf+XrF4NsL91DmSsn+Zb28vnuR9xs5E1A7JVriJuuRx62OidyvJQEeeRlSbu6KtPOA5Z2eS/T3tADFajxqdg+14+rmdzxPIioAhy74HoV76gHn5XQKLi2XNQxB9DnWEZcCAmRkEf3AemTnj4jcayEZ9o8utyrVf5TevoCzHp96c17/xy+S0dFpLSNgWfaaDkde2EXfA2Ld0bEyl45h7xoYK5z7ElXPWhwNtXW0BK66sHznAiod+/baNq91AVxyG2IuJjxkybiY6hWAwG2mTpbY2d5/alPAW73GEqDoV+K4Ui7YTFhcaZTl1CnDqVMe0MHVI61EgqtdkxIDkboNyrfuT+pYnNxMTTqa2wMsmacQ1hGXAQKXdvlynfBVKuGULtumfSUEAsgfPNuSq4xOR3BcIvHoFEhj0usgtDUPESfSTfXv6+uoOwkuvKdBJz3OjQ1b6pcfvOjW4mLJQbEkufSJQxAHFxvqj1v5MqPbRrmDgl1ni/2Ie2GgkMdnriioVt5tlNDBQpWZTCWMdF4Fcu4FHCqQBXF5eWOpvNsu5B6/Hkb+jKNWW/X90wicscgry1nikHVnrlIehi/Bp8/wzhfgFTZiYHMC2VP5Hkt1vs4OoLYpEPOxIPyuIy8OhyMCAgmz4uufBti8MB4Dp5nKNlFw2oxDEPo5CUQF3ES9zZ50IdkQ+ompUE5OJiOXYr59XluJaSdNyJIrz5qaU50wJyyM8kxj+d9WoK4MBQc6sUgVazhUV6xjhUVBB064GtRkVhGXExBMnyxoDyPSVQshDMG12umIG2iBqrhl8+cJz1mZMxyWOjmfuUzPFdPvIi45CAyhF2+xIxSsFb6TbGrJ/VHfPTU85YjdOXbtL8y9ryxFN9jf0BceHB5p9WFlIZcXHhLzmzS8OfNlzjMvGnn5Qyl87SHAiIUjCV3MbuQxMUQyBgUcnEpj9ss0WWcQ1j0OhBXcN3PBTW8BJtbyzvRMUTQc5npSDRzoOEz+PKZY9KjsWvUysVQRaN2wFj+DGN/Qxri4r2oVYLHlk4z5FHwEjRCh4FpTGMDyDm68k1c5AEFsB3C1Ue/4WmlNOTiMlS/tTTIlyUCPKI8RjQGwgLSTYTHpJ1omwEc015OayggxqayBGyHwLXX62ksqdfJxaV2Fm+OTYuL4KbreCZJDIErzJDl3f+JDldaz5+YhoC1Z45Jj7IlWgKFgo8W6pXP0OCfFtQoFhmmDEGepZGISo+6sr5GQ9Jjp7jZWHTlO8VBzDwRCuU5xHzokotLXk811NKgLB1TKl/WtswDaXedGU5xrFpaS84z7DptwbicIyse4TzbIYipqFQL5JJhTlVcGE068d8aCoaT8B1Brq24Shf0hl3PHJMev1GuftM35BQkZNxjxUV5jy0DgiadBC5dI9bjb/XVFzitoSvfOhqf47yBaVhWXMB1PGrxpqEhPjFKkHZDLJ3moquAGzqgIox/VUzXFCBw8fWAFiIlrwU2LS5DDUJ6LHYzrUhYTLuWRmO1sEC2Wa8uCN4xOs8t0yo9yqsvPX6jEbtHl7HfKej+ynVszEVerPQVOM0bSQ0ClNLJ3U9p4MEI9Cob63CUVw1iRQ8J5u5/V/0R7rSOiWfUJzDWnpixyr2mVYiLezjnWxqsxO06tpRt/FhQGuTddYanrtPB9r3+4Brpn9fjO60hViIYpsIsylKAOcUDjNNF1fX6OTYlLnoWDVWDKdOX6Ozhhwf9VryEsNTeKWHAvAWeBUFlUIxRI2FAPBrT6gzO78q0anDG3tZ1EAXP9hzXGl4yPr+xutM9LP33uft7jsZnhsciOsMJjWqsuAhCW/BFNAwFDP3KckCLvZSDzoCI5SKinAzZDBcfESyvVcaGavKer0rtqz+eYgoiW7Ni1XF+T2Vj7ZD8WtKQe5KrEBf5U4/qXN3zsuUzT4MyTwv9nhBMAkSwU9odTM+7y6+TdpMV0scbntfjO+1BNFKwL81ioP/7TKVYz1JCpTJQRjM0W8QYVKx7DhlRDtcxJpWf0lUj8SFyXGM9KYOvgVE9Nch70Ug1NAuprE5muP5+YdDzyngNyLNGzpDlBwkvsUljd78Rz+E1aOSE7OzgE4M8Rb8nPo8OGqKNfS2CcOkMBIhd574p/57vX+WrIQhWdwXZpU36pSOvb1SO7i0elDekofrTuN8Y1FGlGbhE1/mc16TB5mJHXKzq5cF11VnCUBrkS7kSRr/L0+D+6lywvnyOtAvY9qVdeekk8rQ3jIRe4VlBjVNhov9rdHkvkUNBc58tajJr0AeuuWXUGkY+tBqC61S8QHJKV8lkNIKnZiGG1iEIyunRrXQlSBq8Xt6UMeFQFkRGervSau0Dg0vP93vvtuTG5z4WjilHHofnyMdTgr7Tm5vNmXcqWqO/X1AQtSwLwnBWcKiMldPjg9KVX2/YpbGVgcsx9SdIzdN9XTC/p3w/JlibpUrDKqKgTPowJg3u98ggcc3TYIGe4V6XbUg7z53Q5dfpdHUCRLBhCTAolZNThLwPrmHsQzEAjc7vcB71T9eV6Sq5yMImBsVoDGMYfr7CdExaXZ+e77c1pDJ1f8/x/1RW/nXdouN46U3PT3S/Uhi64Ll+n1/fVY7z1F+Zrr5rfO73Y+47Ng3pd3ka8rrtwzxpb2hoaGhoaGhoaGhoaGhoaGhoaGhoaJgaZrO/B7ndQ74kGmwTAAAAAElFTkSuQmCC'
    doc.addImage(img,'PNG', 10, 10, 130, 70)
    doc.save("a4.pdf");

}







// function Convert_HTML_To_PDF() {
//     var elementHTML = document.querySelector('.signature');
  
//     html2canvas(elementHTML, {
//       useCORS: true,
//       onrendered: function(canvas) {
//         var pdf = new jsPDF('p', 'pt', 'letter');
  
//         var pageHeight = 980;
//         var pageWidth = 900;
//         for (var i = 0; i <= elementHTML.clientHeight / pageHeight; i++) {
//           var srcImg = canvas;
//           var sX = 0;
//           var sY = pageHeight * i; // start 1 pageHeight down for every new page
//           var sWidth = pageWidth;
//           var sHeight = pageHeight;
//           var dX = 0;
//           var dY = 0;
//           var dWidth = pageWidth;
//           var dHeight = pageHeight;
  
//           window.onePageCanvas = document.createElement("canvas");
//           onePageCanvas.setAttribute('width', pageWidth);
//           onePageCanvas.setAttribute('height', pageHeight);
//           var ctx = onePageCanvas.getContext('2d');
//           ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
  
//           var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
//           var width = onePageCanvas.width;
//           var height = onePageCanvas.clientHeight;
  
//           if (i > 0) // if we're on anything other than the first page, add another page
//             pdf.addPage(612, 864); // 8.5" x 12" in pts (inches*72)
  
//           pdf.setPage(i + 1); // now we declare that we're working on that page
//           pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width * .62), (height * .62)); // add content to the page
//         }
              
//         // Save the PDF
//         pdf.save('document.pdf');
//       }
//     });
//   }