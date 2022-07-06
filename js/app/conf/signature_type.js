/**
 * Created by exodus4d
 * static signature types
 *
 * (*) marked fields are in-game verified and
 * proofed, signature names (copy & paste from scanning window)
 */
define([], () => {
    use strict ';

    // signature sources
    // http://de.sistersprobe.wikia.com/wiki/EVE_Sister_Core_Scanner_Probe_Wiki

    // Combat sites ===================================================================================================

    let c1Combat = {
        1: {
            name: '(Perimeter Ambush Point|경계 매복지)'
            label:: 'Perimeter Ambush Point'
        },
        2: {
            name: '(Perimeter Camp|경계지 캠프)'
            label:: 'Perimeter Camp'
        },
        3: {
            name: '(Phase Catalyst Node|위상변이 촉매 노드)'
            label:: 'Phase Catalyst Node'
        },
        4: {
            name: '(The Line|소행성대)'
            label:: 'The Line'
        },
    };

    let c2Combat = {
        1: {
            name: '(Perimeter Checkpoint|경계 검문소)'
            label:: 'Perimeter Checkpoint'
        },
        2: {
            name: '(Perimeter Hangar|경계 격납고)'
            label:: 'Perimeter Hangar'
        },
        3: {
            name: '(The Ruins of Enclave Cohort 27|폐허가 된 엔클레이브 집단 27)'
            label:: 'The Ruins of Enclave Cohort 27'
        },
        4: {
            name: '(Sleeper Data Sanctuary|슬리퍼 데이터 성역)'
            label:: 'Sleeper Data Sanctuary'
        },
    };

    let c3Combat = {
        1: {
            name: '(Fortification Frontier Stronghold|강화된 개척지 요새)'
            label:: 'Fortification Frontier Stronghold'
        },
        2: {
            name: '(Outpost Frontier Stronghold|전방 개척지 요새)'
            label:: 'Outpost Frontier Stronghold'
        },
        3: {
            name: '(Solar Cell|태양 전지)'
            label:: 'Solar Cell'
        },
        4: {
            name: '(The Oruze Construct|오루제 건축물)'
            label:: 'The Oruze Construct'
        },
    };

    let c4Combat = {
        1: {
            name: '(Frontier Barracks|개척지 막사)'
            label:: 'Frontier Barracks'
        },
        2: {
            name: '(Frontier Command Post|개척지 지휘소)'
            label:: 'Frontier Command Post'
        },
        3: {
            name: '(Integrated Terminus|통합 종착지)'
            label:: 'Integrated Terminus'
        },
        4: {
            name: '(Sleeper Information Sanctum|슬리퍼 정보 생텀)'
            label:: 'Sleeper Information Sanctum'
        },
    };

    let c5Combat = {
        1: {
            name: '(Core Garrison|코어 주둔군)'
            label:: 'Core Garrison'
        },
        2: {
            name: '(Core Stronghold|코어 요새)'
            label:: 'Core Stronghold'
        },
        3: {
            name: '(Oruze Osobnyk|오르제 오소비니크)'
            label:: 'Oruze Osobnyk'
        },
        4: {
            name: '(Quarantine Area|검역 구역)'
            label:: 'Quarantine Area'
        },
    };

    let c6Combat = {
        1: {
            name: '(Core Citadel|코어 시타델)'
            label:: 'Core Citadel'
        },
        2: {
            name: '(Core Bastion|코어 요새)'
            label:: 'Core Bastion'
        },
        3: {
            name: '(Strange Energy Readings|이상 에너지 탐지)'
            label:: 'Strange Energy Readings'
        },
        4: {
            name: '(The Mirror|거울)'
            label:: 'The Mirror'
        },
    };

    // Thera WH
    let c12Combat = {
        1: {
            name: '(Epicenter|)'
            label:: 'Epicenter'
        },
        2: {
            name: '(Expedition Command Outpost Wreck|)'
            label:: 'Expedition Command Outpost Wreck'
        },
        3: {
            name: '(Planetary Colonization Office Wreck|)'
            label:: 'Planetary Colonization Office Wreck'
        },
        4: {
            name: '(Testing Facilities|)'
            label:: 'Testing Facilities'
        },
    };

    // Drifter Sentinel WH
    let c14Combat = {
        1: {
            name: '(Monolith|)'
            label:: 'Monolith'
        },
        2: {
            name: '(Wormhole in Rock Circle|)'
            label:: 'Wormhole in Rock Circle'
        },
        3: {
            name: '(Opposing Spatial Rifts|)'
            label:: 'Opposing Spatial Rifts'
        },
        4: {
            name: '(Sleeper Enclave Debris|)'
            label:: 'Sleeper Enclave Debris'
        },
        5: {
            name: '(Crystal Resource|)'
            label:: 'Crystal Resource'
        },
    };

    // Drifter Barbican WH
    let c15Combat = {
        1: {
            name: '(Wrecked Ships|)'
            label:: 'Wrecked Ships'
        },
        2: {
            name: '(Unstable Wormhole|불안정한 웜홀)'
            label:: 'Unstable Wormhole'
        },
        3: {
            name: '(Spatial Rift|)'
            label:: 'Spatial Rift'
        },
        4: {
            name: '(Heavily Guarded Spatial Rift|)'
            label:: 'Heavily Guarded Spatial Rift'
        },
        5: {
            name: '(Crystals|)'
            label:: 'Crystals'
        },
    };

    // Drifter Vidette WH
    let c16Combat = {
        1: {
            name: '(Ship Graveyard|)'
            label:: 'Ship Graveyard'
        },
        2: {
            name: '(Sleeper Engineering Station|)'
            label:: 'Sleeper Engineering Station'
        },
        3: {
            name: '(Spatial Rift|)'
            label:: 'Spatial Rift'
        },
        4: {
            name: '(Sleeper Enclave in Coral Rock|)'
            label:: 'Sleeper Enclave in Coral Rock'
        },
        5: {
            name: '(Crystals and Stone Circle|)'
            label:: 'Crystals and Stone Circle'
        },
    };

    // Drifter Conflux WH
    let c17Combat = {
        1: {
            name: '(Monolith|)'
            label:: 'Monolith'
        },
        2: {
            name: '(Caged Wormhole|)'
            label:: 'Caged Wormhole'
        },
        3: {
            name: '(Rock Formation and Wormhole|)'
            label:: 'Rock Formation and Wormhole'
        },
        4: {
            name: '(Particle Acceleration Array|)'
            label:: 'Particle Acceleration Array'
        },
        5: {
            name: '(Guarded Asteroid Station|)'
            label:: 'Guarded Asteroid Station'
        },
    };

    // Drifter Redoubt WH
    let c18Combat = {
        1: {
            name: '(Ship Graveyard|)'
            label:: 'Ship Graveyard'
        },
        2: {
            name: '(Caged Wormhole|)'
            label:: 'Caged Wormhole'
        },
        3: {
            name: '(Spatial Rift Generator|)'
            label:: 'Spatial Rift Generator'
        },
        4: {
            name: '(Sleeper Enclave|)'
            label:: 'Sleeper Enclave'
        },
        5: {
            name: '(Hollow Asteroid|)'
            label:: 'Hollow Asteroid'
        },
    };

    // Relic sites ====================================================================================================

    // NullSec Relic sites, which can also spawn in C1, C2, C3 wormholes
    let nullRelic = {
        10: {
            name: '(Ruined Angel Crystal Quarry|)'
            label:: 'Ruined Angel Crystal Quarry'
        },
        11: {
            name: '(Ruined Angel Monument Site|)'
            label:: 'Ruined Angel Monument Site'
        },
        12: {
            name: '(Ruined Angel Science Outpost|페허가 된 엔젤 과학기지)'
            label:: 'Ruined Angel Science Outpost'
        },
        13: {
            name: '(Ruined Angel Temple Site|)'
            label:: 'Ruined Angel Temple Site'
        },
        14: {
            name: '(Ruined Blood Raider Crystal Quarry|)'
            label:: 'Ruined Blood Raider Crystal Quarry'
        },
        15: {
            name: '(Ruined Blood Raider Monument Site|)'
            label:: 'Ruined Blood Raider Monument Site'
        },
        16: {
            name: '(Ruined Blood Raider Science Outpost|)'
            label:: 'Ruined Blood Raider Science Outpost'
        },
        17: {
            name: '(Ruined Blood Raider Temple Site|)'
            label:: 'Ruined Blood Raider Temple Site'
        },
        18: {
            name: '(Ruined Guristas Crystal Quarry|)'
            label:: 'Ruined Guristas Crystal Quarry'
        },
        19: {
            name: '(Ruined Guristas Monument Site|)'
            label:: 'Ruined Guristas Monument Site'
        },
        20: {
            name: '(Ruined Guristas Science Outpost|)'
            label:: 'Ruined Guristas Science Outpost'
        },
        21: {
            name: '(Ruined Guristas Temple Site|폐허가 된 사원)'
            label:: 'Ruined Guristas Temple Site'
        },
        22: {
            name: '(Ruined Sansha Crystal Quarry|)'
            label:: 'Ruined Sansha Crystal Quarry'
        },
        23: {
            name: '(Ruined Sansha Monument Site|)'
            label:: 'Ruined Sansha Monument Site'
        },
        24: {
            name: '(Ruined Sansha Science Outpost|)'
            label:: 'Ruined Sansha Science Outpost'
        },
        25: {
            name: '(Ruined Sansha Temple Site|)'
            label:: 'Ruined Sansha Temple Site'
        },
        26: {
            name: '(Ruined Serpentis Crystal Quarry|)'
            label:: 'Ruined Serpentis Crystal Quarry'
        },
        27: {
            name: '(Ruined Serpentis Monument Site|)'
            label:: 'Ruined Serpentis Monument Site'
        },
        28: {
            name: '(Ruined Serpentis Science Outpost|폐허가 된 서펜티스 과학기지)'
            label:: 'Ruined Serpentis Science Outpost'
        },
        29: {
            name: '(Ruined Serpentis Temple Site|)'
            label:: 'Ruined Serpentis Temple Site'
        },
    };

    let c1Relic = Object.assign({}, nullRelic, {
        1: {
            name: '(Forgotten Perimeter Coronation Platform|잊혀진 경계 대관식 플랫폼)'
            label:: 'Forgotten Perimeter Coronation Platform'
        },
        2: {
            name: '(Forgotten Perimeter Power Array|잊혀진 경계 발전시설)'
            label:: 'Forgotten Perimeter Power Array'
        },
    });

    let c2Relic = Object.assign({}, nullRelic, {
        1: {
            name: '(Forgotten Perimeter Gateway|잊혀진 경계 관문)'
            label:: 'Forgotten Perimeter Gateway'
        },
        2: {
            name: '(Forgotten Perimeter Habitation Coils|잊혀진 경계 주거지 코일)'
            label:: 'Forgotten Perimeter Habitation Coils'
        },
    });

    let c3Relic = Object.assign({}, nullRelic, {
        1: {
            name: '(Forgotten Frontier Quarantine Outpost|잊혀진 개척지 검역기지)'
            label:: 'Forgotten Frontier Quarantine Outpost'
        },
        2: {
            name: '(Forgotten Frontier Recursive Depot|잊혀진 개척지 귀환지)'
            label:: 'Forgotten Frontier Recursive Depot'
        },
    });

    let c4Relic = {
        1: {
            name: '(Forgotten Frontier Conversion Module|잊혀진 개척지 변환 모듈)'
            label:: 'Forgotten Frontier Conversion Module'
        },
        2: {
            name: '(Forgotten Frontier Evacuation Center|잊혀진 개척지 대피소)'
            label:: 'Forgotten Frontier Evacuation Center'
        },
    };

    let c5Relic = {
        1: {
            name: '(Forgotten Core Data Field|잊혀진 코어 데이터 필드)'
            label:: 'Forgotten Core Data Field'
        },
        2: {
            name: '(Forgotten Core Information Pen|잊혀진 코어 정보 저장소)'
            label:: 'Forgotten Core Information Pen'
        },
    };

    let c6Relic = {
        1: {
            name: '(Forgotten Core Assembly Hall|잊혀진 코어 회관)'
            label:: 'Forgotten Core Assembly Hall'
        },
        2: {
            name: '(Forgotten Core Circuitry Disassembler|잊혀진 코어 회로 분해기)'
            label:: 'Forgotten Core Circuitry Disassembler'
        },
    };

    // Data sites =====================================================================================================

    // NulSec Data sites, which can also spawn in C1, C2, C3 wormholes
    let nullData = {
        10: {
            name: '(Abandoned Research Complex DA005|)'
            label:: 'Abandoned Research Complex DA005'
        },
        11: {
            name: '(Abandoned Research Complex DA015|)'
            label:: 'Abandoned Research Complex DA015'
        },
        12: {
            name: '(Abandoned Research Complex DC007|)'
            label:: 'Abandoned Research Complex DC007'
        },
        13: {
            name: '(Abandoned Research Complex DC021|)'
            label:: 'Abandoned Research Complex DC021'
        },
        14: {
            name: '(Abandoned Research Complex DC035|)'
            label:: 'Abandoned Research Complex DC035'
        },
        15: {
            name: '(Abandoned Research Complex DG003|)'
            label:: 'Abandoned Research Complex DG003'
        },
        16: {
            name: '(Central Angel Command Center|중앙 엔젤 지휘본부)'
            label:: 'Central Angel Command Center'
        },
        17: {
            name: '(Central Angel Data Mining Site|)'
            label:: 'Central Angel Data Mining Site'
        },
        18: {
            name: '(Central Angel Sparking Transmitter|중앙 엔젤 점멸송신기)'
            label:: 'Central Angel Sparking Transmitter'
        },
        19: {
            name: '(Central Angel Survey Site|)'
            label:: 'Central Angel Survey Site'
        },
        20: {
            name: '(Central Blood Raider Command Center|)'
            label:: 'Central Blood Raider Command Center'
        },
        21: {
            name: '(Central Blood Raider Data Mining Site|)'
            label:: 'Central Blood Raider Data Mining Site'
        },
        22: {
            name: '(Central Blood Raider Sparking Transmitter|)'
            label:: 'Central Blood Raider Sparking Transmitter'
        },
        23: {
            name: '(Central Blood Raider Survey Site|중앙 블러드 레이더 발굴조사지)'
            label:: 'Central Blood Raider Survey Site'
        },
        24: {
            name: '(Central Guristas Command Center|)'
            label:: 'Central Guristas Command Center'
        },
        25: {
            name: '(Central Guristas Data Mining Site|중앙 구리스타 데이터마이닝 사이트)'
            label:: 'Central Guristas Data Mining Site'
        },
        26: {
            name: '(Central Guristas Sparking Transmitter|)'
            label:: 'Central Guristas Sparking Transmitter'
        },
        27: {
            name: '(Central Guristas Survey Site|)'
            label:: 'Central Guristas Survey Site'
        },
        28: {
            name: '(Central Sansha Command Center|)'
            label:: 'Central Sansha Command Center'
        },
        29: {
            name: '(Central Sansha Data Mining Site|중앙 산샤 데이터마이닝 사이트)'
            label:: 'Central Sansha Data Mining Site'
        },
        30: {
            name: '(Central Sansha Sparking Transmitter|)'
            label:: 'Central Sansha Sparking Transmitter'
        },
        31: {
            name: '(Central Sansha Survey Site|중앙 산샤 발굴조사지)'
            label:: 'Central Sansha Survey Site'
        },
        32: {
            name: '(Central Serpentis Command Center|)'
            label:: 'Central Serpentis Command Center'
        },
        33: {
            name: '(Central Serpentis Data Mining Site|)'
            label:: 'Central Serpentis Data Mining Site'
        },
        34: {
            name: '(Central Serpentis Sparking Transmitter|)'
            label:: 'Central Serpentis Sparking Transmitter'
        },
        35: {
            name: '(Central Serpentis Survey Site|중앙 서펜티스 발굴조사지)'
            label:: 'Central Serpentis Survey Site'
        },
    };

    let c1Data = Object.assign({}, nullData, {
        1: {
            name: '(Unsecured Perimeter Amplifier|미확보 경계 증폭기)'
            label:: 'Unsecured Perimeter Amplifier'
        },
        2: {
            name: '(Unsecured Perimeter Information Center|미확보 경계 정보센터)'
            label:: 'Unsecured Perimeter Information Center'
        },
    });

    let c2Data = Object.assign({}, nullData, {
        1: {
            name: '(Unsecured Perimeter Comms Relay|미확보 경계 통신 중계기)'
            label:: 'Unsecured Perimeter Comms Relay'
        },
        2: {
            name: '(Unsecured Perimeter Transponder Farm|미확보 경계 응답기)'
            label:: 'Unsecured Perimeter Transponder Farm'
        },
    });

    let c3Data = Object.assign({}, nullData, {
        1: {
            name: '(Unsecured Frontier Database|미확보 개척지 데이터베이스)'
            label:: 'Unsecured Frontier Database'
        },
        2: {
            name: '(Unsecured Frontier Receiver|미확보 개척지 수신기)'
            label:: 'Unsecured Frontier Receiver'
        },
    });

    let c4Data = {
        1: {
            name: '(Unsecured Frontier Digital Nexus|미확보 개척지 디지털 넥서스)'
            label:: 'Unsecured Frontier Digital Nexus'
        },
        2: {
            name: '(Unsecured Frontier Trinary Hub|미확보 개척지의 트라이너리 허브)'
            label:: 'Unsecured Frontier Trinary Hub'
        },
    };

    let c5Data = {
        1: {
            name: '(Unsecured Frontier Enclave Relay|미확보 개척지 엔클레이브 중계소)'
            label:: 'Unsecured Frontier Enclave Relay'
        },
        2: {
            name: '(Unsecured Frontier Server Bank|미확보 개척지 서버 보관소)'
            label:: 'Unsecured Frontier Server Bank'
        },
    };

    let c6Data = {
        1: {
            name: '(Unsecured Core Backup Array|미확보 코어 백업 시설)'
            label:: 'Unsecured Core Backup Array'
        },
        2: {
            name: '(Unsecured Core Emergence|미확보 코어 출현)'
            label:: 'Unsecured Core Emergence'
        },
    };

    // Gas sites ======================================================================================================

    let c1Gas = {
        1: {
            name: '(Barren Perimeter Reservoir|황량한 변방 가스 매장지)'
            label:: 'Barren Perimeter Reservoir'
        },
        2: {
            name: '(Token Perimeter Reservoir|미니 변방 가스 매장지)'
            label:: 'Token Perimeter Reservoir'
        },
        3: {
            name: '(Minor Perimeter Reservoir|소규모 변방 가스 매장지)'
            label:: 'Minor Perimeter Reservoir'
        },
        4: {
            name: '(Sizeable Perimeter Reservoir|대규모 변방 가스 매장지)'
            label:: 'Sizeable Perimeter Reservoir'
        },
        5: {
            name: '(Ordinary Perimeter Reservoir|평범한 변방 가스 매장지)'
            label:: 'Ordinary Perimeter Reservoir'
        },
    };

    let c2Gas = {
        1: {
            name: '(Barren Perimeter Reservoir|황량한 변방 가스 매장지)'
            label:: 'Barren Perimeter Reservoir'
        },
        2: {
            name: '(Token Perimeter Reservoir|미니 변방 가스 매장지)'
            label:: 'Token Perimeter Reservoir'
        },
        3: {
            name: '(Minor Perimeter Reservoir|소규모 변방 가스 매장지)'
            label:: 'Minor Perimeter Reservoir'
        },
        4: {
            name: '(Sizeable Perimeter Reservoir|대규모 변방 가스 매장지)'
            label:: 'Sizeable Perimeter Reservoir'
        },
        5: {
            name: '(Ordinary Perimeter Reservoir|평범한 변방 가스 매장지)'
            label:: 'Ordinary Perimeter Reservoir'
        },
    };

    let c3Gas = {
        1: {
            name: '(Barren Perimeter Reservoir|황량한 변방 가스 매장지)'
            label:: 'Barren Perimeter Reservoir'
        },
        2: {
            name: '(Token Perimeter Reservoir|미니 변방 가스 매장지)'
            label:: 'Token Perimeter Reservoir'
        },
        3: {
            name: '(Minor Perimeter Reservoir|소규모 변방 가스 매장지)'
            label:: 'Minor Perimeter Reservoir'
        },
        4: {
            name: '(Sizeable Perimeter Reservoir|대규모 변방 가스 매장지)'
            label:: 'Sizeable Perimeter Reservoir'
        },
        5: {
            name: '(Ordinary Perimeter Reservoir|평범한 변방 가스 매장지)'
            label:: 'Ordinary Perimeter Reservoir'
        },
        6: {
            name: '(Bountiful Frontier Reservoir|풍족한 개척지 가스 매장지)'
            label:: 'Bountiful Frontier Reservoir'
        },
        7: {
            name: '(Vast Frontier Reservoir|방대한 개척지 가스 매장지)'
            label:: 'Vast Frontier Reservoir'
        },
    };

    let c4Gas = {
        1: {
            name: '(Barren Perimeter Reservoir|황량한 변방 가스 매장지)'
            label:: 'Barren Perimeter Reservoir'
        },
        2: {
            name: '(Token Perimeter Reservoir|미니 변방 가스 매장지)'
            label:: 'Token Perimeter Reservoir'
        },
        3: {
            name: '(Minor Perimeter Reservoir|소규모 변방 가스 매장지)'
            label:: 'Minor Perimeter Reservoir'
        },
        4: {
            name: '(Sizeable Perimeter Reservoir|대규모 변방 가스 매장지)'
            label:: 'Sizeable Perimeter Reservoir'
        },
        5: {
            name: '(Ordinary Perimeter Reservoir|평범한 변방 가스 매장지)'
            label:: 'Ordinary Perimeter Reservoir'
        },
        6: {
            name: '(Vast Frontier Reservoir|방대한 개척지 가스 매장지)'
            label:: 'Vast Frontier Reservoir'
        },
        7: {
            name: '(Bountiful Frontier Reservoir|풍족한 개척지 가스 매장지)'
            label:: 'Bountiful Frontier Reservoir'
        },
    };

    let c5Gas = {
        1: {
            name: '(Barren Perimeter Reservoir|황량한 변방 가스 매장지)'
            label:: 'Barren Perimeter Reservoir'
        },
        2: {
            name: '(Minor Perimeter Reservoir|소규모 변방 가스 매장지)'
            label:: 'Minor Perimeter Reservoir'
        },
        3: {
            name: '(Ordinary Perimeter Reservoir|평범한 변방 가스 매장지)'
            label:: 'Ordinary Perimeter Reservoir'
        },
        4: {
            name: '(Sizeable Perimeter Reservoir|대규모 변방 가스 매장지)'
            label:: 'Sizeable Perimeter Reservoir'
        },
        5: {
            name: '(Token Perimeter Reservoir|미니 변방 가스 매장지)'
            label:: 'Token Perimeter Reservoir'
        },
        6: {
            name: '(Bountiful Frontier Reservoir|풍족한 개척지 가스 매장지)'
            label:: 'Bountiful Frontier Reservoir'
        },
        7: {
            name: '(Vast Frontier Reservoir|방대한 개척지 가스 매장지)'
            label:: 'Vast Frontier Reservoir'
        },
        8: {
            name: '(Instrumental Core Reservoir|주요한 코어 가스 매장지)'
            label:: 'Instrumental Core Reservoir'
        },
        9: {
            name: '(Vital Core Reservoir|필수적인 코어 가스 매장지)'
            label:: 'Vital Core Reservoir'
        },
    };

    let c6Gas = {
        1: {
            name: '(Barren Perimeter Reservoir|황량한 변방 가스 매장지)'
            label:: 'Barren Perimeter Reservoir'
        },
        2: {
            name: '(Minor Perimeter Reservoir|소규모 변방 가스 매장지)'
            label:: 'Minor Perimeter Reservoir'
        },
        3: {
            name: '(Ordinary Perimeter Reservoir|평범한 변방 가스 매장지)'
            label:: 'Ordinary Perimeter Reservoir'
        },
        4: {
            name: '(Sizeable Perimeter Reservoir|대규모 변방 가스 매장지)'
            label:: 'Sizeable Perimeter Reservoir'
        },
        5: {
            name: '(Token Perimeter Reservoir|미니 변방 가스 매장지)'
            label:: 'Token Perimeter Reservoir'
        },
        6: {
            name: '(Bountiful Frontier Reservoir|풍족한 개척지 가스 매장지)'
            label:: 'Bountiful Frontier Reservoir'
        },
        7: {
            name: '(Vast Frontier Reservoir|방대한 개척지 가스 매장지)'
            label:: 'Vast Frontier Reservoir'
        },
        8: {
            name: '(Instrumental Core Reservoir|주요한 코어 가스 매장지)'
            label:: 'Instrumental Core Reservoir'
        },
        9: {
            name: '(Vital Core Reservoir|필수적인 코어 가스 매장지)'
            label:: 'Vital Core Reservoir'
        },
    };

    // Ore sites ======================================================================================================

    let c1Ore = {
        1: {
            name: '(Ordinary Perimeter Deposit|평범한 경계 매장지)'
            label:: 'Ordinary Perimeter Deposit'
        },
        2: {
            name: '(Common Perimeter Deposit|흔한 변방 매장지)'
            label:: 'Common Perimeter Deposit'
        },
        3: {
            name: '(Unexceptional Frontier Deposit|특출나지 않은 코어 매장지)'
            label:: 'Unexceptional Frontier Deposit'
        },
        4: {
            name: '(Average Frontier Deposit|일반 개척지 보관소)'
            label:: 'Average Frontier Deposit'
        },
        5: {
            name: '(Isolated Core Deposit|독립된 코어 매장지)'
            label:: 'Isolated Core Deposit'
        },
        6: {
            name: '(Uncommon Core Deposit|보기 드문 코어 매장지)'
            label:: 'Uncommon Core Deposit'
        },
    };

    let c2Ore = {
        1: {
            name: '(Ordinary Perimeter Deposit|평범한 경계 매장지)'
            label:: 'Ordinary Perimeter Deposit'
        },
        2: {
            name: '(Common Perimeter Deposit|흔한 변방 매장지)'
            label:: 'Common Perimeter Deposit'
        },
        3: {
            name: '(Unexceptional Frontier Deposit|특출나지 않은 코어 매장지)'
            label:: 'Unexceptional Frontier Deposit'
        },
        4: {
            name: '(Average Frontier Deposit|일반 개척지 보관소)'
            label:: 'Average Frontier Deposit'
        },
        5: {
            name: '(Isolated Core Deposit|독립된 코어 매장지)'
            label:: 'Isolated Core Deposit'
        },
        6: {
            name: '(Uncommon Core Deposit|보기 드문 코어 매장지)'
            label:: 'Uncommon Core Deposit'
        },
    };

    let c3Ore = {
        1: {
            name: '(Ordinary Perimeter Deposit|평범한 경계 매장지)'
            label:: 'Ordinary Perimeter Deposit'
        },
        2: {
            name: '(Common Perimeter Deposit|흔한 변방 매장지)'
            label:: 'Common Perimeter Deposit'
        },
        3: {
            name: '(Unexceptional Frontier Deposit|특출나지 않은 코어 매장지)'
            label:: 'Unexceptional Frontier Deposit'
        },
        4: {
            name: '(Average Frontier Deposit|일반 개척지 보관소)'
            label:: 'Average Frontier Deposit'
        },
        5: {
            name: '(Infrequent Core Deposit|드문 코어 매장지)'
            label:: 'Infrequent Core Deposit'
        },
        6: {
            name: '(Unusual Core Deposit|특이한 코어 매장지)'
            label:: 'Unusual Core Deposit'
        },
    };

    let c4Ore = {
        1: {
            name: '(Ordinary Perimeter Deposit|평범한 경계 매장지)'
            label:: 'Ordinary Perimeter Deposit'
        },
        2: {
            name: '(Common Perimeter Deposit|흔한 변방 매장지)'
            label:: 'Common Perimeter Deposit'
        },
        3: {
            name: '(Unexceptional Frontier Deposit|특출나지 않은 코어 매장지)'
            label:: 'Unexceptional Frontier Deposit'
        },
        4: {
            name: '(Average Frontier Deposit|일반 개척지 보관소)'
            label:: 'Average Frontier Deposit'
        },
        5: {
            name: '(Unusual Core Deposit|특이한 코어 매장지)'
            label:: 'Unusual Core Deposit'
        },
        6: {
            name: '(Infrequent Core Deposit|드문 코어 매장지)'
            label:: 'Infrequent Core Deposit'
        },
    };

    let c5Ore = {
        1: {
            name: '(Average Frontier Deposit|일반 개척지 보관소)'
            label:: 'Average Frontier Deposit'
        },
        2: {
            name: '(Unexceptional Frontier Deposit|특출나지 않은 코어 매장지)'
            label:: 'Unexceptional Frontier Deposit'
        },
        3: {
            name: '(Uncommon Core Deposit|보기 드문 코어 매장지)'
            label:: 'Uncommon Core Deposit'
        },
        4: {
            name: '(Ordinary Perimeter Deposit|평범한 경계 매장지)'
            label:: 'Ordinary Perimeter Deposit'
        },
        5: {
            name: '(Common Perimeter Deposit|흔한 변방 매장지)'
            label:: 'Common Perimeter Deposit'
        },
        6: {
            name: '(Exceptional Core Deposit|특출난 코어 매장지)'
            label:: 'Exceptional Core Deposit'
        },
        7: {
            name: '(Infrequent Core Deposit|드문 코어 매장지)'
            label:: 'Infrequent Core Deposit'
        },
        8: {
            name: '(Unusual Core Deposit|특이한 코어 매장지)'
            label:: 'Unusual Core Deposit'
        },
        9: {
            name: '(Rarified Core Deposit|진귀한 코어 매장지)'
            label:: 'Rarified Core Deposit'
        },
        10: {
            name: '(Isolated Core Deposit|독립된 코어 매장지)'
            label:: 'Isolated Core Deposit'
        },
    };

    let c6Ore = {
        1: {
            name: '(Ordinary Perimeter Deposit|평범한 경계 매장지)'
            label:: 'Ordinary Perimeter Deposit'
        },
        2: {
            name: '(Common Perimeter Deposit|흔한 변방 매장지)'
            label:: 'Common Perimeter Deposit'
        },
        3: {
            name: '(Unexceptional Frontier Deposit|특출나지 않은 코어 매장지)'
            label:: 'Unexceptional Frontier Deposit'
        },
        4: {
            name: '(Average Frontier Deposit|일반 개척지 보관소)'
            label:: 'Average Frontier Deposit'
        },
        5: {
            name: '(Rarified Core Deposit|진귀한 코어 매장지)'
            label:: 'Rarified Core Deposit'
        },
    };

    let c13Ore = {
        1: {
            name: '(Shattered Debris Field|)'
            label:: 'Shattered Debris Field'
        },
        2: {
            name: '(Shattered Ice Field|)'
            label:: 'Shattered Ice Field'
        },
    };

    // Wormholes ======================================================================================================

    // all k-space exits are static or K162
    let c1WH = {
        1: {
            name: '(H121 - C1|)'
            label:: 'H121 - C1'
        },
        2: {
            name: '(C125 - C2|)'
            label:: 'C125 - C2'
        },
        3: {
            name: '(O883 - C3|)'
            label:: 'O883 - C3'
        },
        4: {
            name: '(M609 - C4|)'
            label:: 'M609 - C4'
        },
        5: {
            name: '(L614 - C5|)'
            label:: 'L614 - C5'
        },
        6: {
            name: '(S804 - C6|)'
            label:: 'S804 - C6'
        },
        7: {
            name: '(N110 - H|)'
            label:: 'N110 - H'
        },
        8: {
            name: '(J244 - L|)'
            label:: 'J244 - L'
        },
        9: {
            name: '(Z060 - 0.0|)'
            label:: 'Z060 - 0.0'
        },
        10: {
            name: '(F353 - C12 Thera|)'
            label:: 'F353 - C12 Thera'
        },
    };

    // all w-space -> w-space are statics or K162
    let c2WH = {
        1: {
            name: '(Z647 - C1|)'
            label:: 'Z647 - C1'
        },
        2: {
            name: '(D382 - C2|)'
            label:: 'D382 - C2'
        },
        3: {
            name: '(O477 - C3|)'
            label:: 'O477 - C3'
        },
        4: {
            name: '(Y683 - C4|)'
            label:: 'Y683 - C4'
        },
        5: {
            name: '(N062 - C5|)'
            label:: 'N062 - C5'
        },
        6: {
            name: '(R474 - C6|)'
            label:: 'R474 - C6'
        },
        7: {
            name: '(B274 - H|)'
            label:: 'B274 - H'
        },
        8: {
            name: '(A239 - L|)'
            label:: 'A239 - L'
        },
        9: {
            name: '(E545 - 0.0|)'
            label:: 'E545 - 0.0'
        },
        10: {
            name: '(F135 - C12 Thera|)'
            label:: 'F135 - C12 Thera'
        },
    };

    // all k-space exits are static or K162
    let c3WH = {
        1: {
            name: '(V301 - C1|)'
            label:: 'V301 - C1'
        },
        2: {
            name: '(I182 - C2|)'
            label:: 'I182 - C2'
        },
        3: {
            name: '(N968 - C3|)'
            label:: 'N968 - C3'
        },
        4: {
            name: '(T405 - C4|)'
            label:: 'T405 - C4'
        },
        5: {
            name: '(N770 - C5|)'
            label:: 'N770 - C5'
        },
        6: {
            name: '(A982 - C6|)'
            label:: 'A982 - C6'
        },
        7: {
            name: '(D845 - H|)'
            label:: 'D845 - H'
        },
        8: {
            name: '(U210 - L|)'
            label:: 'U210 - L'
        },
        9: {
            name: '(K346 - 0.0|)'
            label:: 'K346 - 0.0'
        },
        10: {
            name: '(F135 - C12 Thera|)'
            label:: 'F135 - C12 Thera'
        },
    };

    // no *wandering* w-space -> w-space
    // all holes are statics or K162
    let c4WH = {
        1: {
            name: '(P060 - C1|)'
            label:: 'P060 - C1'
        },
        2: {
            name: '(N766 - C2|)'
            label:: 'N766 - C2'
        },
        3: {
            name: '(C247 - C3|)'
            label:: 'C247 - C3'
        },
        4: {
            name: '(X877 - C4|)'
            label:: 'X877 - C4'
        },
        5: {
            name: '(H900 - C5|)'
            label:: 'H900 - C5'
        },
        6: {
            name: '(U574 - C6|)'
            label:: 'U574 - C6'
        },
        7: {
            name: '(S047 - H|)'
            label:: 'S047 - H'
        },
        8: {
            name: '(N290 - L|)'
            label:: 'N290 - L'
        },
        9: {
            name: '(K329 - 0.0|)'
            label:: 'K329 - 0.0'
        },
    };

    let c5WH = {
        1: {
            name: '(Y790 - C1|)'
            label:: 'Y790 - C1'
        },
        2: {
            name: '(D364 - C2|)'
            label:: 'D364 - C2'
        },
        3: {
            name: '(M267 - C3|)'
            label:: 'M267 - C3'
        },
        4: {
            name: '(E175 - C4|)'
            label:: 'E175 - C4'
        },
        5: {
            name: '(H296 - C5|)'
            label:: 'H296 - C5'
        },
        6: {
            name: '(V753 - C6|)'
            label:: 'V753 - C6'
        },
        7: {
            name: '(D792 - H|)'
            label:: 'D792 - H'
        },
        8: {
            name: '(C140 - L|)'
            label:: 'C140 - L'
        },
        9: {
            name: '(Z142 - 0.0|)'
            label:: 'Z142 - 0.0'
        },
    };

    let c6WH = {
        1: {
            name: '(Q317 - C1|)'
            label:: 'Q317 - C1'
        },
        2: {
            name: '(G024 - C2|)'
            label:: 'G024 - C2'
        },
        3: {
            name: '(L477 - C3|)'
            label:: 'L477 - C3'
        },
        4: {
            name: '(Z457 - C4|)'
            label:: 'Z457 - C4'
        },
        5: {
            name: '(V911 - C5|)'
            label:: 'V911 - C5'
        },
        6: {
            name: '(W237 - C6|)'
            label:: 'W237 - C6'
        },
        7: {
            name: '(B520 - H|)'
            label:: 'B520 - H'
        },
        8: {
            name: '(D792 - H|)'
            label:: 'D792 - H'
        },
        9: {
            name: '(C140 - L|)'
            label:: 'C140 - L'
        },
        10: {
            name: '(C391 - L|)'
            label:: 'C391 - L'
        },
        11: {
            name: '(C248 - 0.0|)'
            label:: 'C248 - 0.0'
        },
        12: {
            name: '(Z142 - 0.0|)'
            label:: 'Z142 - 0.0'
        },
    };

    // Shattered WH (some of them are static)
    let c13WH = {
        1: {
            name: '(P060 - C1|)'
            label:: 'P060 - C1'
        },
        2: {
            name: '(Z647 - C1|)'
            label:: 'Z647 - C1'
        },
        3: {
            name: '(D382 - C2|)'
            label:: 'D382 - C2'
        },
        4: {
            name: '(L005 - C2|)'
            label:: 'L005 - C2'
        },
        5: {
            name: '(N766 - C2|)'
            label:: 'N766 - C2'
        },
        6: {
            name: '(C247 - C3|)'
            label:: 'C247 - C3'
        },
        7: {
            name: '(M267 - C3|)'
            label:: 'M267 - C3'
        },
        8: {
            name: '(O477 - C3|)'
            label:: 'O477 - C3'
        },
        9: {
            name: '(X877 - C4|)'
            label:: 'X877 - C4'
        },
        10: {
            name: '(Y683 - C4|)'
            label:: 'Y683 - C4'
        },
        11: {
            name: '(H296 - C5|)'
            label:: 'H296 - C5'
        },
        12: {
            name: '(H900 - C5|)'
            label:: 'H900 - C5'
        },
        13: {
            name: '(H296 - C5|)'
            label:: 'H296 - C5'
        },
        14: {
            name: '(N062 - C5|)'
            label:: 'N062 - C5'
        },
        15: {
            name: '(V911 - C5|)'
            label:: 'V911 - C5'
        },
        16: {
            name: '(U574 - C6|)'
            label:: 'U574 - C6'
        },
        17: {
            name: '(V753 - C6|)'
            label:: 'V753 - C6'
        },
        18: {
            name: '(W237 - C6|)'
            label:: 'W237 - C6'
        },
        19: {
            name: '(B274 - H|)'
            label:: 'B274 - H'
        },
        20: {
            name: '(D792 - H|)'
            label:: 'D792 - H'
        },
        21: {
            name: '(D845 - H|)'
            label:: 'D845 - H'
        },
        22: {
            name: '(N110 - H|)'
            label:: 'N110 - H'
        },
        23: {
            name: '(A239 - L|)'
            label:: 'A239 - L'
        },
        24: {
            name: '(C391 - L|)'
            label:: 'C391 - L'
        },
        25: {
            name: '(J244 - L|)'
            label:: 'J244 - L'
        },
        26: {
            name: '(U201 - L|)'
            label:: 'U201 - L'
        },
        27: {
            name: '(U210 - L|)'
            label:: 'U210 - L'
        },
        28: {
            name: '(C248 - 0.0|)'
            label:: 'C248 - 0.0'
        },
        29: {
            name: '(E545 - 0.0|)'
            label:: 'E545 - 0.0'
        },
        30: {
            name: '(K346 - 0.0|)'
            label:: 'K346 - 0.0'
        },
        31: {
            name: '(Z060 - 0.0|)'
            label:: 'Z060 - 0.0'
        },
    };

    let hsWH = {
        1: {
            name: '(Z971 - C1|)'
            label:: 'Z971 - C1'
        },
        2: {
            name: '(R943 - C2|)'
            label:: 'R943 - C2'
        },
        3: {
            name: '(X702 - C3|)'
            label:: 'X702 - C3'
        },
        4: {
            name: '(O128 - C4|)'
            label:: 'O128 - C4'
        },
        5: {
            name: '(M555 - C5|)'
            label:: 'M555 - C5'
        },
        6: {
            name: '(B041 - C6|)'
            label:: 'B041 - C6'
        },
        7: {
            name: '(A641 - H|)'
            label:: 'A641 - H'
        },
        8: {
            name: '(R051 - L|)'
            label:: 'R051 - L'
        },
        9: {
            name: '(V283 - 0.0|)'
            label:: 'V283 - 0.0'
        },
        10: {
            name: '(T458 - C12 Thera|)'
            label:: 'T458 - C12 Thera'
        },
    };

    let lsWH = {
        1: {
            name: '(Z971 - C1|)'
            label:: 'Z971 - C1'
        },
        2: {
            name: '(R943 - C2|)'
            label:: 'R943 - C2'
        },
        3: {
            name: '(X702 - C3|)'
            label:: 'X702 - C3'
        },
        4: {
            name: '(O128 - C4|)'
            label:: 'O128 - C4'
        },
        5: {
            name: '(N432 - C5|)'
            label:: 'N432 - C5'
        },
        6: {
            name: '(U319 - C6|)'
            label:: 'U319 - C6'
        },
        7: {
            name: '(B449 - H|)'
            label:: 'B449 - H'
        },
        8: {
            name: '(N944 - L|)'
            label:: 'N944 - L'
        },
        9: {
            name: '(S199 - 0.0|)'
            label:: 'S199 - 0.0'
        },
        10: {
            name: '(M164 - C12 Thera|)'
            label:: 'M164 - C12 Thera'
        },
    };

    let nullWH = {
        1: {
            name: '(Z971 - C1|)'
            label:: 'Z971 - C1'
        },
        2: {
            name: '(R943 - C2|)'
            label:: 'R943 - C2'
        },
        3: {
            name: '(X702 - C3|)'
            label:: 'X702 - C3'
        },
        4: {
            name: '(O128 - C4|)'
            label:: 'O128 - C4'
        },
        5: {
            name: '(N432 - C5|)'
            label:: 'N432 - C5'
        },
        6: {
            name: '(U319 - C6|)'
            label:: 'U319 - C6'
        },
        7: {
            name: '(B449 - H|)'
            label:: 'B449 - H'
        },
        8: {
            name: '(N944 - L|)'
            label:: 'N944 - L'
        },
        9: {
            name: '(S199 - 0.0|)'
            label:: 'S199 - 0.0'
        },
        10: {
            name: '(L031 - C12 Thera|)'
            label:: 'L031 - C12 Thera'
        },
    };

    // ================================================================================================================
    // Signature types
    // ================================================================================================================

    // signature types
    return {
        1: { // system type (wh)
            1: { // C1 (area id)
                1: c1Combat,
                2: c1Relic,
                3: c1Data,
                4: c1Gas,
                5: c1WH,
                6: c1Ore,
                7: {} // Ghost
            },
            2: { // C2
                1: c2Combat,
                2: c2Relic,
                3: c2Data,
                4: c2Gas,
                5: c2WH,
                6: c2Ore,
                7: {} // Ghost
            },
            3: { // C3
                1: c3Combat,
                2: c3Relic,
                3: c3Data,
                4: c3Gas,
                5: c3WH,
                6: c3Ore,
                7: {} // Ghost
            },
            4: { // C4
                1: c4Combat,
                2: c4Relic,
                3: c4Data,
                4: c4Gas,
                5: c4WH,
                6: c4Ore,
                7: {} // Ghost
            },
            5: { // C5
                1: c5Combat,
                2: c5Relic,
                3: c5Data,
                4: c5Gas,
                5: c5WH,
                6: c5Ore,
                7: {} // Ghost
            },
            6: { // C6
                1: c6Combat,
                2: c6Relic,
                3: c6Data,
                4: c6Gas,
                5: c6WH,
                6: c6Ore,
                7: { // Ghost
                    1: {
                        name: '(Superior Blood Raider Covert Research Facility|)'
                        label:: 'Superior Blood Raider Covert Research Facility'
                    },
                }
            },
            12: { // Thera WH
                1: c12Combat
            },
            13: { // Shattered WH
                5: c13WH,
                6: c13Ore
            },
            14: { // Drifter Sentinel WH
                1: c14Combat
            },
            15: { // Drifter Barbican WH
                1: c15Combat
            },
            16: { // Drifter Vidette WH
                1: c16Combat
            },
            17: { // Drifter Conflux WH
                1: c17Combat
            },
            18: { // Drifter Redoubt WH
                1: c18Combat
            }
        }, // system type (k-space)
        2: {
            30: { // High Sec
                5: hsWH
            },
            31: { // Low Sec
                5: lsWH
            },
            32: { // 0.0
                5: nullWH
            }
        }
    };
});
