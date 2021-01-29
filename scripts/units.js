const embarassment = extendContent(UnitType, "embarassment", {});
embarassment.constructor = () => extend(UnitEntity, {});
embarassment.defaultController = () => extend(MinerAI, {});

const backwater = extendContent(UnitType, "backwater", {});
backwater.constructor = () => extend(UnitEntity, {});
backwater.defaultController = () => extend(MinerAI, {});