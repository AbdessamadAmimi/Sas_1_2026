function validerNotes(notes){
    let toutesValides = false;
    let aUneNoteParfaite = false;
    if(notes.every((n) => n >= 10)){
        toutesValides = true;
    }
    if(notes.some((n) => n === 20)){
        aUneNoteParfaite = true;
    }
    return {
        Tous_Valides: toutesValides,
        A_une_note_parfait: aUneNoteParfaite
    }
}
console.log(validerNotes([12,16,18,14,20,12]))