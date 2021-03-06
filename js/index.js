// Most Active - Stock Market Most Actives Companies*******************************************//
document.getElementById("btnMostActive").addEventListener("click", () => {
    getRequest(
        'https://financialmodelingprep.com/api/v3/stock/actives',
        drawOutput);

    function drawOutput(responseText) {
        let resp = Object.values(JSON.parse(responseText).mostActiveStock);
        let $table = document.createElement("table");
        $table.className += " table";
        var elements = document.querySelectorAll('.stock-name')[0];
        let $head = document.createElement("thead");
        let $body = document.createElement("tbody");
        let $lineHader = document.createElement("tr");
        for (let i = 0; i < resp.length; i++) {
            let financial = resp[i];
            let $line = document.createElement("tr");
            for (var key in financial) {
                if (i === 0 && financial.hasOwnProperty(key)) {
                    let $ele = document.createElement("th");
                    $ele.textContent = key;
                    $lineHader.appendChild($ele);
                }
            }
            $head.appendChild($lineHader);
            $table.appendChild($head);
            for (var key2 in financial) {
                if (financial.hasOwnProperty(key2)) {
                    let $eletd = document.createElement("td");
                    $eletd.textContent = financial[key2];
                    $line.appendChild($eletd);
                }
            }
            $body.appendChild($line)
            $table.appendChild($body);
        }
        document.body.appendChild($table);
    }

    function getRequest(url, success) {
        var req = false;
        try {
            req = new XMLHttpRequest();
        } catch (e) {
            try {
                req = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    req = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                    return false;
                }
            }
        }
        if (!req) return false;
        if (typeof success != 'function') success = function() {};
        req.onreadystatechange = function() {
            if (req.readyState == 4) {
                if (req.status === 200) {
                    success(req.responseText)
                }
            }
        }
        req.open("GET", url, true);
        req.send(null);
        return req;
    }
});

// Most Gainers - Stock Market Most Gainer Companies API integration with JAVASCRIPT.****************************************//
document.getElementById("btnMostGainers").addEventListener("click", () => {
    getRequest(
        'https://financialmodelingprep.com/api/v3/stock/gainers',
        drawOutput);

    function drawOutput(responseText) {
        let resp = Object.values(JSON.parse(responseText).mostGainerStock);
        let $table = document.createElement("table");
        $table.className += " table";
        var elements = document.querySelectorAll('.stock-name')[0];
        let $head = document.createElement("thead");
        let $body = document.createElement("tbody");
        let $lineHader = document.createElement("tr");

        for (let i = 0; i < resp.length; i++) {
            let financial = resp[i];
            let $line = document.createElement("tr");
            for (var key in financial) {
                if (i === 0 && financial.hasOwnProperty(key)) {
                    let $ele = document.createElement("th");
                    $ele.textContent = key;
                    $lineHader.appendChild($ele);
                }
            }
            $head.appendChild($lineHader);
            $table.appendChild($head);
            for (var key2 in financial) {
                if (financial.hasOwnProperty(key2)) {
                    let $eletd = document.createElement("td");
                    $eletd.textContent = financial[key2];
                    $line.appendChild($eletd);
                }
            }
            $body.appendChild($line)
            $table.appendChild($body);
        }
        document.body.appendChild($table);
    }

    function getRequest(url, success) {
        var req = false;
        try {
            req = new XMLHttpRequest();
        } catch (e) {
            try {
                req = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    req = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                    return false;
                }
            }
        }
        if (!req) return false;
        if (typeof success != 'function') success = function() {};
        req.onreadystatechange = function() {
            if (req.readyState == 4) {
                if (req.status === 200) {
                    success(req.responseText)
                }
            }
        }
        req.open("GET", url, true);
        req.send(null);
        return req;
    }
});


// Stock Market Sector Performance **************************************************************************************//


document.getElementById("btnSectors").addEventListener("click", () => {
    getRequest(
        'https://financialmodelingprep.com/api/v3/stock/sectors-performance',
        drawOutput);

    function drawOutput(responseText) {

        let resp = Object.values(JSON.parse(responseText).sectorPerformance);
        let $table = document.createElement("table");
        $table.className += " table";
        var elements = document.querySelectorAll('.stock-name')[0];
        let $head = document.createElement("thead");
        let $body = document.createElement("tbody");
        let $lineHader = document.createElement("tr");
        for (let i = 0; i < resp.length; i++) {
            let financial = resp[i];
            let $line = document.createElement("tr");

            for (var key in financial) {
                if (i === 0 && financial.hasOwnProperty(key)) {
                    let $ele = document.createElement("th");
                    $ele.textContent = key;
                    $lineHader.appendChild($ele);
                }
            }

            $head.appendChild($lineHader);
            $table.appendChild($head);
            for (var key2 in financial) {
                if (financial.hasOwnProperty(key2)) {
                    let $eletd = document.createElement("td");
                    $eletd.textContent = financial[key2];
                    $line.appendChild($eletd);
                }
            }
            $body.appendChild($line)
            $table.appendChild($body);
        }

        document.body.appendChild($table);
    }

    function getRequest(url, success) {
        var req = false;
        try {
            req = new XMLHttpRequest();
        } catch (e) {
            try {
                req = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    req = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                    return false;
                }
            }
        }
        if (!req) return false;
        if (typeof success != 'function') success = function() {};
        req.onreadystatechange = function() {
            if (req.readyState == 4) {
                if (req.status === 200) {
                    success(req.responseText)
                }
            }
        }
        req.open("GET", url, true);
        req.send(null);
        return req;
    }
});