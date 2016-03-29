var pokeTypes = {
    
    // each 3-letter type, its resistances, weaknesses, immunities, and raw image data
    'fai':{'resist':['fig','bug','dar'],
           'weak':['poi','ste'],
           'immune':['dra'],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABSElEQVR4nNWWoW7DMBCG/1RhU59iqG9Ss6Iq0GxwYG8wPpCxDnVsGgq74PGySpUmjQwUVwppyTywuXNud26sRtryMd9dfP/5zoozACisdRggT8tllhfWuse7exy2u7/Wk8R+vQIAlwPAYbvzhsHwttkAAHJuvJxMWoHj2VTcoKlq0e/toU+LlXzaWtM4Cp1cfIz5ohQFSbb5olT34fE8lq+5xlYHYhhjTvqI6Jj0+eo6KZ6UTp+icwE+GfC7rQCigiV4fFPVGM+mrTyxQ/OMZHMW/Sg2El0gIvVucX4KlTX1MkLhqaUS7uu7IOeTf1VKAXJw6phoGGOORROROJJd8ykjlC6oy7yGhKLPGcleCgD6646OfAdaBfi/W0hT1erpct+563g+J2rMCmvdw83tIJ8S5fvr1yXer1fi6f9nXi4+AHwP1pCf05809KUJECnTvQAAAABJRU5ErkJggg=="
          },
    'fir':{'resist':['fai','fir','gra','ice','bug','ste'],
           'weak':['wat','gro','roc'],
           'immune':[],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABZ0lEQVR4nNWWsU7DMBCG/0uDWPsYfQJE+wR46xwURMTAG4GChJS26s7mvgFly9jHyNIBFWKGxMG1Esd2SyQ+KVLufHf5HZ9lEwAkcSRwBgQp743PrjTVydTYPd8CIVutKUziSDy9vII+Uje1Bi6+LgEA34HbfxmVlfxD+NkfnGcgRCIEUInPMzeVBg6eeaVD7HZXAABC3Xk9GXcmicf3Vj+l06Nx3W6LtanXhq4xUAdN4k3cvI2NtkqXaNt8XWPYHmaGMeYVzzkHUAnczAvvehIB8puAFAKYl1tlMy/QtaV96kmC/hAzpuWWcM6tWse2noQghmmhvtxT6nlNAMBRD/fBGGvahHPe2iYu9VRObiFbVNF6m8gWk48Lg03ABZd94HSQUTo1FtfHXW0bdI2UxJF4frg661ViCLa7Aov9rF6BPGvuFv+FxX4GAapur/d3t79nTNdpQ8oYKbGq/69zakoQAMJyuaIfuTGW960fJ0YAAAAASUVORK5CYII="
          },
    'wat':{'resist':['fir','wat','ice','ste'],
           'weak':['ele','gra'],
           'immune':[],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABg0lEQVR4nNVWMW7CMBR9blEGTpErIFXqXLpEYu1WJUuVkQNwAg7A1HaAjVwAyWIIXSOhRqgTvUJvkKG/Q+TEmNixUyrKYwC///P8/P8HzAAgjGLCCUGwl3PKZVQ/w4DlYs5YGMX0+jJDsvacjZ4T+Sfh6yNGDwCStYfd/tyW3PCevcHvX5cHENhmG9zc3lXr6bgAAExmnpYTawEdL8ebYibe5PFKDsoBGflq2Mg1bagzbtIy8aqe6vGgA10RBAEAgHNemZkgRb4aVpzIaXrORm8wShtzrQ8wHRdH7ZRRblAYudpEcWCw1lVzzd0ElBFqg67Nv4WqyzlvHUUBqw6ISon35rjdhjJ0I+SS49SBv8BglB7Nt2yac66df6DlAPLMy6JqVYIgsKqmCjEqbT+fptHt3AG1KqYq2aDr98v4RwaUlRDi8mebtQtnq6d6ZGEU0/3D88VdJbbZBn4/QY9A2O1L4hIgbq9+P8E3CAwAHqMnYihf/wHyFZtAIEbVFVrGcjFnP1ldyFaN4argAAAAAElFTkSuQmCC"
          },
    'ele':{'resist':['ele','fly','ste'],
           'weak':['gro'],
           'immune':[],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABT0lEQVR4nNVWMW6DMBR9jpA4RqVuOULXbOYEXip5zzHC3A1lbKaqB4jqjbE9QjZWjlB1codiZJvvb2ijRrwJ3n8fP9sPsAAApbXFCvF6OolCaW2fj0eUn++39rMMfQ1A2wLAj/m+vrGjZbhcPgDcoYjJ7fYBX/dvk4ayq0a+7KqgltJTtRRPjUP1OY8OG1/kF2Ls9pa85vSUkZTx3LNdX+yxoMQOUkp2sLl6xxtjRpNtU2G3tyNH9dJ9ItCwE3CNwLC1mQlw+rYRQFcFK9w2YqoBJhw37oapBZgTmzn6thGTVUzBGJON3L9E6BpIPZudAIBgtXIRyulTX7EUpJRjLI0xZB8bIbeF8Tb+lndYEkffNNX353eA46kVu3bMyB9ZGX0tHJbyqZofM6oec/59/CMTSmv78vS4yqPE4ayGHejr4WyxHhzOCgAggHUfp78BaQTHHloqkzoAAAAASUVORK5CYII="
          },
    'gra':{'resist':['wat','ele','gra','gro'],
           'weak':['fir','ice','poi','fly','bug'],
           'immune':[],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABRklEQVR4nNWWoZKDMBCGf27w2D7GycrauMrIOB4BW3MCd+4OVxmJSyWy8nyfoBKH40QJk2Q2m1xPdPgUyZ9NdtllSQEAUqkZG0Sfz0UplZq/vj9wn26v9udPXKYBgJpLALhPt2ViO1x/rgB2KMPJ/fveW1hXjTfuxpacdzXO7j8a5eObK6acj82FGmf3rBbz0QsghhACQoh13MvhZVpIGVUCjvqAbmzJzY76wNpRGGMAgNyT00KyA1jTbBqvLu1huXRj65VFXTWATmsxskooJPZW3LQDj+BiH7u71l3DaRTZAYTdwOIeZoxhy8k6VFfNWpKWXg6sFiOrhFJl4qa+lwNq83i2wVH2Od0sBzYD1FsPyyRFmBFuz2fOS/7IqE5AdSR3zGncnimN8rGQSs2nT7XNq4RerhKXaVjuFhtC7wAABbDt6/Qv3+HZ1Nf4j4kAAAAASUVORK5CYII="
          },
    'ice':{'resist':['ice'],
           'weak':['fir','fig','roc','ste'],
           'immune':[],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABPklEQVR4nNWWsU7DMBCGP1eR8hysPAA7TOQdokx5Ax4AVQxl6cQEdKr6DoGlMGfskBXUDu3WmckMwZVx49o4GNFvSXS+2P/Zd84JgLwoJQBIQGhPZeuDcLsEMptORJIXpXy8v2OzTaMtFIPlGgCZAGy2qTIcDU8vbwAkpvHy/MT58dnpBwB1s39qakzH9Ovysc1nYmoc6IM+4nWury68hNnsrvm6MDUmFr9eZFm2e6+qCmjFDcdzq18oUQIAdmLrxr6zKrjWL+wSGbhd+jMcz/d238QnfbqIdgI+/OsUUhy6sQDnybiIEkCb299vnq4iNv1C6uBXa8AmwDdVQuog6EdWN6l1MduYvvuHvndhahR5Ucqb24ejbCVWixGJlJLlGp5f35Gyb+f5d6wWI+Cr11Xt9E8DECJeq+zDbDoRn4DYgUxODM54AAAAAElFTkSuQmCC"
          },
    'fig':{'resist':['bug','roc','dar'],
           'weak':['fai','fly','psy'],
           'immune':[],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABgklEQVR4nNVWMXLCMBDcUzyZ/AEekNKvyEBeQBEyrvMDv4CeLhQ0CempzAsYD5VK/pC8gBl8KSwRISRzTmAI253u9m5lnc4iAMiehqyYcW2Yzt6JnodDfp1MQPP5pfW0Q1ni5fMLSVJxLb4sLy2pFdZaA50uEn/xPk13No9GQTLl+Z7f2iGOJJby/GitmEblOl1HE3paB+2QCH/N58bWYj5f494JxNDv9yVhB/FFUexEFEc4lOd1nOFIa4o2YJPaQhIs0hQwovxcsXm3SNM930LQEaINuOhpLUpsW6eA6fG2hYQ4Swv5cFvIzeWe7G8hPgHJV3fRNFlsrlOcSusWkqCpz08NVRGdLFnogv+1/Y4h2SqF2+0dNjj8SVBgirgI+UNrsYkk5bs40DjIMv54eMRmtYyS/iPWWmNsnxKb1bJ+W1wRxp0uAIAAYJBluzt3wwy1NSYRiAlMbCLxMzqsXTVcV6VAFQBFAAjui529u0fsJjd0MNiQVJ3BlGaAGdPZG30DTue3w6LtIfcAAAAASUVORK5CYII="
          },
    'poi':{'resist':['fai','gra','fig','poi','bug'],
           'weak':['gro','psy'],
           'immune':[],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABTElEQVR4nNWWMXLDIBBFPxndwTTuMnGOIqq4VEmnNqlTxMewOsqU7qTSx3BuEHX25ACkwJsgjFY48kyGV4ld+CzsChAAUGltkSHvxoii0tq+vr1geVr9dzxXcdwD0LAFACxPK2fIiEP3CUigCI2PpcTX0wfu5cNgQN+In+9FbaM+softW2hQm2Ik7nwRcoTB+0LhxDGb3pVsvxSNmKYfY3QBIUopKKUuRKZ8t9IY0/QppjqYdQcgfkhxPqJtWwCuBGIBpWhwsAtwk/9NvG/EoAwWtYVBd26ladLiOdgS8vFTnUrfiMG4WO3PnY/NQChyTbopWIMOffPb1rsSbT29s6kk/gOXpJYXt+tzSpRILiHCP8uJWLq5fnM0QqIX2diJ4QuHfrN2peLbx/rN0QgvMlFpbbfP2yyfEkZuXAaO+/PbIiOM3AAABJD3c/obrEy5n5YcTf0AAAAASUVORK5CYII="
          },
    'gro':{'resist':['poi','roc'],
           'weak':['wat','gra','ice'],
           'immune':['ele'],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABVUlEQVR4nNVWvWrDMBD+VLxn7qt46yg6djIFU3fOKxQCnbuZQpcEsuQJzE2hm14ig0et2bLFXSw4X/XjuAXjb9L93+kO6RQAVGXRYYHY7Q8qq8qi+/za4mKbufO5Cee2BYAuA4CLbRxjMTDmG8AKmWTm+QMA4D5fDwysqb18LpNyaWNNHTyH9KQvniMA3HGlUPIhnpRJHUm/vjfec0xP6vDkAVGAhNYaWmuv45QslowPIb2Ur2gBALB9e4Q19cARl82NLKXgWke0Hsw6Ef1rIlP9JTvAMabNU/AX+2QB/NZDQYlotnGKFkBE0deHF8e7ExqHKWOSsvEW4Lv1MW2Wds4mxE/FHBM/+JFZU/+aefcicX6KdqPl48dsQ/HlR6aqsug+Nk+LXCWOp36VOLdtv1ssB8fTCgCgAOClfO7XadWL3XatcDvGbubc97WnOyZN+9ntD+oH1ILDRtEmklIAAAAASUVORK5CYII="
          },
    'fly':{'resist':['gra','fig','bug'],
           'weak':['ele','ice','roc'],
           'immune':['gro'],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABSElEQVR4nNWWq3KEMBSG/+ww01fYR8DV9hXikMjwFjwCb7B1G4lcF7vr1uKQSOw6UFS0oZlDQpKWGYZPkUMu/7nkwgAgF2LCAamlZEkuxHS9XPB4sb31RCG7ATkwJQDweDHIbthbUxRt+0QKIFkY0w8AwPX9bTGoaMbZXjTjbKe2rdrmujaNAHAyO5o/bPRlZv122XxtKrQvM2vgTBvVmNDOFM65r8u/6MsMUMq5rvr515cZztVt0c/rgJ7ATCNFl5YyhGzh+Lm6oWhGa7Y1Xgc0rgj4BPhQluhr5tJRyhnAk9VqwDkPiqa5QGj0Y7LkykJQBmIj/9cxFPPUcxFcQhQz9Wv7Y4v51/CWUAhrm8wHdd4WjLVSc15krt2/diqEjoltA78lSS8ylgsxierzmE+Je/2dAdkNaNvn3pqiSO81AIABx35OfwEGJbWK1x+gUgAAAABJRU5ErkJggg=="
          },
    'psy':{'resist':['fig','psy'],
           'weak':['bug','gho','dar'],
           'immune':[],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABrElEQVR4nNVWMW7CMBR9RkEcgBt075alYySWnCGV0nKIbAxVFsQB2g4VEgNnyGKJBYGQ2NhZmDhDpLiDa/pjO44pING3JP7f7+XF/zsxA4AkfREdAQSVAAAwebkdhAAYM8NmyAATv/zpfMaC1+dUvH9+oLc6Xt9oCypYVorBFlUpQAAdMFTLA5BABEwAvdVRBu4EbYWoAOzXO6APBDSxX+/w8PSIMgtrhO5ke7pvyql42/hSjvKo0KFmaIJCCenmbbHBYmSM9TmXcHSPtRfQEcex9SFxHDfm/qJ3CScwIh4oigKALKsS7U62KLMQRVGgtDxcgXKoXmnMdHMUnC+gjFIhWtoyC8GRuyTAo9wwxyPJcZm26djgbCEFupLdybY2tm00neOjf858CmcFqCiP8pNZjhwg1RgsRtYVssX0L01Nv8FHE0cwjwrwKDeMlFlo/SK1gbak7yZ2cZjwbCEFfQUAv1bRedfkWH9krl1vy9EKNXH1OI9kG9KYPsfG0X9kbJik4mv4dldHCR/s1zuM+xtZgWp5kGeLf4RxfwPg59w0TNJbH6Bvgul8xr4BYe/p8wjjMDYAAAAASUVORK5CYII="
          },
    'bug':{'resist':['gra','fig','gro'],
           'weak':['fir','fly','roc'],
           'immune':[],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABHElEQVR4nNWWMQ6CMBSGfwwncXFWN2/AzsDYxJEjOOtmnFxMTBwcHNx7A91gMmzCATgDOBBNLX2FFiPhS1gePy9/+36gDgAEjJUYIJfTyXEDxsrdYYtzfu/bjxFJmiEAShcAzvkdSZr1bMmM+BZhAsCVi9PFjHxoP1sq62F0rGna1qg+OuOix5F4U2deh8rMc3Ula9RGUHUR2eOI0GnxPO9zyeb+3cdtltThnNeM2DJe+wCq+NhsgtUCZDjnrfKr4is2fGncp9cIqTDtY7UAoBr9e/xdCKNjpwj+5B3orOHNXx8K6wmIiDtIZdhU0xajH5nuSyHGidKZalTIHp2AsXK+8Yd5lHgU1QSSNEN8i/r2ZMTkUQAAHGDYx+kXiFuMI8bTW6cAAAAASUVORK5CYII="
          },
    'roc':{'resist':['fir','poi','fly','nor'],
           'weak':['wat','gra','fig','gro','ste'],
           'immune':[],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABbUlEQVR4nNWWMU8CMRiGn17Y2d1x0x+gG9v9BZIjuTD4C9wY2ZxYHEyICRrD4N6NTQY3wMEEdHCAib9AHUil9HqFcjEXnun6vU2/9+t9vZ4ASJOG4gR5fHoRIk0a6v6hx3jQLdtPEKv5hNcfqACMB11W80nZnoIYTWdQrW0KMINXF7XM5Hq7l4kNOy3vnBBdazpmj30eI1N0mc/DNOQqMETX3L0tvGOXxygzw0Mcx8RxnJugqA7uwnxU9k/Z5fb6rLA+7LSc5qWUf89moT6CCjATFMVXqDa/bzMgsIVcSf4DKeVB5uGIM3BMEpt6u+fsdXP9Q89C8BswP212H0spvYlt3XUOfOu7OLqF8pJqzN3cpxdBpElD3dQvWc0nuRcZbHdDt409NmMau8V8+iHrw/YiG01nLKq13QJOCV1ABWD5/cn7xxeRWpftK4PC/aO8rJ6jEAiAZjNRKIhQCNaoTbh0hGVe+1Ji89zvP4tfyti1jPIW66UAAAAASUVORK5CYII="
          },
    'gho':{'resist':['poi','bug'],
           'weak':['gho','dar'],
           'immune':['fig','nor'],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABgElEQVR4nNWWPVLDMBCF3yo+BMfIMaLKFU3cENKko/YJfAFgKGBgGDiAJ4WTLkdImdyAXCJLIQPS2pLlJBMmX+Px/nklPa9NADDJpowTwBwuQwpgYuzrOEUEYgKYvPmkrPpk/LxnMAHvH2+UTLIpPz7fY7ukU6zhbGxWgBorTgBguyRsVv/bUF/WXwvQgJBI4/Bq5ASmhXusZU6Ovete5sXUlGitMRsuWntUdmBX8222p/WocR/Ki6kZQvaoPHEOWmtorZ0mj81r85U5OTYZ00YS9FrMhguUebP5qqoA+HfQHH3Tb/KMfOyaMv5HOj6iF/ArAVS1Zg+bvGVOjmTSgoE83GSIKAlJQlKIQUqlzzsgiV6APUUkXcdskxaMtOBakn81Y98rSZSEunR+SN4xu24TPIG2XY+RSyjv0Jo+Oj9kckoA7RNJxvnyunw+v69HmmRTvrt+uMhfid1gbk5gszKGS2I3mIOZQQBwM75l6jFQeW+uROf9g2Vm55mvny/0DVekzoAzlS9WAAAAAElFTkSuQmCC"
          },
    'dra':{'resist':['fir','wat','ele','gra'],
           'weak':['fai','ice','dra'],
           'immune':[],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABc0lEQVR4nNWWoW7DMBCGf1tBg6F7gmUqKhodMy6p1K4KyBuU9hWGVjKtUrVp01CxWTXUvsEKDcOGxm8gsuo4dmJnk9p9KL7zne/sP3EYAExnBeEf8vqyYmw6K+jp8QGL5e7U9UShVImL7w8kALBY7qBUeeqaojjstxgOeNWAaby6ucXb/agRMJlvAKDh03bb57OHxGiba6xr1HAzsemwcTVl2m2/zx4S4xt/fa4aNdYasBFCQAhRS2D6Yu2xMa6xTdLqBZBmRdeUYNKswGS+6Swqhs4GfEgpo2OOkhjV3oPfrNMqoRDM4w9ZUBNyCnZuF70b0MmllMEyC931GBKC/xKO281KHkIIZ1xbrj5y1HBixwYO+613YshxunDtus5l+1xr2HPsGtk4z+ny+q5xE7s0qqWifWlWBD278pmyM32uNVxjfRN7Gzh3ar8SSpWt8jlHhgMOAoEBwDjPCQA4cTBiYJX5T2j7SPTOyQgEwvvzmv0AVCHIkiofXwIAAAAASUVORK5CYII="
          },
    'dar':{'resist':['gho','dar'],
           'weak':['fai','fig','bug'],
           'immune':['psy'],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABMklEQVR4nNWWvW3DMBBGnwxVHsBFGk9hwAiyAKHSjUoCWUYbuBLiMo3r20AN98gILqMUAQ1G/BMTBYa+SryPlN6ddKQqgFbrkRXq/XKpqlbr8e18pu+6R/MUaTCGz92OGqDvOgZjHs1UpMEYjk3znYAbfD4cvMn99erFXk+n5BzXz623vo1NxynGjWuG4GNyoUKAoVjO/7jdkmPwGTfejISUUiilog+Y+qXrIZ/4VEUJADxtt7P9EGBqvYjcr1OFcFXnpywnFzAlC58rFiycwFxASFdYRIINHFLxJ/QXudAi4lXY9ef2QlECIpK8ca6J4efWGOqRnD/Vr99ADHTOd7ukqlbr8WW/ZzAmepBBfkexvo0tPbayjMGTOHWQlWyf/zGOMdbAvfpr0rFpAKhg3b/TX/4emGgdSvknAAAAAElFTkSuQmCC"
          },
    'ste':{'resist':['fai','gra','ice','fly','psy','bug','roc','dra','ste','nor'],
           'weak':['fir','fig','gro'],
           'immune':['poi'],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABKklEQVR4nNVWsQ2DMBA8ImaJ6LOAS0ag9AiUjGApDVKkiJIyEyBKFqBKEyVj0IcU0Se2A7bBkZCv89/bPv+/344AION8RIC41HUUZ5yPdVVhGJ5b61mEvr8DwBgDwDA8yRAMSG+sGw+HveLIWKKMu+42aZd5X472mBMua9zJpE28SThBiNybM/npGuMZPwVpmgIA2raVNighRP6xkc/UPNOavnA6AInsupsSnaIoFT99TPNoriu3BDsTqS/MWIKiKH+EumBtadlgzQBFnSLGWOIcsc1L6HthS6VLCJE7Z8HktyaTOpzugK3zzEGuc0AtybWcjkV3APBL/T9arA7rQ6Z3HkBN/RQ/ZfPl5jRGGefj6XgO8itxfTTvDPT9PbgDXB8NACACwv5OvwDuXbW/XWuk0AAAAABJRU5ErkJggg=="
          },
    'nor':{'resist':[],
           'weak':['fig'],
           'immune':['gho'],
           'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAABM0lEQVR4nNWWO27CQBBAn4NryhRcBXGAvYG7rMRh6CNRWoJUucEgKiSUq1gW4gYUToFGWpv9YGwp8at2xvO3d70ZQGFtwwT53u2yvLC2+frccJvN/7qeXtT1FaDJAW6zuSomw/n8A0DeVa5WSxaLdwCq6gIQlJVn9SqnYsb8tEblzU3oPvAVtF5/POh8diG9yq7eF9OXN1RjqwEfrrOLMQZjjNcupPcV142Zytsl2UCMstwPcR+FZAMi0jtoyEcn7E56KNEGhiby+cdivjKsPG3SH2MMIoKItE4QGP+ze3kPiEh0QyrPbkYIv51YrmQD3Ql25VjisfENo9WA/t2q6tIqKiS7R2lZ7lt2obUvZmrt5tEalaywtim320leJQ6n430T1/X1obP/zuF0BCCDaV+nfwERD6ivKB0NBwAAAABJRU5ErkJggg=="
          },
   
    // The list of all 3-letter types for iteration
    'all':['fai','fir','wat','ele','gra','ice','fig','poi','gro','fly','psy','bug','roc','gho','dra','dar','ste','nor'],
    
    // Dictionary to convert 3-letter type name to the long name
    'long':{'fai':'Fairy', 'fir':'Fire', 'wat':'Water', 'ele':'Electric', 'gra':'Grass', 'ice':'Ice', 'fig':'Fighting', 'poi':'Poison', 'gro':'Ground', 'fly':'Flying', 'psy':'Psychic', 'bug':'Bug', 'roc':'Rock', 'gho':'Ghost', 'dra':'Dragon', 'dar':'Dark', 'ste':'Steel', 'nor':'Normal'},
    
    // Returns a list of the types weak to the given type
    'weakTo':function(str)
    {
        if (str.length >= 3 && this.all.indexOf(str.toLowerCase().substring(0,3)) !== -1)
        {
            str = str.toLowerCase().substring(0,3);
            var weak = [];
            var _self = this;
            this.all.forEach(function(elem){
                if (_self[elem].weak.indexOf(str) !== -1)
                    weak.push(_self.long[elem]);
            })
            return weak.length !== 0 ? weak : "None";
        }
        return "No Such Type: " + str;
    },
    
    // Returns a list of the types resistant to the given type
    'strongTo':function(str)
    {
        if (str.length >= 3 && this.all.indexOf(str.toLowerCase().substring(0,3)) !== -1)
        {
            str = str.toLowerCase().substring(0,3);
            var strong = [];
            var _self = this;
            this.all.forEach(function(elem){
                if (_self[elem].resist.indexOf(str) !== -1)
                    strong.push(_self.long[elem]);
            })
            return strong.length !== 0 ? strong : "None";
        }
        return "No Such Type: " + str;
    },
    
    // Returns a list of types immune to the given type
    'immuneTo':function(str)
    {
        if (str.length >= 3 && this.all.indexOf(str.toLowerCase().substring(0,3)) !== -1)
        {
            str = str.toLowerCase().substring(0,3);
            var immune = [];
            var _self = this;
            this.all.forEach(function(elem){
                if (_self[elem].immune.indexOf(str) !== -1)
                    immune.push(_self.long[elem]);
            })
            return immune.length !== 0 ? immune : "None";
        }
        return "No Such Type: " + str;
    },
    
    // Returns a list of types that do super effective damage to the given type
    'superEffectiveAgainst':function(str)
    {
        if (str.length >= 3 && this.all.indexOf(str.toLowerCase().substring(0,3)) !== -1)
        {
            str = str.toLowerCase().substring(0,3);
            var _self = this;
            var weak = [];
            this[str].weak.forEach(function(elem){weak.push(_self.long[elem])});
            return weak.length !== 0 ? weak : "None";
        }
        return "No Such Type: " + str;
    },
    
    // Returns a list of types that are "not very effective" against the given type
    'notVeryEffectiveAgainst':function(str)
    {
        if (str.length >= 3 && this.all.indexOf(str.toLowerCase().substring(0,3)) !== -1)
        {
            str = str.toLowerCase().substring(0,3);
            var _self = this;
            var resist = [];
            this[str].resist.forEach(function(elem){resist.push(_self.long[elem])});
            return resist.length !== 0 ? resist : "None";
        }
        return "No Such Type: " + str;
    },
    
    // Returns a list of types that cannot damage the given type due to immunity
    'thatDontAffect':function(str)
    {
        if (str.length >= 3 && this.all.indexOf(str.toLowerCase().substring(0,3)) !== -1)
        {
            str = str.toLowerCase().substring(0,3);
            var _self = this;
            var immune = [];
            this[str].immune.forEach(function(elem){immune.push(_self.long[elem])});
            return immune.length !== 0 ? immune : "None";
        }
        return "No Such Type: " + str;
    },
    
    // Returns the damage multiplier that results from the given attack and defense types
    'getDamage':function(atk, def)
    {
        if (atk.length >= 3 && def.length >= 3 &&
            this.all.indexOf(atk.toLowerCase().substring(0,3)) !== -1 &&
            this.all.indexOf(def.toLowerCase().substring(0,3)) !== -1)
        {
            atk = atk.toLowerCase().substring(0,3);
            def = def.toLowerCase().substring(0,3);
            
            if (this[def].weak.indexOf(atk) !== -1)
                return 2;
            if (this[def].resist.indexOf(atk) !== -1)
                return 0.5;
            if (this[def].immune.indexOf(atk) !== -1)
                return 0;
            return 1;
        }
        return -1;
    },
    
    // Returns an <img> DOM object containing the given type's sprite
    'getImage':function(str)
    {
        if (str.length >= 3 && this.all.indexOf(str.toLowerCase().substring(0,3)) !== -1)
        {
            var img = document.createElement("img");
            img.setAttribute("src", pokeTypes[str].img);
            return img;
        }
        return "No Such Type: " + str;
    },
    
    // Returns just the src string containing the raw image data for the given type's sprite
    'getImageSrc':function(str)
    {
        if (str.length >= 3 && this.all.indexOf(str.toLowerCase().substring(0,3)) !== -1)
        {
            return pokeTypes[str].img;
        }
        return "No Such Type: " + str;
    }
};
