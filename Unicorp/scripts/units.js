const embarassment = extendContent(UnitType, "embarassment", {});
embarassment.constructor = () => extend(UnitEntity, {});
embarassment.defaultController = () => extend(MinerAI, {});