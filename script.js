/*
* file: script.js
* Author: Jinpa Tsering
* Date: 6/17/2022
*/
const books = ["ULYSSES", "by James Joyce", "THE GREAT GATSBY", "by F. Scott Fitzgerald", "A PORTRAIT OF THE ARTIST AS A YOUNG MAN", "by James Joyce", "LOLITA", "by Vladimir Nabokov", "BRAVE NEW WORLD", "by Aldous Huxley", "THE SOUND AND THE FURY", "by William Faulkner", "CATCH-22", "by Joseph Heller", "DARKNESS AT NOON", "by Arthur Koestler", "SONS AND LOVERS", "by D.H. Lawrence", "THE GRAPES OF WRATH", "by John Steinbeck", "UNDER THE VOLCANO", "by Malcolm Lowry", "THE WAY OF ALL FLESH", "by Samuel Butler", "1984", "by George Orwell", "I, CLAUDIUS", "by Robert Graves", "TO THE LIGHTHOUSE", "by Virginia Woolf", "AN AMERICAN TRAGEDY", "by Theodore Dreiser", "THE HEART IS A LONELY HUNTER", "by Carson McCullers", "SLAUGHTERHOUSE-FIVE", "by Kurt Vonnegut", "INVISIBLE MAN", "by Ralph Ellison", "NATIVE SON", "by Richard Wright", "HENDERSON THE RAIN KING", "by Saul Bellow", "APPOINTMENT IN SAMARRA", "by John O’Hara", "U.S.A.(trilogy)", "by John Dos Passos", "WINESBURG, OHIO", "by Sherwood Anderson", "A PASSAGE TO INDIA", "by E.M. Forster", "THE WINGS OF THE DOVE", "by Henry James", "THE AMBASSADORS", "by Henry James", "TENDER IS THE NIGHT", "by F. Scott Fitzgerald", "THE STUDS LONIGAN TRILOGY", "by James T. Farrell", "THE GOOD SOLDIER", "by Ford Madox Ford", "ANIMAL FARM", "by George Orwell", "THE GOLDEN BOWL", "by Henry James", "SISTER CARRIE", "by Theodore Dreiser", "A HANDFUL OF DUST", "by Evelyn Waugh", "AS I LAY DYING", "by William Faulkner", "ALL THE KING’S MEN", "by Robert Penn Warren", "THE BRIDGE OF SAN LUIS REY", "by Thornton Wilder", "HOWARDS END", "by E.M. Forster", "GO TELL IT ON THE MOUNTAIN", "by James Baldwin", "THE HEART OF THE MATTER", "by Graham Greene", "LORD OF THE FLIES", "by William Golding", "DELIVERANCE", "by James Dickey", "A DANCE TO THE MUSIC OF TIME (series)", "by Anthony Powell", "POINT COUNTER POINT", "by Aldous Huxley", "THE SUN ALSO RISES", "by Ernest Hemingway", "THE SECRET AGENT", "by Joseph Conrad", "NOSTROMO", "by Joseph Conrad", "THE RAINBOW", "by D.H. Lawrence", "WOMEN IN LOVE", "by D.H. Lawrence", "TROPIC OF CANCER", "by Henry Miller", "THE NAKED AND THE DEAD", "by Norman Mailer", "PORTNOY’S COMPLAINT", "by Philip Roth", "PALE FIRE", "by Vladimir Nabokov", "LIGHT IN AUGUST", "by William Faulkner", "ON THE ROAD", "by Jack Kerouac", "THE MALTESE FALCON", "by Dashiell Hammett", "PARADE’S END", "by Ford Madox Ford", "THE AGE OF INNOCENCE", "by Edith Wharton", "ZULEIKA DOBSON", "by Max Beerbohm", "THE MOVIEGOER", "by Walker Percy", "DEATH COMES FOR THE ARCHBISHOP", "by Willa Cather", "FROM HERE TO ETERNITY", "by James Jones", "THE WAPSHOT CHRONICLES", "by John Cheever", "THE CATCHER IN THE RYE", "by J.D. Salinger", "A CLOCKWORK ORANGE", "by Anthony Burgess", "OF HUMAN BONDAGE", "by W. Somerset Maugham", "HEART OF DARKNESS", "by Joseph Conrad", "MAIN STREET", "by Sinclair Lewis", "THE HOUSE OF MIRTH", "by Edith Wharton", "THE ALEXANDRIA QUARTET", "by Lawrence Durrell", "A HIGH WIND IN JAMAICA", "by Richard Hughes", "A HOUSE FOR MR BISWAS", "by V.S. Naipaul", "THE DAY OF THE LOCUST", "by Nathanael West", "A FAREWELL TO ARMS", "by Ernest Hemingway", "SCOOP", "by Evelyn Waugh", "THE PRIME OF MISS JEAN BRODIE", "by Muriel Spark", "FINNEGANS WAKE", "by James Joyce", "KIM", "by Rudyard Kipling", "A ROOM WITH A VIEW", "by E.M. Forster", "BRIDESHEAD REVISITED", "by Evelyn Waugh", "THE ADVENTURES OF AUGIE MARCH", "by Saul Bellow", "ANGLE OF REPOSE", "by Wallace Stegner", "A BEND IN THE RIVER", "by V.S. Naipaul", "THE DEATH OF THE HEART", "by Elizabeth Bowen", "LORD JIM", "by Joseph Conrad", "RAGTIME", "by E.L. Doctorow", "THE OLD WIVES’ TALE", "by Arnold Bennett", "THE CALL OF THE WILD", "by Jack London", "LOVING", "by Henry Green", "MIDNIGHT’S CHILDREN", "by Salman Rushdie", "TOBACCO ROAD", "by Erskine Caldwell", "IRONWEED", "by William Kennedy", "THE MAGUS", "by John Fowles", "WIDE SARGASSO SEA", "by Jean Rhys", "UNDER THE NET", "by Iris Murdoch", "SOPHIE’S CHOICE", "by William Styron", "THE SHELTERING SKY", "by Paul Bowles", "THE POSTMAN ALWAYS RINGS TWICE", "by James M. Cain", "THE GINGER MAN", "by J.P. Donleavy", "THE MAGNIFICENT AMBERSONS", "by Booth Tarkington"];

$(document).ready(function(){
    for(var i = 0 ; i < books.length/2; i+=2){
        var book = $("<li class=\"ui-state-default\"></li>").text(books[i] +" "+ books[i+1]);
        $(book).prepend('<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"></span>');
        $('#sortable').append(book);        
    }
});

$( "#sort" ).click(function() {
    var items = $('#sortable > li').get();
    items.sort(function(a,b){
    var keyA = $(a).text();
    var keyB = $(b).text();

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
    });
    var ul = $('#sortable');
    $.each(items, function(i, li){
    ul.append(li); /* This removes li from the old spot and moves it */
    });
});

$( "#sortDes" ).click(function() {
    var items = $('#sortable > li').get();
    items.sort(function(a,b){
    var keyA = $(a).text();
    var keyB = $(b).text();

    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
    });
    var ul = $('#sortable');
    $.each(items, function(i, li){
    ul.append(li); /* This removes li from the old spot and moves it */
    });
});

$("#search-field").on('change keydown paste input', function(event){    
    var inputText = $("#search-field").val().toLowerCase();
    //console.log(inputText);
    if(inputText.length == 0) {
        $('#result').hide();        
        $("li").each(function() {
            $(this).css("display", "none");
            return;
        });
    }
    var total = 0;
    $("li").each(function(){
        if($(this).text().toLowerCase().indexOf(inputText) >= 0){
            $(this).show();
            total++;
        } else {
            $(this).hide();
        }
    });
    if(total != 50 && inputText != ' ') {
        $('#result').text("Total results: "+total);
        $('#result').show();        
    }
});

