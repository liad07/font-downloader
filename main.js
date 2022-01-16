function myFunction() {
    var company = document.getElementById("company").value;
    var font = document.getElementById("font").value;
    var wfont = document.getElementById("wfont").value;

    // document.getElementById("demo").innerHTML = x;
    if (company == "aaa") {
        var aaa;
        document.writeln("its your ")
        aaa="https://alefalefalef.co.il/wp-content/fonts/"+font+"/"+font+"-"+wfont+"-aaa.woff2"
        let text = "link";
        let result = text.link(aaa);
        document.writeln("<br><h1>you pick alefalefalef</h1>")
        document.writeln(result)

    }
    if (company == "fm") {
        var fm;
        document.writeln("its your ")

        fm="https://fontimonim.co.il/wp-content/fonts/"+font+"/"+font+"-"+wfont+"-fm.woff2"
        let text = "link";
        let result = text.link(fm);
        document.writeln("<br><h1>you pick fontimonim</h1>")
        document.writeln(result)

    }
}
