const URL = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

export default async function loadUnits() {
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error();
  }

  const data = await response.json();
  return convertJSONToUnits(data);
}

function convertJSONToUnits(data) {
  const rawUnits = data.locations;

  return rawUnits.map(convertRawUnitToUnit);
}

function convertRawUnitToUnit(rawUnit) {
  if (typeof rawUnit.content == typeof '') {
    return convertRawUnitType1ToUnit(rawUnit);
  }

  return convertRawUnitType2ToUnit(rawUnit);
}

function convertRawUnitType1ToUnit(rawUnit) {
  const title = rawUnit.title.replace('&#8217;', '\'');
  const content = rawUnit.content.replace(
    /&#8211;/g,
    '-'
  ).replace(/<p>/g, '').replace(/<\/p>/g, '').replace(
    /<span>.*<\/span>/g,
    ''
  ).replace('&#8217;', '\'').trim();

  const hasAddressInfo = content.length > 0;
  let street;
  let city;
  let uf;
  if (hasAddressInfo) {
    let cityState;
    [street, cityState] = content.split('<br>');
    [city, uf] = cityState.trim().split(', ');
  } else {
    street = null;
    city = null;
    uf = null;
  }

  const unit = {
    ...rawUnit,
    title,
    street,
    city,
    uf,
    lockerRoom: rawUnit.locker_room
  };

  return unit;
}

function convertRawUnitType2ToUnit(rawUnit) {
  const title = rawUnit.title.replace('&#8217;', '\'');
  const street = rawUnit.street + ' - ' + rawUnit.region;
  const unit = {
    ...rawUnit,
    title,
    street,
    city: rawUnit.city_name,
  };

  return unit;
}
