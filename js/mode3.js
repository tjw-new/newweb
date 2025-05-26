$('input[name="currency"]').change(function(){
            if($(this).parent().text().trim() === "美元") {
                $('.tier-price').eq(0).html('$1,200 <span>/年</span>');
                $('.tier-price').eq(1).html('$3,800 <span>/年</span>');
            } else {
                $('.tier-price').eq(0).html('¥8,800 <span>/年</span>');
                $('.tier-price').eq(1).html('¥28,000 <span>/年</span>');
            }
        });