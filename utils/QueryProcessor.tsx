export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "17-10012" );
  }

  if (query.toLowerCase().includes("name")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en tests
    return ( "JoseR" );
  }

  if (query.toLowerCase().includes("50 plus 1")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en tests
    return ( "51" );
  }
  return "";

}
