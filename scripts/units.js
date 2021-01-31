const embarassment = extendContent(UnitType, "embarassment", {});
embarassment.constructor = () => extend(UnitEntity, {});
embarassment.defaultController = () => extend(MinerAI, {});

const backwater = extendContent(UnitType, "backwater", {});
backwater.constructor = () => extend(UnitEntity, {});
backwater.defaultController = () => extend(MinerAI, {});

const scarab = extendContent(UnitType, "scarab", {});
scarab.constructor = () => extend(UnitEntity, {});
scarab.defaultController = () => extend(MinerAI, {});

const enforcer = extendContent(UnitType, "enforcer", {});
enforcer.constructor = () => extend(UnitEntity, {});
enforcer.defaultController = () => extend(BuilderAI, {});