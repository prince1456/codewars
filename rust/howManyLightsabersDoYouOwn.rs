// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

fn how_many_lightsabers_do_you_own(name: &str) -> u8 {
    if name == "Zach" { 18 } else { 0 }
}

fn how_many_lightsabers_do_you_own(name: &str) -> u8 {
    match name {
        "Zach" => 18,
        _ => 0,
    }
}