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
  if (rawUnit.content) {
    return convertRawUnitType1ToUnit(rawUnit);
  }

  return convertRawUnitType2ToUnit(rawUnit);
}

function convertRawUnitType1ToUnit(rawUnit) {
  const content = rawUnit.content.replace(
    /&#8211;/g,
    '-'
  ).replace(/<p>/g, '').replace(/<\/p>/g, '').replace(
    /<span>.*<\/span>/g,
    ''
  ).trim();
  const [street, cityState] = content.split('<br>');
  const [city, uf] = cityState.trim().split(', ');

  const unit = {
    ...rawUnit,
    street,
    city,
    uf,
    lockerRoom: rawUnit.locker_room
  };

  return unit;
}

function convertRawUnitType2ToUnit(rawUnit) {
  const street = rawUnit.street + ' - ' + rawUnit.region;
  const unit = {
    ...rawUnit,
    street,
    city: rawUnit.city_name,
  };

  return unit;
}
