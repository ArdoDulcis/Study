function hide_numbers(s)
{
    return s.replace(/\d(?=\d{4})/g, "*");
}
console.log("result : " + hide_numbers('0103333444'));